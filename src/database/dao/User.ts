import { User } from '../model/User.ts';
import { connection } from '../index.ts';

export const getUsers = async (): Promise<User[]> => {
    const result: User[] = (await connection.query('SELECT * FROM users'))?.[0] as User[];
    return result;
};
