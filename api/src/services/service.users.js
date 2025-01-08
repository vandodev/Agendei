import bcrypt from "bcrypt";
import repositoryUser from "../repositories/repository.user.js";
 
async function Inserir(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = await repositoryUser.Inserir(name, email, hashedPassword);
    return user;
}

async function Login(email, password) {

    const user = await repositoryUser.getByEmail(email);

    if(user.legth == 0)
        return [];
    else{
        if(await bcrypt.compare(password, user.password)){
            delete user.password;
            return user;
        }
        else {
            return[];
        }
    }
  }

export default {Inserir, Login};