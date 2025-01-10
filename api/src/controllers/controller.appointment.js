import  serviceAppointment from "../services/service.appointment.js"

 async function ListarByUser(req, res){
    const id_user  = req.id_user;
    const appointments = await serviceAppointment.Listar(id_user);
    res.json(appointments);
}

export default {ListarByUser}