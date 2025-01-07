import repositoryDoctor from "../repositories/repository.doctor.js";
 
 async function Listar(name){
    const doctors = await repositoryDoctor.Listar(name);    
    return doctors;
}

export default {Listar};