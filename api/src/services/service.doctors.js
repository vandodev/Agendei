import repositoryDoctor from "../repositories/repository.doctor.js";
 
async function Listar(name){
    const doctors = await repositoryDoctor.Listar(name);    
    return doctors;
}

async function ListarDoctorsComServicos(name){
    const doctors = await repositoryDoctor.ListarDoctorsComServicos(name);    
    return doctors;
}

async function Inserir(name, specialty, icon) {
    const doctor = await repositoryDoctor.Inserir(name, specialty, telephone, icon);
    return doctor;
}

async function Editar(id_doctor, name, specialty, telephone, icon) {
    const doctor = await repositoryDoctor.Editar(id_doctor, name, specialty, telephone, icon);
    return doctor;
}

async function Excluir(id_doctor) {
    const doctor = await repositoryDoctor.Exluir(id_doctor);
    return doctor;
}

async function listarServicos(id_doctor) {
    const serv = await repositoryDoctor.listarServicos(id_doctor);
    return serv;
}

export default {Listar, Inserir, Editar, Excluir, listarServicos, ListarDoctorsComServicos};