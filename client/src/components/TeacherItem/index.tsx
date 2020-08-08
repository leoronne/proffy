import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';

import { TeacherMain, WhatsAppIcon } from './styles';
import api from '../../services/api';
import notify from '../../services/toast';

interface ClassesList {
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
  data: Array<ClassesList>;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
  const { t } = useTranslation();
  const message = t('whatsMessage');

  const handleConnection = async (number: string, user_id: number, name: string, subject: string) => {
    const replacedMessage = message.replace('%name%', name).replace('%subject%', subject);
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURI(replacedMessage)}`, 'blank');
    try {
      await api.post('/connections', { user_id });
    } catch (err) {
      notify(err?.response?.data?.message ? err.response.data.message : err.message, 'error');
    }
  };
  return (
    <TeacherMain>
      {data && data.length > 0 ? (
        data.map((item, index) => {
          return (
            <article key={item.user_id}>
              <header>
                <img src={item.avatar_url} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.subject}</span>
                </div>
              </header>

              <p>{item.bio}</p>
              <footer>
                <p>
                  {t('price')}:<strong>{`${t('priceChar')} ${item.cost}`}</strong>
                </p>
                <button type="button" data-tip={`${t('getInTouch')} ${t('with')} ${item.name}`} onClick={() => handleConnection(item.whatsapp, item.user_id, item.name, item.subject)}>
                  <WhatsAppIcon />
                  {t('getInTouch')}
                </button>
              </footer>
            </article>
          );
        })
      ) : (
        <div className="no-data">{t('noData')}</div>
      )}
      <ReactTooltip type="dark" effect="solid" place="bottom" />
    </TeacherMain>
  );
};

export default TeacherItem;
