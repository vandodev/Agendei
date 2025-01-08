import bcrypt from "bcrypt";
import repositoryUser from "../repositories/repository.user.js";
 
async function Inserir(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = await repositoryUser.Inserir(name, email, hashedPassword);
    return user;
}

export default {Inserir};