import process from 'process';
import path from 'path';
import express from 'express';

const root = express.Router();

const rootFolder = process.cwd();

root.get('/', (_, res) => {
	res.status(404).sendFile(path.join(rootFolder, '/views/root/index.html'));
});

export default root;
