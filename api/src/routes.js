import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const routes = Router();

routes.get("/doctors", controllerDoctor.Listar);
routes.post("/doctors", controllerDoctor.Inserir);

export default routes;