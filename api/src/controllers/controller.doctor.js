import serviceDoctors from "../services/service.doctors.js";

 async function Listar(req, res){
    const { name } = req.query;
    const doctors = await serviceDoctors.Listar(name);
    res.json(doctors);
}

async function ListarDoctorsComServicos(req, res){
    const { name } = req.query;
    const doctors = await serviceDoctors.ListarDoctorsComServicos(name);
    res.json(doctors);
}

async function Inserir(req, res) {
    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctors.Inserir(name, specialty, icon);
    res.status(201).json(doctor);
}

async function Editar(req, res) {
    const { id_doctor } = req.params;
    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctors.Editar(id_doctor, name, specialty, icon);
    res.status(201).json(doctor);
}

async function Excluir(req, res) {
    const id_doctor = req.params.id_doctor;
    const doctor = await serviceDoctors.Excluir(id_doctor);
    res.status(200).json(doctor);
}

async function ListarServicos(req, res) {
    const { id_doctor } = req.params;
    const serv = await serviceDoctors.listarServicos(id_doctor);
    res.json(serv);
  }


export default {Listar, Inserir, Editar, Excluir, ListarServicos, ListarDoctorsComServicos}