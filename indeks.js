import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'; 39.6

import router from './router.js';

const app = express();

//connect to DB
mongoose.connect('Mmongodb+srv://admin:admin@digitalent.1z6u6.mongodb.net/jadwalin?retryWrites=true&w=majority',
{
    userNewUrlParser: true,
    useUnifiedTopology: true,
}
,() => {
    console.log('connect to DB success');
});

//Midlewares
app.use(express.json());
app.use(morgan('dev'));

app.get('/', req, res, next) => {
    res.json({
        message: 'success',
    });
});

app.listen('3000, () => {
    console.log('App listens to port 3000');
});