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

async function Profile(id_user) {

  let sql = `SELECT id_user, name, email FROM users WHERE id_user = ?`;

  const user = await query(sql,[id_user])

  return user[0];
}

async function InserirAdmin(name, email, password) {
       
  let sql = `INSERT INTO admins(name, email, password) VALUES (?, ?, ?)
    returning id_admin` 
  ;

  const user = await query(sql,[name, email, password])
  
  return user[0];
}

async function getByEmailAdmin(email) {
  let sql = `SELECT * FROM admins WHERE email = ? `;
  const user = await query(sql,[email])

  if(user.legth == 0)
    return [];
  else
    return user[0];
}

async function Listar() {
  let sql = `select id_user, name, email from users order by name`;
  const users = await query(sql, []);
  return users;
}

export default { Inserir, getByEmail, Profile, InserirAdmin, getByEmailAdmin, Listar } ;