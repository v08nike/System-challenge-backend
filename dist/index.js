"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const buys_routes_1 = __importDefault(require("./src/routes/buys.routes"));
const bodyParser = require("body-parser");
const app = express_1.default();
app.use(express_1.default.json());
app.use(bodyParser.json());
app.get('/', (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('-- Welcome 200systems Indications API --');
});
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
app.use(buys_routes_1.default);
