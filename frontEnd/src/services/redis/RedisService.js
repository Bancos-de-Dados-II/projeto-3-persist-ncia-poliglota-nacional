export default class RedisService {
    persistDataSection = async (data) => {
        const request = new Request("http://localhost:5151/redis/user-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
        console.log("Qualquer")
        await fetch(request);
    }

    getDataSection = async () => {
        const request = new Request("http://localhost:5151/redis/user-data", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const response = await fetch(request);
        const jsonResponse = await response.json();

        return jsonResponse;
    }

    cleanDataSection = async () => {
        const request = new Request("http://localhost:5151/redis/user-data", {
            method: "DELETE"
        });

        const removed = await fetch(request);

        return removed;
    }
}