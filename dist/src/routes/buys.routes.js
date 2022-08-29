"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buyses_controller_1 = __importDefault(require("../controllers/buyses.controller"));
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = express_1.Router();
const buysController = new buyses_controller_1.default();
const userController = new users_controller_1.default();
router.get('/buyses', buysController.getAll);
router.post('/buyses', buysController.create);
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', userController.create);
exports.default = router;
