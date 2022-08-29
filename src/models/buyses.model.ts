import { Pool, ResultSetHeader } from "mysql2/promise";
import Buy from '../interfaces/buy.interface';

export default class BuyModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(buy: Buy): Promise<Buy> {
    const { productname, personame, indicationcode } = buy;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO buyses (productname, personame, indicationcode) VALUES (?,?,?)',
      [productname, personame, indicationcode]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...buy };
  }

  public async getAll(): Promise<Buy[]> {
    const result = await this.connection.execute("SELECT * FROM buyses");
    const [rows] = result;
    return rows as Buy[];
  }
}

// {modelo de compra - buy
//     "product_name": "X",
//     "person_name": "B",
//     "indication_code": "1a2b3c"
// }
