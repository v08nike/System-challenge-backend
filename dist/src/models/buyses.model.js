"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BuyModel {
    constructor(connection) {
        this.connection = connection;
    }
    create(buy) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productname, personame, indicationcode } = buy;
            const result = yield this.connection.execute('INSERT INTO buyses (productname, personame, indicationcode) VALUES (?,?,?)', [productname, personame, indicationcode]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, buy);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("SELECT * FROM buyses");
            const [rows] = result;
            return rows;
        });
    }
}
exports.default = BuyModel;
// {modelo de compra - buy
//     "product_name": "X",
//     "person_name": "B",
//     "indication_code": "1a2b3c"
// }
