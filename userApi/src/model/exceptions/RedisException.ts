import GenericException from "./GenericException";

export default class RedisException extends GenericException {
    constructor() {
        super("Error in Redis client", 500);
    }
}