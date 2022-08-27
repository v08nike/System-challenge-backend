import express from "express";
import { StatusCodes} from "http-status-codes";
// import BooksRoutes from './routes/books.routes';


const bodyParser = require ("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.status(StatusCodes.OK).send('Welcome 200systems Indications API')
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log( `Server is running on ${port}`);
});
// app.use(BooksRoutes);
