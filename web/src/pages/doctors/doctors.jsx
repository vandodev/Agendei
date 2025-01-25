import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./doctors.css";
import { Link} from "react-router-dom";
import Doctor from "../../components/doctor/doctor";
import api from "../../constants/api.js";


function Doctors() {
    const [doctors, setDoctors] = useState([]);

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
    useEffect(() => {
        LoadDoctors();
    }, []);

    return (      
        <div className="container-fluid mt-page">
            <Navbar />
            <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="d-inline">Médicos</h2>
                        <Link to="#" className="mb-2 btn btn-outline-primary ms-5">
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
                                />
                            })}
                        </tbody>
                    </table>
            </div>
        </div>        
    );
}
export default Doctors