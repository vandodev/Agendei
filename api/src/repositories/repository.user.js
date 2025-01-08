import {query} from "../database/sqlite.js"

async function Inserir(name, email, password) {
       
    let sql = `INSERT INTO users(name, email, password) VALUES (?, ?, ?)
      returning id_user` 
    ;

    const user = await query(sql,[name, email, password])
    
    return user[0];
}

export default { Inserir } ;