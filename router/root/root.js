"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root = express_1.default.Router();
root.get('/', (_, res) => {
    res.status(404).render('root', {
        data: {
            page: {
                status: 404,
                title: 'Página não Encontrada!',
                text: 'Você está acessando o site Collge Builder, uma plataforma desenvolvida por alunos para hospedar projetos de alunos da Universidade de Sorocaba. Visite nosso GitHub para ver projetos ou entre em contato para mais informações.',
            },
        },
    });
});
exports.default = root;
