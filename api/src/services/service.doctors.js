 async function Listar(){
    const doctors = [
        {id: 1, name: "Evandro", specialty: "Cardiologista", icon:"M"},
        {id: 2, name: "João", specialty: "clinico geral", icon:"M"},
        {id:1, name: "Maria", specialty: "Pediatra", icon:"F"}
    ]
   
    return doctors;
}

export default {Listar};