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
const http_status_codes_1 = require("http-status-codes");
const users_service_1 = __importDefault(require("../services/users.service"));
class UserController {
    constructor(userService = new users_service_1.default()) {
        this.userService = userService;
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const createdUser = yield this.userService.create(user);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(createdUser);
        });
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.getById(id);
            if (!user) {
                return res
                    .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: "User not found!" });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
    }
}
exports.default = UserController;
