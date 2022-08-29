import connection from "../models/connection";
import User from "../interfaces/users.interface";
import UserModel from "../models/users.model";

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const user = await this.model.getAll();

    return user;
  }

  public async getById(id: number): Promise<User> {
    const users = await this.model.getById(id);
    return users;
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }
}
