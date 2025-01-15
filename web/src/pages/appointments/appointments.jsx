import Navbar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import { doctors, appointments } from "../../constants/data";
import Appointment from "../../components/appointment/appointment";
import "./appointments.css";

function Appointments() {

    const navigate = useNavigate();

    function ClickEdit(id_appointment) {
        navigate("/appointments/edit/" + id_appointment);
    }

    function ClickDelete(id_appointment) {
        console.log(`Deletar: ` + id_appointment);
    }

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
                    <input type="date" id="startDate" className="form-control" />
                    <span className="m-2">Até</span>
                    <input type="date" id="endDate" className="form-control" />
                    <div className="form-control ms-3 me-3">
                        <select name="doctor" id="doctor">
                            <option value="">Todos os médicos</option>
                            {
                                doctors.map((doc) => {
                                    return <option value={doc.id_doctor}>{doc.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <button className="btn btn-primary">Filtrar</button>
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