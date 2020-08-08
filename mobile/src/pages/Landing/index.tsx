import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import i18n from '../../i18n';
import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/img/landing.png';
import studyIcon from '../../assets/img/study.png';
import giveClassesIcon from '../../assets/img/give-classes.png';
import heartIcon from '../../assets/img/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    async function loadConnections() {
      try {
        setLoading(true);
        const response = await api.get('/connections');
        const { data } = response;
        setConnections(data.total);
      } catch (err) {
        console.log(err?.response?.data?.error ? err.response.data.error : err.message);
      } finally {
        setLoading(false);
      }
    }

    loadConnections();
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        {i18n.t('welcome')}, {'\n'}
        <Text style={styles.titleBold}>{i18n.t('action')}</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>{i18n.t('study')}</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>{i18n.t('class')}</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        {`${i18n.t('connections1')} ${connections} ${i18n.t('connections2')} `}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
