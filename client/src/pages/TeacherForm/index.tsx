import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { DotLoader } from 'react-spinners';

import HeaderContainer from '../../components/Header';
import Input from '../../components/Input';
import PhoneInput from '../../components/PhoneInput';
import TextArea from '../../components/TextArea';

import { Container, Main, FormFooter, WarningIcon, ScheduleItem } from './styles';
import Select from '../../components/Select';
import notify from '../../services/toast';
import Schemas from '../../validators';
import api from '../../services/api';

interface Schedule {
  week_day: number | string;
  from: string;
  to: string;
}

interface FormValues {
  email: string;
  name: string;
  whatsapp: string;
  avatar: string;
  bio: string;
  cost: number | string;
  subject: string;
  schedule: Array<Schedule>;
}

const TeacherForm: React.FC = () => {
  const build = process.env.NODE_ENV;

  const initialValues: FormValues = {
    email: build === 'development' ? 'leoronne@gmail.com' : '',
    name: build === 'development' ? 'Leonardo Ronne' : '',
    whatsapp: build === 'development' ? '5516981079256' : '',
    avatar: build === 'development' ? 'https://avatars1.githubusercontent.com/u/47757685?s=460&v=4' : '',
    bio: build === 'development' ? 'Product Manager at @visoradl. Passionate about everything that involves technology and programming.' : '',
    cost: build === 'development' ? 15 : '',
    subject: build === 'development' ? 'ReactJS' : '',
    schedule:
      build === 'development'
        ? [
            { week_day: 1, from: '19:00', to: '21:00' },
            { week_day: 3, from: '19:00', to: '21:00' },
            { week_day: 5, from: '19:00', to: '21:00' },
          ]
        : [],
  };

  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (values: FormValues) => {
    try {
      setLoading(true);
      values.whatsapp = `+${values.whatsapp}`;
      await api.post('/classes', values);
      notify(t('userCreated'), 'success');
      setTimeout(() => {
        history.push('/');
      }, 1500);
    } catch (err) {
      notify(err?.response?.data?.message ? err.response.data.message : err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const setScheduleItemValue = (position: number, field: string, value: string, array: Array<Schedule>) => {
    const newArray = array.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value };
      }

      return item;
    });

    return newArray;
  };

  return (
    <Container>
      <div className="container" id="page-teacher-form">
        <HeaderContainer title={t('teacherformHeader')} description={t('teacherformDescription')} />
        <Formik
          initialValues={initialValues}
          validationSchema={Schemas('TeacherForm')}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            console.log('foi');
            handleCreate(values);
            setSubmitting(false);
          }}
        >
          {}
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Main>
                <fieldset>
                  <legend>{t('teacherData')}</legend>

                  <Input
                    id="email"
                    type="email"
                    label={t('email')}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                    placeholder={t('email')}
                  />

                  <Input
                    id="name"
                    type="text"
                    label={t('name')}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.name}
                    errors={errors.name}
                    touched={touched.name}
                    placeholder={t('name')}
                  />

                  <PhoneInput
                    id="whatsapp"
                    type="text"
                    label={t('phone')}
                    handleBlur={handleBlur}
                    handleChange={(e: string) => setFieldValue('whatsapp', e)}
                    value={values.whatsapp}
                    errors={errors.whatsapp}
                    touched={touched.whatsapp}
                    placeholder={t('phone')}
                  />

                  <Input
                    id="avatar"
                    type="text"
                    label={t('avatar')}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.avatar}
                    errors={errors.avatar}
                    touched={touched.avatar}
                    placeholder={t('avatar')}
                  />

                  <TextArea
                    id="bio"
                    label={t('bio')}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.bio}
                    errors={errors.bio}
                    touched={touched.bio}
                    placeholder={t('bio')}
                  />
                </fieldset>

                <fieldset>
                  <legend>{t('classInfo')}</legend>
                  <Select
                    id="subject"
                    label={t('subject')}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.subject}
                    touched={touched.subject}
                    options={[
                      { value: 'UX/UI', label: 'UX/UI' },
                      { value: 'JavaScript', label: 'JavaScript' },
                      { value: 'ReactJS', label: 'ReactJS' },
                      { value: 'React Native', label: 'React Native' },
                      { value: 'Node.js', label: 'Node.js' },
                      { value: 'Angular', label: 'Angular' },
                      { value: 'Type Script', label: 'Type Script' },
                      { value: 'Vue.js', label: 'Vue.js' },
                      { value: 'PHP', label: 'PHP' },
                      { value: 'Python', label: 'Python' },
                      { value: 'HTML/CSS', label: 'HTML/CSS' },
                    ]}
                    value={values.subject}
                  />

                  <Input
                    id="cost"
                    type="number"
                    label={t('cost')}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.cost}
                    errors={errors.cost}
                    touched={touched.cost}
                    placeholder={t('cost')}
                  />
                </fieldset>

                <fieldset>
                  <legend>
                    {t('freeAppointments')}

                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue('schedule', [
                          ...values.schedule,
                          {
                            week_day: '',
                            from: '',
                            to: '',
                          },
                        ])
                      }
                    >
                      + {t('new')}
                    </button>
                  </legend>

                  {values.schedule.map((item, index) => {
                    return (
                      <ScheduleItem key={index}>
                        <Select
                          id="week-day"
                          label={t('weekDay')}
                          value={item.week_day}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          onChange={(e) => setFieldValue('schedule', setScheduleItemValue(index, 'week_day', e.target.value, values.schedule))}
                          options={[
                            { value: '0', label: t('sunday') },
                            { value: '1', label: t('monday') },
                            { value: '2', label: t('tuesday') },
                            { value: '3', label: t('wednesday') },
                            { value: '4', label: t('thursday') },
                            { value: '5', label: t('friday') },
                            { value: '6', label: t('saturday') },
                          ]}
                          required
                        />

                        <Input
                          id="from"
                          type="time"
                          label={t('from')}
                          handleBlur={handleBlur}
                          handleChange={(e: { target: { value: string } }) =>
                            setFieldValue('schedule', setScheduleItemValue(index, 'from', e.target.value, values.schedule))
                          }
                          value={item.from}
                          required
                        />

                        <Input
                          id="to"
                          type="time"
                          label={t('to')}
                          handleBlur={handleBlur}
                          handleChange={(e: { target: { value: string } }) =>
                            setFieldValue('schedule', setScheduleItemValue(index, 'to', e.target.value, values.schedule))
                          }
                          value={item.to}
                          required
                        />
                      </ScheduleItem>
                    );
                  })}
                  {errors.schedule && <div className="error-message">{errors.schedule}</div>}
                </fieldset>

                <FormFooter>
                  <p>
                    <WarningIcon />
                    {t('important')}
                    <br />
                    {t('inputWarning')}
                  </p>

                  <button type={loading ? 'button' : 'submit'} disabled={loading}>
                    {loading ? <DotLoader size={25} color="#efefef" /> : t('save')}
                  </button>
                </FormFooter>
              </Main>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default TeacherForm;
