import express from 'express';

const app = express();
const port = 3000;

app.post('/add', (req, res) => {
    res.status(201); // CREATED
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Hey, go to htttp://localhost:${port}`);
});