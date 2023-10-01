import express from 'express';
import serverless from 'serverless-http';
import router from './router/router';

const app = express();

app.set('view engine', 'ejs');

app.use('*', router);

export const handler = serverless(app);
