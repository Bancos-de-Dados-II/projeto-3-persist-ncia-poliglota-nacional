import { Router } from "express";
import RedisController from "../controller/RedisController";
import ExceptionMiddleware from "../middleware/ExceptionMiddleware";

const redisRouter = Router();

const redisController = new RedisController();
const error = new ExceptionMiddleware();  

//rotas do redis
redisRouter.get('/user-data', redisController.getUserData, error.handleError);
redisRouter.post('/user-data', redisController.setUserData, error.handleError);
redisRouter.delete('/user-data', redisController.removeUserData, error.handleError);

export default redisRouter;