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
    
    // Obtém o usuário pelo email
    const user = await repositoryUser.getByEmail(email);

    // Verifica se o usuário é nulo, indefinido ou vazio
    if (!user || user.length === 0) {
        return []; // Retorna um array vazio se o usuário não for encontrado
    }

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

async function InserirAdmin(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = await repositoryUser.InserirAdmin(name, email, hashedPassword);
    user.token = jwt.createToken(user.id_user);
    return user;
}

async function LoginAdmin(email, password) {
    
    // Obtém o usuário pelo email
    const user = await repositoryUser.getByEmailAdmin(email);

    // Verifica se o usuário é nulo, indefinido ou vazio
    if (!user || user.length === 0) {
        return []; // Retorna um array vazio se o usuário não for encontrado
    }

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

export default {Inserir, Login, Profile, LoginAdmin, InserirAdmin};