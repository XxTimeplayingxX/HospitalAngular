export interface enviroment{
    production: false, 
    enviroment: "local"
    url: "http://localhost:7107/api/"
}



export interface listMedicos{
    idMedico: number
    especialidad: string
    cargo: string
    idPersona: number
    name: string
    apellido: string
    cedula: string
    telefono: string
    correo: string
}