"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const router_1 = __importDefault(require("./router/router"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use(`${process.env.AWS_API_GATEWAY_ENDPOINT}`, router_1.default);
exports.handler = (0, serverless_http_1.default)(app);
/*
const port = 1999;
app.listen(port, () => {
    console.clear();
    console.log(`http://localhost:${port}`);
});
*/
