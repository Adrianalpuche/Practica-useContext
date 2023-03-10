//import {Usuarios} from "react"
import { createContext } from "react";


export interface Usuario{
    nombre:string,
    profesion:string,
    id: number,
    fecha_de_entrada:string,
    fecha_de_despedida:string,
    telefono:number,
    gmail:string,
}

export const Usuariocontext = createContext<Usuario>({
    nombre: 'xxxxxx',
    profesion:'xxxxx',
    id: 1234,
    fecha_de_entrada: 'xxxxxxx',
    fecha_de_despedida:'xxxxx',
    telefono:9999999999,
    gmail:'xxxxx'
})