import { Router } from "express";

const routes = Router();

routes.get("/doctors",(req,res) => {
    res.status(200).send("Lista dos médicos");
});

export default routes;