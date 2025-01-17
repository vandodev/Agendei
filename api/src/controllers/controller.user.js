import serviceUser from "../services/service.users.js";

async function Inserir(req, res) {
    const { name, email, password } = req.body;
    const user = await serviceUser.Inserir( name, email, password);
    res.status(201).json(user);
}

async function Login(req, res) {
    const { email, password } = req.body;

    const user = await serviceUser.Login(email, password);

    if (!user) 
      res.status(401).json({ error: "E-mail ou senha inválido(s)"});
    else {
      res.json(user);
    }
}

async function Profile(req, res){
  const id_user = req.id_user
  const user = await serviceUser.Profile(id_user);
  res.json(user);
}

async function InserirAdmin(req, res) {
  const { name, email, password } = req.body;
  const user = await serviceUser.InserirAdmin( name, email, password);
  res.status(201).json(user);
}

async function LoginAdmin(req, res) {
  const { email, password } = req.body;

  const user = await serviceUser.LoginAdmin(email, password);

  if (!user) 
    res.status(401).json({ error: "E-mail ou senha inválido(s)"});
  else {
    res.json(user);
  }
}

async function Listar(req, res) { 
  const users = await serviceUser.Listar();  
    res.status(200).json(users);
}

export default {Inserir, Login, Profile, InserirAdmin, LoginAdmin, Listar}