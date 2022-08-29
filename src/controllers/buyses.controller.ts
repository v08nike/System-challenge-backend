import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import BuyService from "../services/buyses.service";

export default class BuysController {
  constructor(private buyService = new BuyService()) {}

  public create = async (req: Request, res: Response) => {
    const buy = req.body;

    const createdBuy = await this.buyService.create(buy);

    res.status(StatusCodes.CREATED).json(createdBuy);
  };

  public getAll = async (_req: Request, res: Response) => {
    const buy = await this.buyService.getAll();
    res.status(StatusCodes.OK).json(buy);
  };

  
}
