import ClassesRepository from '@modules/classes/repositories/ClassesRepository';

import AppError from '@shared/errors/AppError';
import ToMinutes from '@shared/utils/convertHour';

interface ClassesList {
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

class FindClassesService {
  public async execute(week_day: string, subject: string, time: string): Promise<Array<ClassesList>> {
    const classRepo = new ClassesRepository();
    try {
      const timeMin = time ? ToMinutes(time) : 0;

      return await classRepo.filter(Number(week_day), subject ? subject : '', timeMin);
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default FindClassesService;
