import express from 'express';

const app = express();

app.listen(3000, () => console.log('server up'));

app.get('/', (req, res) => res.json('SERVER UP'));
