import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "../routes/userRoutes";
import redisRouter from "../routes/redisRouter";

//env variables
dotenv.config();

const app = express();

//geral configuration
app.use(express.json());
app.use(cors());

//users
app.use('/users', routes);

//redis
app.use('/redis', redisRouter);

//set port server
app.listen(process.env.PORT, () => {
    console.log(`users api is running in http://${process.env.HOST}:${process.env.PORT}`);
})