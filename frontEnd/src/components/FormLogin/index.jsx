import UserServices from "../../services/user/UserServices";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import "./styles.css"
import RedisService from "../../services/redis/RedisService";

export default function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
    const userService = new UserServices();
    const redisService = new RedisService();
 
    //deve receber data
    const onSubmit = async (data) => {
        const { email, password } = data;
    
        const userJson = await userService.get(email);

        const isOk = await userService.validateUser(userJson, password);

        if (isOk) {
            userService.redirectPage("servicos");
            alert("Aproveite a plataforma!");
            await redisService.persistDataSection(JSON.stringify(data));
        }
        else{
            alert("Email ou senha incorretos!");
        }
        
    };

    return (
        <div className="form-login">
            <div className="login-text">
                <label>Login</label>
            </div>
            <div className="form-campos">
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <label className="email-text">Insira seu email:</label>
                    <input className="email-input" type="email" {...register("email",{
                        required: "O email é obrigatório",
                        pattern:{
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email inválido"
                        },   
                        maxLength:{
                            value: 50,
                            message: "O email deve ter no máximo 50 caracteres"
                        }
                        })} 
                        />
                        <br/>
                        <ErrorMessage className="msgError" errors={ errors } name="email" message={errors.email?.message} as = "span" />
                    <br/>
                    <label className="password-text">Insira sua senha:</label>
                    <input className="password-input" type="password"{...register("password", { required: true, minLength: 6 })} />
                    <ErrorMessage className="msgError" errors={ errors } name="senha" message="Deve haver pelo menos 6 caracteres" as = "span" />
                    <br/>

                    <button className="button-login">Entrar</button>
                    <br/>
                    <Link className="redirecionar-cadastro" to  = "/cadastro">
                        Não tem uma conta ainda? Cadastre-se
                    </Link>
                </form>
            </div>     
        </div>
    )
}
