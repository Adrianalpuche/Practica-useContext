// @ts-nocheck
import React, { useEffect, useState} from 'react'
import { Usuario,Usuariocontext } from '../../imports/IntrefaceUser.ts'
import Usuario2 from './Usuario2.tsx'
import Header from './Header.tsx'


 function Usuariol(){

    const [usuario, setUsuario] = useState<Usuario>({
        nombre: 'Jorge de los Santos',
        profesion:'Ingeniero',
        id: 1234,
        fecha_de_entrada: '12/03/25',
        fecha_de_despedida:'20/10/30',
        telefono:9999999999,
        gmail:'perro_ingenierio@gmail.com'
    })

    return(
        <Usuariocontext.Provider value={usuario}>
        <div className='hij'>
            <div> 
            <Header/>
            <Usuario2/></div>
        <img className='i' src="https://cdn.upsocl.com/wp-content/uploads/2020/09/perrote-4.jpg" alt="" />
        </div>
       
         </Usuariocontext.Provider>
    )
}

export default Usuariol