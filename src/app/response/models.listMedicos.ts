export interface enviroment{
    production: false, 
    enviroment: "local"
    url: "http://localhost:7107/api/"
}

export interface ListMedicos{
    idMedico: number
    especialidad: string
    cargo: string
    idPersona: number
    nombre: string
    apellido: string
    cedula: string
    telefono: string
    correo: string
    estado: boolean
}