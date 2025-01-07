import serviceDoctors from "../services/service.doctors.js";

 async function Listar(req, res){
    const { name } = req.query;
    const doctors = await serviceDoctors.Listar(name);
    res.json(doctors);
}

async function Inserir(req, res) {
    const { name, specialty, icon } = req.body;

    const doctor = await serviceDoctors.Inserir(name, specialty, icon);

    res.status(201).json(doctor);
  }


export default {Listar, Inserir}