import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const routes = Router();

routes.get("/doctors", controllerDoctor.Listar);
routes.post("/doctors", controllerDoctor.Inserir);
routes.put("/doctors/:id_doctor", controllerDoctor.Editar);
routes.delete("/doctors/:id_doctor", controllerDoctor.Excluir);

export default routes;