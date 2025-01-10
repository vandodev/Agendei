import repoAppointment from "../repositories/repository.appointment.js";
 
 async function Listar(id_user){
    const appointments = await repoAppointment.Listar(id_user);    
    return appointments;
}

export default {Listar}