import React from 'react';
import { View, ImageBackground, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import i18n from '../../i18n';

import giveClassesBgImage from '../../assets/img/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
        <Text style={styles.title}>{i18n.t('beProffy')}</Text>
        <Text style={styles.description}>{i18n.t('startProffy')}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://findproffy.web.app/classes')}>
          findproffy.web.app
        </Text>
      </ImageBackground>
      
      <RectButton onPress={() => Linking.openURL('https://findproffy.web.app/classes')} style={styles.okButton}>
        <Text style={styles.okButtonText}>{i18n.t('access')}</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
