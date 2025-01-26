import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar"
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function DoctorsAdd() {
    const navigate = useNavigate();
    const { id_doctor } = useParams();

    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [telephone, setTelephone] = useState("");
    const [icon, setIcon] = useState("");
    const [msg, setMsg] = useState("");

    async function SaveDoctors() {
        setMsg("");

        const json = {
            name,
            specialty,
            telephone,
            icon
        }

        try {            
            
            const response = id_doctor > 0 ? 
            await api.put("/doctors/" + id_doctor, json) : 
            await api.post("/doctors", json);

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

    async function LoadDoctorsById(id_doctor) {
        try {
            const response = await api.get(`/doctors/${id_doctor}`);
            if (response.data) {
                setName(response.data.name);
                setSpecialty(response.data.specialty);
                setTelephone(response.data.telephone);
                setIcon(response.data.icon);
            }
            console.log("Retorno da api", response.data.name)
        } catch (error) {
            if (error.response?.data.error) {
                alert(error.response?.data.error);
            } else {
                alert("Erro ao Buscar médico, tente novamente mais tarde!");
            }
        }
    }

    useEffect(() => {
        LoadDoctorsById(id_doctor);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-page">
                <div className="row col-lg-4 offset-lg-4">
                
                    <h2>
                        {
                            id_doctor > 0 ? "Editar Médico" : "Novo Médico"
                        }
                    </h2>

                    <div className="col-12 mt-4">
                        <label htmlFor="user" className="form-label">Nome do médico</label>
                        
                        <input
                            type="text"
                            placeholder="Nome"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                       
                    </div>

                    <div className="col-12 mt-4">
                        <label  className="form-label">Especialidade</label>
                        
                        <input
                            type="text"
                            value={specialty}
                            placeholder="Especialidade"
                            className="form-control"
                            onChange={(e) => setSpecialty(e.target.value)}
                        />
                        
                    </div>

                 
                    <div className="col-12 mt-4">
                        <label  className="form-label">Telefone</label>
                            <input
                                type="text"
                                value={telephone}
                                placeholder="Telefone"
                                className="form-control"
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                    </div>

                    <div className="col-12 mt-4">
                        <label  className="form-label">Sexo</label>
                            <input
                                type="text"
                                value={icon}
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