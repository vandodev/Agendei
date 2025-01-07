import repositoryDoctor from "../repositories/repository.doctor.js";
 
 async function Listar(name){
    const doctors = await repositoryDoctor.Listar(name);    
    return doctors;
}

async function Inserir(name, specialty, icon) {
    const doctor = await repositoryDoctor.Inserir(name, specialty, icon);
    return doctor;
  }

export default {Listar, Inserir};