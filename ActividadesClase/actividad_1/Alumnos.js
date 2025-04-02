class Alumnos{
    nombre = ""
    apellido = ""
    edad = 1
    carrera = ""
    materias = []
    constructor(nombre, apellido, edad, carrera, materias){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad 
        this.carrera = carrera
        this.materias = materias
    }
    get_Materias(){
        return this.materias
    }
    get_Nombre(){
        return this.nombre
    }
    get_Carrera(){
        return this.carrera
    }
    get_edad(){
        return this.edad
    }
    set_Edad(nuevoValor){
        this.edad = nuevoValor
    }
    set_materia(nuevaMateria){
        this.materias.push(nuevaMateria)
    }
}
module.exports = Alumnos 