import serviceDoctors from "../services/service.doctors.js";

 async function Listar(req, res){
    const { name } = req.query;
    const doctors = await serviceDoctors.Listar(name);
    res.json(doctors);
}

export default {Listar}