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


export default {Inserir, Login}