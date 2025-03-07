import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "../token.js";
import controllerAppointment from "./controllers/controller.appointment.js";

const routes = Router();

//Doctors
routes.get("/doctors", jwt.validateToken, controllerDoctor.Listar);
routes.get("/doctorsativos", jwt.validateToken, controllerDoctor.ListarDoctorsComServicos);
routes.post("/doctors",jwt.validateToken, controllerDoctor.Inserir);
routes.put("/doctors/:id_doctor",jwt.validateToken, controllerDoctor.Editar);
routes.delete("/doctors/:id_doctor",jwt.validateToken, controllerDoctor.Excluir);

routes.get("/doctors/:id_doctor/services",jwt.validateToken, controllerDoctor.ListarServicos);

//Users
routes.post("/users/register", controllerUser.Inserir);
routes.post("/users/login", controllerUser.Login);
routes.get("/users/profile", jwt.validateToken, controllerUser.Profile);

//Admins
routes.post("/admin/register", controllerUser.InserirAdmin);
routes.post("/admin/login", controllerUser.LoginAdmin);
routes.get("/admin/appointments",jwt.validateToken, controllerAppointment.Listar);
routes.get("/admin/users",jwt.validateToken, controllerUser.Listar);
routes.get("/admin/appointments/:id_appointment", jwt.validateToken, controllerAppointment.ListarId);
routes.post("/admin/appointments/", jwt.validateToken, controllerAppointment.InserirAdmin);
routes.put("/admin/appointments/:id_appointment", jwt.validateToken, controllerAppointment.EditarAdmin);

//Apointments
routes.get("/appointments",jwt.validateToken, controllerAppointment.ListarByUser);
routes.post("/appointments",jwt.validateToken, controllerAppointment.Inserir);
routes.delete("/appointments/:id_appointment", jwt.validateToken, controllerAppointment.Excluir);

export default routes;