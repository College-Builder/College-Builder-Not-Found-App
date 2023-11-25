"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const root = express_1.default.Router();
const rootFolder = process_1.default.cwd();
root.get('/', (_, res) => {
    res.status(404).sendFile(path_1.default.join(rootFolder, '/views/root/index.html'));
});
exports.default = root;
