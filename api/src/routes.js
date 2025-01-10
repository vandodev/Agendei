import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "../token.js";
import controllerAppointment from "./controllers/controller.appointment.js";

const routes = Router();

//Doctors
routes.get("/doctors", jwt.validateToken, controllerDoctor.Listar);
routes.post("/doctors",jwt.validateToken, controllerDoctor.Inserir);
routes.put("/doctors/:id_doctor",jwt.validateToken, controllerDoctor.Editar);
routes.delete("/doctors/:id_doctor",jwt.validateToken, controllerDoctor.Excluir);

routes.get("/doctors/:id_doctor/services",jwt.validateToken, controllerDoctor.ListarServicos);

//Users
routes.post("/users/register", controllerUser.Inserir);
routes.post("/users/login", controllerUser.Login);

routes.get("/appointments",jwt.validateToken, controllerAppointment.ListarByUser);

export default routes;