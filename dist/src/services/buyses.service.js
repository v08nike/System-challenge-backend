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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const buyses_model_1 = __importDefault(require("../models/buyses.model"));
class BuysService {
    constructor() {
        this.model = new buyses_model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const buyses = yield this.model.getAll();
            return buyses;
        });
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
    create(buy) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(buy);
        });
    }
}
exports.default = BuysService;
