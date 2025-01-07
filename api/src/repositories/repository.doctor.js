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

export default {Listar};