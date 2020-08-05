import ClassesRepository from '@modules/classes/repositories/ClassesRepository';

import AppError from '@shared/errors/AppError';
import ToMinutes from '@shared/utils/convertHour';

interface ClassesList {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
}

class FindClassesService {
  public async execute(week_day: string, subject: string, time: string): Promise<Array<ClassesList>> {
    const classRepo = new ClassesRepository();
    try {
      if (!week_day || !subject || !time) {
        throw new AppError('Missing filters', 404);
      }

      const timeMin = ToMinutes(time);

      return await classRepo.filter(Number(week_day), subject, timeMin);
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default FindClassesService;
