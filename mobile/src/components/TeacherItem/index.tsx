import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import i18n from '../../i18n';
import api from '../../services/api';

import heartOutlineIcon from '../../assets/img/heart-outline.png';
import unfavoriteIcon from '../../assets/img/unfavorite.png';
import whatsappIcon from '../../assets/img/whatsapp.png';

import styles from './styles';

export interface Teacher {
  user_id: number;
  name: string;
  email: string;
  whatsapp: string;
  avatar: string;
  avatar_url: string;
  bio: string;
  class_id: number;
  subject: string;
  cost: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorites] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.user_id,
    });
    const message = i18n.t('whatsMessage');
    const replacedMessage = message.replace('%name%', teacher.name).replace('%subject%', teacher.subject);

		Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}&text=${replacedMessage}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.user_id === teacher.user_id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorites(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorites(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar_url }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          {i18n.t('price')} {'   '}
          <Text style={styles.priceValue}>{`${i18n.t('priceChar')} ${teacher.cost}`}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}>
          {isFavorited ? <Image source={unfavoriteIcon} style={[styles.favoriteIcon]}></Image> : <Image source={heartOutlineIcon} style={[styles.favoriteIcon]}></Image>}
        </RectButton>

        <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
          <Image source={whatsappIcon}></Image>
          <Text style={styles.contactButtonText}>{i18n.t('getInTouch')}</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default TeacherItem;
