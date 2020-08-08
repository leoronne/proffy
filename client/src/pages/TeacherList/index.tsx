import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';

import HeaderContainer from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Content, ClearIcon } from './styles';

import api from '../../services/api';
import notify from '../../services/toast';

const TeacherList: React.FC = () => {
  const { t } = useTranslation();
  document.title = `Proffy | ${t('study')}`;

  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState<Array<{ label: string; value: string }>>([]);
  const [classes, setClasses] = useState([]);

  const noSubjects = t('noSubjects');

  const handleResetFilters = () => {
    setWeekDay('');
    setSubject('');
    setTime('');
  };

  useEffect(() => {
    async function loadSubjects() {
      try {
        // setLoading(true);
        const response = await api.get('/classes/subjects');
        const { data } = response;
        setSubjects(data.subjects);
      } catch (err) {
        notify(err?.response?.data?.message ? err.response.data.message : err.message, 'error');
      } 
    }
    loadSubjects();
  }, []);

  useEffect(() => {
    async function loadClasses() {
      try {
        setLoading(true);
        const params = {};
        if (weekDay) Object.assign(params, { week_day: weekDay });
        if (time) Object.assign(params, { time });
        if (subject) Object.assign(params, { subject });
        const response = await api.get('/classes', { params });
        const { data } = response;
        setClasses(data.classes);
      } catch (err) {
        notify(err?.response?.data?.message ? err.response.data.message : err.message, 'error');
      } finally {
        setLoading(false);
      }
    }
    loadClasses();
  }, [weekDay, subject, time]);

  return (
    <Container>
      <div className="container" id="page-teacher-list">
        <HeaderContainer title={t('teacherListHeader')}>
          <form id="search-teachers">
            {subjects && subjects.length === 0 ? (
              <Input id="subject" type="text" label={t('subject')} handleChange={() => console.log(t('noSubjects'))} value={noSubjects} disabled />
            ) : (
              <Select id="subject" label={t('subject')} value={subject} handleChange={(e: { target: { value: React.SetStateAction<string> } }) => setSubject(e.target.value)} options={subjects} />
            )}

            <Select
              id="week-day"
              label={t('weekDay')}
              value={weekDay}
              handleChange={(e: { target: { value: React.SetStateAction<string> } }) => setWeekDay(e.target.value)}
              options={[
                { value: '0', label: t('sunday') },
                { value: '1', label: t('monday') },
                { value: '2', label: t('tuesday') },
                { value: '3', label: t('wednesday') },
                { value: '4', label: t('thursday') },
                { value: '5', label: t('friday') },
                { value: '6', label: t('saturday') },
              ]}
            />

            <Input id="time" type="time" label={t('time')} handleChange={(e: { target: { value: React.SetStateAction<string> } }) => setTime(e.target.value)} value={time} />
            <ClearIcon onClick={handleResetFilters} data-tip={t('clean')}/>
          </form>
        </HeaderContainer>

        {loading ? (
          <Content>
            <ClipLoader size={25} color="#ccc" />
          </Content>
        ) : (
          <TeacherItem data={classes} />
        )}
      </div>
    </Container>
  );
};

export default TeacherList;
