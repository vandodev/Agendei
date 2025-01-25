import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar"
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function DoctorsAdd() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [telephone, setTelephone] = useState("");
    const [icon, setIcon] = useState("");
    const [msg, setMsg] = useState("");

    async function SaveDoctors() {
        setMsg("");
        try {
            const response = await api.post("/doctors", {
                name,
                specialty,
                telephone,
                icon
            });
            if (response.data) {
                api.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
                navigate("/doctors");
            } else {
                setMsg("Erro ao inserir mádico, tente novamente mais tarde!");
            }
        } catch (error) {
            if (error.response?.data.error) {
                setMsg(error.response?.data.error);
            } else {
                setMsg("Erro ao fazer login, tente novamente mais tarde!");
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-page">
                <div className="row col-lg-4 offset-lg-4">
                    <div className="col-12 mt-2">                        
                        <h2>Novo médico</h2>
                    </div>

                    <div className="col-12 mt-4">
                        <label htmlFor="user" className="form-label">Nome do médico</label>
                        
                        <input
                            type="text"
                            placeholder="Nome"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                       
                    </div>

                    <div className="col-12 mt-4">
                        <label  className="form-label">Especialidade</label>
                        
                        <input
                            type="text"
                            placeholder="Especialidade"
                            className="form-control"
                            onChange={(e) => setSpecialty(e.target.value)}
                        />
                        
                    </div>

                 
                    <div className="col-12 mt-4">
                        <label  className="form-label">Telefone</label>
                            <input
                                type="text"
                                placeholder="Telefone"
                                className="form-control"
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                    </div>

                    <div className="col-12 mt-4">
                        <label  className="form-label">Sexo</label>
                            <input
                                type="text"
                                placeholder="Insera M ou F"
                                className="form-control"
                                onChange={(e) => setIcon(e.target.value)}
                            />
                    </div>
                   
                    <div className="col-12 mt-4">
                        <div className="d-flex justify-content-end">
                                <Link to="/appointments" className="btn btn-outline-primary me-3">Cancelar</Link>
                                <button onClick={SaveDoctors} className="btn btn-primary" type="button" >Salvar Dados</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DoctorsAdd;