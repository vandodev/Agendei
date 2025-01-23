import { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";
import { Link, useNavigate} from "react-router-dom";
import api from "../../constants/api.js";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
    async function ExecuteLogin() {
        setMsg("");

         // Validação para campos em branco
         if (!email.trim() || !password.trim()) {
            setMsg("E-mail e senha são obrigatórios!");
            return;
        }
        
        try {
            const response = await api.post("admin/login", {
                email,
                password
            });
            
            if (response.data) {
                localStorage.setItem("sessionToken", response.data.token);
                localStorage.setItem("sessionId", response.data.id_admin);
                localStorage.setItem("sessionEmail", response.data.email);
                localStorage.setItem("sessionName", response.data.name);
                api.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
                console.log(response.data)
                navigate("/appointments");
            } else {
                setMsg("Erro ao fazer login, usuário ou senha inválido!");
            }
        } catch (error) {
            if (error.response?.data.error) {
                setMsg(error.response?.data.error);
                if (error.response.status === 401) {
                    return navigate("/");
                }
            } else {
                setMsg("Erro ao fazer login, tente novamente mais tarde!");
            }
            console.log(error);
        }        
    }

    return ( 
        <div className="row">
            <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
                <form className="form-signin">
                    <img src={logo} className="logo mb-4" />
                    <h5 className="mb-5">Gerencie seus agendamentos de forma descomplicada.</h5>
                    <h5 className="mb-4 text-secondary">Acesse sua conta</h5>
                    <div className="mt-4">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            type="password"
                            placeholder="Senha"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="mt-3 mb-5">
                        {/* <button onClick={ExecuteLogin} className="btn btn-primary w-100" type="button">Login</button> */}
                        <button onClick={(e) => { e.preventDefault(); ExecuteLogin(); }} className="btn btn-primary w-100" type="button">Login</button>
                    </div>

                    {
                        msg.length > 0 &&
                        <div className="alert alert-danger" role="alert">
                            {msg}
                        </div>
                    }
                    
                    <div>
                        <span className="me-1">Não tenho uma conta.</span>
                        <Link to="/register">Criar agora!</Link>
                    </div>
                </form>
            </div>
            <div className="col-sm-7 d-flex">
                <img src={fundo} alt="img fundo" className="background-login" />
            </div>
        </div>
    )
}

export default Login;