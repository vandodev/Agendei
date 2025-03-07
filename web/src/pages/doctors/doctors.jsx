import { useEffect, useState, useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import "./doctors.css";
import { Link, useNavigate } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import Doctor from "../../components/doctor/doctor";
import api from "../../constants/api.js";
import { AuthContext } from "../../contexts/auth.jsx";

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    async function LoadDoctors() {
        try {
            const response = await api.get("doctors");
            if (response.data) {
                setDoctors(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                alert(error.response?.data.error);
            } else {
                alert("Erro ao fazer login, tente novamente mais tarde!");
            }
        }
    }

    function ClickDelete(id_doctor) {
        confirmAlert({
            title: "Exclusão",
            message: "Confirma exclusão desse médico?",
            buttons: [
                {
                    label: "Sim",
                    onClick: () => DeleteDoctor(id_doctor)
                },
                {
                    label: "Não",
                    onClick: () => {}
                }                
            ]
        });
    }

    async function DeleteDoctor(id) {
        try {
            const response = await api.delete("/doctors/" + id);
            if (response.data) {
                LoadDoctors();
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401) {
                    return navigate("/");
                }
                alert(error.response?.data.error);
            } else {
                alert("Erro ao excluir dados");
            }
        }
    }

    useEffect(() => {
        if (!user) {
            // Caso o `user` esteja vazio, tenta restaurar a autenticação do localStorage
            const token = localStorage.getItem("sessionToken");
            if (token) {
                // Atualiza o estado do usuário no contexto
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            } else {
                // Redireciona para o login caso não tenha dados no localStorage
                navigate("/");
            }
        } else {
            // Carrega os dados de agendamentos e médicos
            LoadDoctors();
        }
    }, [user, navigate]);

    return (      
        <div className="container-fluid mt-page">
            <Navbar />
            <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="d-inline">Médicos</h2>
                        <Link to="/doctors/add" className="mb-2 btn btn-outline-primary ms-5">
                            Novo médico
                        </Link>
                    </div>
                   {/* Lembrar de criar filtros aqui */}
            </div>

                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">CRN</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Especialidade</th>
                                <th scope="col">Telefone</th>
                                <th scope="col" className="text-end">Sexo</th>
                                <th scope="col" className="col-buttons"></th>
                            </tr>
                        </thead>
                    <tbody>
                            
                            {doctors.map((dt) => {
                                return <Doctor
                                    key={dt.id_doctor}
                                    id_doctor={dt.id_doctor}
                                    doctor={dt.name}
                                    specialty={dt.specialty}
                                    telephone={dt.telephone}
                                    icon={dt.icon}
                                    ClickDelete={ClickDelete}
                                />
                            })}
                        </tbody>
                    </table>
            </div>
        </div>        
    );
}
export default Doctors