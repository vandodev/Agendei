import {query} from "../database/sqlite.js"

async function Listar(name){

    let filtro = []

    let sql = "select * from doctors ";

    if(name){
        sql = sql + "where name like ?";
        filtro.push('%' + name + '%');
    }

    sql = sql + "order by name"
    const doctors = await query(sql, filtro)   
    return doctors;
}

async function ListarDoctorsComServicos(name){
    let sql = `SELECT DISTINCT d.* FROM doctors d
        JOIN doctors_services ds ON d.id_doctor = ds.id_doctor
        ORDER BY d.name
    `;

    const doctors = await query(sql, [name])   
    return doctors;
}

async function Inserir(name, specialty, telephone, icon) {
       
    let sql = `INSERT INTO doctors (name, specialty,telephone, icon) VALUES (?, ?, ?, ?)
      returning id_doctor` 
    ;

    const doctor = await query(sql,[name, specialty, telephone, icon])
    
    return doctor[0];
}

async function Editar(id_doctor, name, specialty, telephone, icon) {
      
    let sql = `
        UPDATE doctors SET name = ?, specialty = ?, telephone = ?, icon = ?
        WHERE id_doctor = ?
    `;

    await query(sql, [name, specialty, icon, telephone, id_doctor]); 
    
    
    return { id_doctor };
}

async function Exluir(id_doctor) {
    
    let sql = `DELETE FROM doctors WHERE id_doctor = ?`;
    await query(sql, [id_doctor]); 
    return { id_doctor };
}

async function listarServicos(id_doctor) {

    let sql = `SELECT s.id_service, s.description, ds.price FROM SERVICES s
        JOIN doctors_services ds ON ds.id_service = s.id_service
        WHERE ds.id_doctor = ?
    `;

    const serv = await query(sql,[id_doctor])

    return serv;
}

export default {Listar, Inserir, Editar, Exluir, listarServicos, ListarDoctorsComServicos} ;

// ALTER TABLE doctors ADD COLUMN telephone TEXT;
// UPDATE doctors SET telephone = '1699' || CAST(ABS(RANDOM() % 9000000 + 1000000) AS TEXT);
