import connection from "../models/connection";
import Buy from "../interfaces/buy.interface";
import BuyModel from "../models/buyses.model";

export default class BuysService {
  public model: BuyModel;

  constructor() {
    this.model = new BuyModel(connection);
  }

  public async getAll(): Promise<Buy[]> {
    const buyses = await this.model.getAll();

    return buyses;
  }

  // public getById = async (req: Request, res: Response) => {
  //   const id = parseInt(req.params.id);
  //   const book =  await this.bookService.getById(id);

  //   if(!book) {
  //   return res.status(StatusCodes.NOT_FOUND)
  //     .json({ message: 'Book not found!'});
  // }
  //   res.status(StatusCodes.OK).json(book);
  // }

  public async create(buy: Buy): Promise<Buy> {
    return this.model.create(buy);
  }
}
