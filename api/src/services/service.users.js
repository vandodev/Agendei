import bcrypt from "bcrypt";
import repositoryUser from "../repositories/repository.user.js";
import jwt from "../../token.js";
 
async function Inserir(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = await repositoryUser.Inserir(name, email, hashedPassword);
    user.token = jwt.createToken(user.id_user);
    return user;
}

async function Login(email, password) {

    const user = await repositoryUser.getByEmail(email);

    if(user.legth == 0)
        return [];
    else{
        if(await bcrypt.compare(password, user.password)){
            delete user.password;
            user.token = jwt.createToken(user.id_user);
            return user;
        }
        else {
            return[];
        }
    }
}

 async function Profile(id_user){
    const user = await repositoryUser.Profile(id_user);    
    return user;
}

export default {Inserir, Login, Profile};