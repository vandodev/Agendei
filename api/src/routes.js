import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";

const routes = Router();

//Doctors
routes.get("/doctors", controllerDoctor.Listar);
routes.post("/doctors", controllerDoctor.Inserir);
routes.put("/doctors/:id_doctor", controllerDoctor.Editar);
routes.delete("/doctors/:id_doctor", controllerDoctor.Excluir);

//Users
routes.post("/users/register", controllerUser.Inserir);
routes.post("/users/login", controllerUser.Login);

export default routes;