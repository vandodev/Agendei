import { useEffect, useState, useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import Appointment from "../../components/appointment/appointment";
import "./appointments.css";
import api from "../../constants/api.js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Loading from "../../components/loading/loading.jsx";
import { AuthContext } from "../../contexts/auth.jsx";


function Appointments() {
    const { user, setUser, logout } = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [idDoctor, setIdDoctor] = useState("");

    const [dtStart, setDtStart] = useState("");
    const [dtEnd, setDtEnd] = useState("");

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    function ClickEdit(id_appointment) {
        navigate("/appointments/edit/" + id_appointment);
    }

    function ClickDelete(id_appointment) {
        confirmAlert({
            title: "Exclusão",
            message: "Confirma exclusão desse agendamento?",
            buttons: [
                {
                    label: "Sim",
                    onClick: () => DeleteAppointment(id_appointment)
                },
                {
                    label: "Não",
                    onClick: () => {}
                }                
            ]
        });
    }

    async function DeleteAppointment(id) {
        try {
            const response = await api.delete("/appointments/" + id);
            if (response.data) {
                LoadAppointments();
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

    async function LoadAppointments() {
        try {
            setLoading(true); 
            const response = await api.get("admin/appointments", {
                params: {
                    id_doctor: idDoctor,
                    dt_start: dtStart,
                    dt_end: dtEnd
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("sessionToken")}`, // Token no cabeçalho
                },
            });
        
            if (response.data) {
                setAppointments(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401) {
                    return navigate("/");
                }
            } else {
                alert("Erro ao fazer login, tente novamente mais tarde!");
            }
        } finally {
            setLoading(false); 
        }
    }

    async function LoadDoctors() {
        try {
            const response = await api.get("/doctors");
            if (response.data) {
                setDoctors(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401) {
                    return navigate("/");
                }
            } else {
                alert("Erro ao listar médicos.");
            }
        }
    }

    function ChangeDoctor(e) {
        setIdDoctor(e.target.value);
    }

    useEffect(() => {
        if (!user) {
            // Caso o `user` esteja vazio, tenta restaurar a autenticação do localStorage
            const token = localStorage.getItem("sessionToken");
            const email = localStorage.getItem("sessionEmail");
            const id = localStorage.getItem("sessionId");
            const name = localStorage.getItem("sessionName");
    
            if (token && id && email) {
                // Atualiza o estado do usuário no contexto
                setUser({ id, email, name });
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            } else {
                // Redireciona para o login caso não tenha dados no localStorage
                navigate("/");
            }
        } else {
            // Carrega os dados de agendamentos e médicos
            LoadAppointments();
            LoadDoctors();
        }
    }, [user, navigate]);
    
    return (
        <div className="container-fluid mt-page">
            <Navbar />
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="d-inline">Agendamentos</h2>
                    <Link to="/appointments/add" className="mb-2 btn btn-outline-primary ms-5">
                        Novo Agendamento
                    </Link>
                </div>
                <div className="d-flex justify-content-end align-items-center">

                    <input type="date" id="startDate" className="form-control" onChange={(e) => setDtStart(e.target.value)}/>
                    <span className="m-2">Até</span>
                    <input type="date" id="endDate" className="form-control" onChange={(e) => setDtEnd(e.target.value)}/>
                    <div className="form-control ms-3 me-3">

                    <select name="doctor" id="doctor" value={idDoctor} onChange={ChangeDoctor}>
                            <option value="0">Todos os médicos</option>
                            {
                                doctors.map((doc) => {
                                    return <option key={doc.id_doctor} value={doc.id_doctor}>{doc.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <button onClick={LoadAppointments} type="button" className="btn btn-primary">Filtrar</button>
                </div>
            </div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Paciente</th>
                            <th scope="col">Médico</th>
                            <th scope="col">Serviço</th>
                            <th scope="col">Data/Hora</th>
                            <th scope="col" className="text-end">Valor</th>
                            <th scope="col" className="col-buttons"></th>
                        </tr>
                    </thead>
                   <tbody>

                            {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    <Loading />
                                </td>
                            </tr>
                            ) : (
                                appointments.map((ap) => (
                                    <Appointment
                                        key={ap.id_appointment}
                                        id_appointment={ap.id_appointment}
                                        user={ap.user}
                                        doctor={ap.doctor}
                                        service={ap.service}
                                        booking_date={ap.booking_date}
                                        booking_hour={ap.booking_hour}
                                        price={ap.price}
                                        ClickEdit={ClickEdit}
                                        ClickDelete={ClickDelete}
                                    />
                                ))
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Appointments