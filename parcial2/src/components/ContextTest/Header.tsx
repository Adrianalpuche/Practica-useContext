// @ts-nocheck
import React, {createContext, useContext, useState} from 'react'
import { Usuario,Usuariocontext } from '../../imports/IntrefaceUser.ts'

interface Usuario{
    nombre:string,
    profesion:string,
}


function Header() {

    
    const {nombre,profesion} = useContext<Usuario>(Usuariocontext)
    return(
        
            <div className='HelloContainer'>
                <div className='TextContainer'>
                    <div className='division1'>
                    <p>{nombre}</p>
                    <p>{profesion}</p>
                    </div>
                </div>
            </div>
        
    )
  }
  
  export default Header;