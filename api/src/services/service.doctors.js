import repositoryDoctor from "../repositories/repository.doctor.js";
 
 async function Listar(){
    const doctors = await repositoryDoctor.Listar();   
    return doctors;
}

export default {Listar};