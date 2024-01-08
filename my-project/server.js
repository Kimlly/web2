import http from 'http';
import cors from 'cors';

import express from 'express';
const app = express();

app.use(cors());

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

app.use('/api/posts', postRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
