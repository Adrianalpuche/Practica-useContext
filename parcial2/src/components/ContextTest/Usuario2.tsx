// @ts-nocheck
import React, {createContext, useContext, useState} from 'react'
import { Usuario,Usuariocontext } from '../../imports/IntrefaceUser.ts'

interface Usuario{
    id: number,
    fecha_de_entrada:string,
    fecha_de_despedida:string,
    telefono:number,
    gmail:string,
}


function Usuario2() {

    
    const { id, fecha_de_entrada,fecha_de_despedida,telefono,gmail} = useContext<Usuario>(Usuariocontext)
    return(
                <div className='TextContainer'>
                    <div className='division'>
                    <p> ID: {id}</p>
                    <p> FECHA DE ENTRADA: {fecha_de_entrada}</p>
                    <p> CORREO: {gmail}</p>
                    </div>
                    <div className='division'>
                        <p>Fecha de salida: {fecha_de_despedida}</p>
                        <p> Telefono: {telefono}</p>
                    </div>
                    <div>

                    </div>
                </div>
            
        
    )
  }
  
  export default Usuario2;