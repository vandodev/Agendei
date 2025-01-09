import jwt from "jsonwebtoken";

const secretToken = "meutokrnsecreto";
const expiresIn = '30m';

function createToken(id_user){
    const token = jwt.sign({ id_user }, secretToken, {
        subject: String(id_user),
        expiresIn: expiresIn
    });

    return token;
}

function validateToken(req, res, next){
    const authHeader = req.headers.authorization; // "Bearer XXXXXX"
    if (!authHeader) {
        return res.status(401).json({ error: "Token não informado."});
    }
    const [_, token] = authHeader.split(' '); // ignora "Bearer" e pega só o token
    jwt.verify(token, secretToken, (err, decoded) => {
        if (err) 
           return res.status(403).json({ error: "Token inválido" });
        req.id_user = decoded.id_user;
        next();
    })
}

export default {createToken, validateToken }

// export default {


//   validateToken: (req, res, next) => {
//       

//     

//       const [_, token] = authHeader.split(' '); // ignora "Bearer" e pega só o token

//       if (!token) {
//         return res.status(401).json({ error: "Token não informado."});
//       }

//       jwt.verify(token, secret, (err, decoded) => {
//         if (err) 
//           return res.status(403).json({ error: "Token inválido" });
//         else {
//           req.id_user = decoded.id_user;
//           // req.token = decoded;    
//           next();
//         }
//       });
//   }
// }