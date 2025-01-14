import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Appointments from "./pages/appointments/appointments";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/appointments" element={<Appointments />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
