import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";

import Appointments from "./pages/appointments/appointments";
import AppointmentAdd from "./pages/appointment-add/appointment-add";

import Doctors from "./pages/doctors/doctors";
import DoctorstAdd from "./pages/doctors-add/doctors-add";

function Rotas() {
    return (
        
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointments/add" element={<AppointmentAdd />} />
            <Route path="/appointments/edit/:id_appointment" element={<AppointmentAdd />} />

            <Route path="/doctors" element={<Doctors/>} />
            <Route path="/doctors/add" element={<DoctorstAdd />} />
        </Routes>
        
    )
}

export default Rotas;
