import { User } from '../model/User.ts';
import { connection } from '../index.ts';

export const getUsers = async (): Promise<User[]> => {
    const result: User[] = (await connection.query('SELECT * FROM users'))?.[0] as User[];
    return result;
};

export const getUserById = async (id: number): Promise<User> => {
    const result: User[] = (await connection.query('SELECT * FROM users WHERE id = ?', [id]))?.[0] as User[];
    return result[0];
};

export const searchUsers = async (search: string): Promise<User[]> => {

    const result: User[] = (
        await connection.query('SELECT * FROM users WHERE name LIKE ? OR email LIKE ?', [`%${search}%`, `%${search}%`])
    )?.[0] as User[];
    return result;
};

export const createUser = async (name: string, email: string, age: number): Promise<boolean> => {
    const result = await connection.execute('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [
        name,
        email,
        age,
    ]);
    return true;
};
