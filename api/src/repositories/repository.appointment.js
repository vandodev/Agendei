import {query} from "../database/sqlite.js"

async function Listar(id_user){

    let sql = `
        SELECT a.id_appointment, s.description as service, d.name as doctor, 
        d.specialty, a.booking_date, a.booking_hour, u.name as user, ds.price
        FROM appointments a
        JOIN services s on s.id_service = a.id_service
        JOIN doctors d on d.id_doctor = a.id_doctor
        JOIN doctors_services ds ON ds.id_doctor = a.id_doctor 
        AND ds.id_service = a.id_service
        JOIN users u on u.id_user = a.id_user
        WHERE a.id_user = ?
        ORDER BY a.booking_date, a.booking_hour
    `;
    
    const appointments = await query(sql, id_user)   
    return appointments;
}

export default {Listar} ;