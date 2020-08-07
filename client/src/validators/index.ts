import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { isValidPhoneNumber } from 'react-phone-number-input';

export default function Schemas(schema: string): Yup.ObjectSchema | undefined {
  const { t } = useTranslation();

  const TeacherFormSchema = Yup.object().shape({
    email: Yup.string().email(t('validmail')).trim(t('validmail')).nullable(false).required(t('requiredmail')),
    name: Yup.string().trim(t('validname')).required(t('requiredename')),
    whatsapp: Yup.string()
      .test('WhatsApp', t('validPhone'), function (value) {
        if (value && !isValidPhoneNumber(`+${value}`)) return false;
        return true;
      })
      .required(t('requiredPhone')),
    avatar: Yup.string().trim(t('validAvatar')).required(t('requiredAvatar')),
    bio: Yup.string().trim(t('validbio')).required(t('requiredbio')),
    cost: Yup.number()
      .test('cost', t('mincost'), function (value) {
        if (!value || isNaN(value) || value <= 5) return false;
        return true;
      })
      .required(t('requiredcost')),
    subject: Yup.string().trim(t('requiredSubject')).required(t('requiredSubject')),
    schedule: Yup.array()
      .test('Schedule', t('requiredSchedule'), function (value) {
        if (value && value.length === 0) return false;
        return true;
      })
      .required(t('requiredSchedule')),
  });

  switch (schema) {
    case 'TeacherForm':
      return TeacherFormSchema;
    default:
      break;
  }
}
