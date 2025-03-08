import bcryptjs from "bcryptjs";

export default class UserServices {

    save = async (data) =>{
        const request = new Request("http://localhost:5151/users", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.nome,
                    email: data.email,
                    password: data.senha
                })
            }
        );

        const response = await fetch(request);

        return response;
    }

    get = async (email) => {
        const request = new Request(`http://localhost:5151/users/${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const userReturned = await fetch(request);

        return await userReturned.json();
    }

    validateUser = async (user, passwordInformed) => {
        const userPasswordCript = user.password;

        console.log(userPasswordCript);

        const result = await bcryptjs.compare(passwordInformed, userPasswordCript);

        return result;
    }

    redirectPage = (page) => {
        window.location.href = `/${page}`;
    }
}