import UserDTO from "../model/dto/UserDTO";
import RedisException from "../model/exceptions/RedisException";
import ClientRedis from "../redis/ClientRedis"

export default class RedisService {

    private redisClient: any;

    private initClient = async () => {
        if(!this.redisClient) {
            const clientRedis = new ClientRedis();
         this.redisClient = await clientRedis.getRedisClient();
        }
    }

    constructor() {
        this.initClient();
    }

    //salvando dados de login em memoria
    public saveDataSection = async (userData: UserDTO) => {

        const result = await this.redisClient.set(process.env.USER_KEY, JSON.stringify(userData.getData()));

        if (result) {
            return result;
        }

        throw new RedisException(); 
    }

    public getDataSection = async () => {
        const userData = await this.redisClient.get(process.env.USER_KEY);

        return userData;
    }

    public cleanDataSection = async () => {
        const removed = await this.redisClient.del(process.env.USER_KEY);

        if (!removed) {
            throw new RedisException();
        }

        return removed;
    }
}