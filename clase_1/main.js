const Alumnos = require("./Alumnos.js") 
let leo = new Alumnos(
    "Leonardo",
    "Dillon",
    26,
    "DW",
    ["Aplicaciones Híbridas", "Internet de las Cosas", "Proyecto Final"]
)
console.log(leo.get_Materias())