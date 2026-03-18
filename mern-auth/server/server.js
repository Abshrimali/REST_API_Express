// import dependencies using ES6 syntax
import express from 'express';
import "dotenv/config"
import db from './src/config/db.js';
import userRouter from './src/routes/userRoute.js';
import cors from 'cors';

// initialize the Express app
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use('/', userRouter)

db();
app.listen(port, () => {
    console.log(`port listening on port ${port}`);
})