import  serviceAppointment from "../services/service.appointment.js"

 async function ListarByUser(req, res){
    const id_user  = req.id_user;
    const appointments = await serviceAppointment.Listar(id_user);
    res.json(appointments);
}

async function Inserir(req, res) {
    const id_user  = req.id_user;
    const { id_doctor, id_service, booking_date, booking_hour } = req.body;
    const appointment = await serviceAppointment.Inserir(id_user,id_doctor, id_service, booking_date, booking_hour);
    // console.log("Params: controller", [id_user, id_doctor, id_service, booking_date, booking_hour]);
    res.status(201).json(appointment);
}


export default {ListarByUser, Inserir}