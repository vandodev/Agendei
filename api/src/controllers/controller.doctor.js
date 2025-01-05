import serviceDoctors from "../services/service.doctors.js";

 async function Listar(req, res){
    const doctors =  await serviceDoctors.Listar();
    res.status(200).json(doctors)
}

export default {Listar}