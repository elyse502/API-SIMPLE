import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const port = 3000;

const STATUS = {
    SUCCESS: 'OK',
    FAILURE: 'NO'
};

app.use(express.json());

app.get('/hello-world', (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello World!');
});

app.post('/add', (req, res) => {
    const data = [];
    const { body } = req;

    if (!body.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.FAILURE,
            message: 'Name is required'
        });
    }

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.SUCCESS,
        message: data
    });
});

app.listen(port, () => {
    console.log(`Hey, go to htttp://localhost:${port}`);
});