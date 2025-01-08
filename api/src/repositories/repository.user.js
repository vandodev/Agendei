import {query} from "../database/sqlite.js"

async function Inserir(name, email, password) {
       
    let sql = `INSERT INTO users(name, email, password) VALUES (?, ?, ?)
      returning id_user` 
    ;

    const user = await query(sql,[name, email, password])
    
    return user[0];
}

async function getByEmail(email) {
  
  let sql = `SELECT * FROM users WHERE email = ? `;
  const user = await query(sql,[email])

  if(user.legth == 0)
    return [];
  else
    return user[0];
}

export default { Inserir, getByEmail } ;