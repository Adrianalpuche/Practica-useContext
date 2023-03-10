// @ts-nocheck
import React, {createContext, useContext, useState} from 'react'
import { User,UserContext } from '../../imports/UserContext.ts'

interface User{
    id:number,
    name:string,
    age: number,
    address: string,
};


function ContextTest2() {

    
  const {id, name, age, address} = useContext<User>(UserContext)
  return(
      
          <div className='HelloContainer'>
              <div className='TextContainer'>
                 <p>{id}</p>
                 <p>{name}</p>
                 <p>{age}</p>
                 <p>{address}</p>
              </div>
          </div>
      
  )
}

export default ContextTest2;
