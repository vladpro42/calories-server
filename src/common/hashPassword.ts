import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
  try {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password.toString(), salt);
  } catch (error) {
    throw new Error('Ошибка при хешировании пароля');
  }
};

export function validatePassword(password: string, hash: string): boolean {
  try {
    return bcrypt.compareSync(password, hash);
  } catch (error) {
    throw new Error('Ошибка при сравнении хеша пароля');
  }
}
