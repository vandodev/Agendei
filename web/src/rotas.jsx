import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
