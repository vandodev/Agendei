import {query} from "../database/sqlite.js"

async function Listar(id_user, dt_start, dt_end, id_doctor) {

    let filtro = [];

    let sql = `select a.id_appointment, s.description as service, 
        d.name as doctor, d.specialty,
        a.booking_date, a.booking_hour, u.name as user, ds.price, a.id_doctor, 
        a.id_service, a.id_user
        from appointments a
        join services s on (s.id_service = a.id_service)
        join doctors d on (d.id_doctor = a.id_doctor)
        join users u on (u.id_user = a.id_user)
        join doctors_services ds on (ds.id_doctor = a.id_doctor and 
        ds.id_service = a.id_service)
        where a.id_appointment > 0 
    `;

    if (id_user) {
        filtro.push(id_user);
        sql = sql + "and a.id_user = ? "
    }

    if (dt_start) {
        filtro.push(dt_start);
        sql = sql + "and a.booking_date >= ? "
    }

    if (dt_end) {
        filtro.push(dt_end);
        sql = sql + "and a.booking_date <= ? "
    }

    if (id_doctor) {
        filtro.push(id_doctor);
        sql = sql + "and a.id_doctor = ? "
    }

    sql = sql + "order by a.booking_date, a.booking_hour";

    const appointments = await query(sql, filtro);

    return appointments;
}

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {
       
    let sql = `INSERT INTO appointments (id_user, id_doctor, id_service, booking_date, booking_hour) 
        VALUES (?, ?, ?, ?, ?) returning id_appointment` 
    ;

    const appointment = await query(sql,[id_user, id_doctor, id_service, booking_date, booking_hour])
    // console.log("Params: repository", [id_user, id_doctor, id_service, booking_date, booking_hour]);
    return appointment[0];
}

async function Excluir(id_appointment) {       
    let sql = `DELETE FROM appointments WHERE id_appointment =? `;
    await query(sql,[id_appointment ]);
    return {id_appointment};
}

async function ListarId(id_appointment) {
    let sql =
        `SELECT a.id_appointment, s.description as service, d.name as doctor, d.specialty, a.booking_date, 
    a.booking_hour, u.name as user, ds.price, a.id_doctor, a.id_service, a.id_user 
    from appointments a 
    join services s on (s.id_service = a.id_service) 
    join doctors d on (d.id_doctor = a.id_doctor)
    join users u on (u.id_user = a.id_user)
    join doctors_services ds on (ds.id_doctor = a.id_doctor and ds.id_service = a.id_service)
    where a.id_appointment = ? `;
    const appointments = await query(sql, [id_appointment]);
    return appointments[0];
};

async function Editar(id_appointment, id_user, id_doctor, id_service, booking_date, booking_hour) {
    let sql = `update appointments set id_user=?, id_doctor=?, id_service=?, booking_date=?, booking_hour=? where id_appointment = ?`;
    await query(sql, [id_user, id_doctor, id_service, booking_date, booking_hour, id_appointment]);
    return { id_appointment };
};

export default {Listar, Inserir, Excluir, ListarId, Editar} ;