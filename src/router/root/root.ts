import express from 'express';

const root = express.Router();

root.get('/', (_, res) => {
	res.status(404).render('root');
});

export default root;
