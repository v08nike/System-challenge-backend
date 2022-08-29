import { Pool, ResultSetHeader } from "mysql2/promise";
import User from "../interfaces/users.interface";

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
  this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { personame, accumulatedpoints } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (personame, accumulatedpoints) VALUES (?,?)',
      [personame, accumulatedpoints]
    );
  
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection.execute(
      'SELECT * FROM buysesApi.users ORDER BY accumulatedpoints DESC',
      );
    const [rows] = result;
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const result = await this.connection.execute(
      'SELECT * FROM users WHERE id=?',
      [id]
    );
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }
}
