import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const routes = Router();

routes.get("/doctors", controllerDoctor.Listar);

export default routes;