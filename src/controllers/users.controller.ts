import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/users.service";

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const createdUser = await this.userService.create(user);

    res.status(StatusCodes.CREATED).json(createdUser);
  };

  public getAll = async (_req: Request, res: Response) => {
    const user = await this.userService.getAll();
    res.status(StatusCodes.OK).json(user);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found!" });
    }
    res.status(StatusCodes.OK).json(user);
  };
}
