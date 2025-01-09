import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "../token.js";

const routes = Router();

//Doctors
routes.get("/doctors", jwt.validateToken, controllerDoctor.Listar);
routes.post("/doctors",jwt.validateToken, controllerDoctor.Inserir);
routes.put("/doctors/:id_doctor",jwt.validateToken, controllerDoctor.Editar);
routes.delete("/doctors/:id_doctor",jwt.validateToken, controllerDoctor.Excluir);

//Users
routes.post("/users/register", controllerUser.Inserir);
routes.post("/users/login", controllerUser.Login);

export default routes;