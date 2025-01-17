import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import Appointment from "../../components/appointment/appointment";
import "./appointments.css";
import api from "../../constants/api.js";

function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [idDoctor, setIdDoctor] = useState("");

    const [dtStart, setDtStart] = useState("");
    const [dtEnd, setDtEnd] = useState("");

    const navigate = useNavigate();

    function ClickEdit(id_appointment) {
        navigate("/appointments/edit/" + id_appointment);
    }

    function ClickDelete(id_appointment) {
        console.log(`Deletar: ` + id_appointment);
    }

    async function LoadAppointments() {
        try {
            const response = await api.get("admin/appointments", {
                params: {
                    id_doctor: idDoctor,
                    dt_start: dtStart,
                    dt_end: dtEnd
                }
            });
        
            if (response.data) {
                setAppointments(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                alert(error.response?.data.error);
            } else {
                alert("Erro ao fazer login, tente novamente mais tarde!");
            }
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
                alert(error.response?.data.error);
            } else {
                alert("Erro ao listar médicos.");
            }
        }
    }

    function ChangeDoctor(e) {
        setIdDoctor(e.target.value);
    }

    useEffect(() => {
        LoadAppointments();
        LoadDoctors();
    }, []);

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
                        
                        {appointments.map((ap) => {
                            return <Appointment
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
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Appointments