import repoAppointment from "../repositories/repository.appointment.js";
 
 async function Listar(id_user, dt_start, dt_end, id_doctor){
    const appointments = await repoAppointment.Listar(id_user, dt_start, dt_end, id_doctor);    
    return appointments;
}

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {
    const appointment = await repoAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);
    return appointment;
}

async function Excluir(id_user, id_appointment) {
    const appointment = await repoAppointment.Excluir(id_user, id_appointment);
    return appointment;
}

async function ListarId(id_appointment) {
    const appointments = await repoAppointment.ListarId(id_appointment);
    return appointments;
};

export default {Listar, Inserir, Excluir, ListarId}