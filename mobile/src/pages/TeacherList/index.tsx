import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import i18n from '../../i18n';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('java');
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.user_id;
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    try {
      await loadFavorites();
      setLoading(true);
      const params = {};
      if (week_day) Object.assign(params, { week_day });
      if (time) Object.assign(params, { time });
      if (subject) Object.assign(params, { subject });
      const response = await api.get('/classes', { params });
      const { data } = response;
      setTeachers(data.classes);
      setIsFiltersVisible(false);
    } catch (err) {
      console.log(err?.response?.data?.message ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleResetFilters = () => {
    setWeekDay('');
    setSubject('');
    setTime('');
  };

  useEffect(() => {
    handleFiltersSubmit();
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader
        title={i18n.t('teacherListHeader')}
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>{i18n.t('subject')}</Text>

            <TextInput style={styles.input} placeholder={i18n.t('subject')} value={subject} onChangeText={(text) => setSubject(text)} placeholderTextColor="#c1bccc" />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>{i18n.t('weekDay')}</Text>
                <TextInput style={styles.input} placeholder={i18n.t('weekDay')} value={week_day} onChangeText={(text) => setWeekDay(text)} placeholderTextColor="#c1bccc" />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>{i18n.t('time')}</Text>
                <TextInput style={styles.input} placeholder={i18n.t('time')} value={time} onChangeText={(text) => setTime(text)} placeholderTextColor="#c1bccc" />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers && teachers.length > 0 ? (
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.user_id} teacher={teacher} favorited={favorites.includes(teacher.user_id)} />;
          })
        ) : (
        <Text style={styles.noData}>{!loading ? i18n.t('noData') : ''} </Text>
        )}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
