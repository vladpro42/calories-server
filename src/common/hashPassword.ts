import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
  try {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password.toString(), salt);
  } catch (error) {
    throw new Error('Ошибка при хешировании пароля');
  }
};
