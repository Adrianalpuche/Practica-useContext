// @ts-nocheck
import React, { useEffect, useState} from 'react'
import { User,UserContext } from '../../imports/UserContext.ts'
import ContextTest2 from './ContextTest2.tsx'

export function ContextTest(){

    const [user, setUser] = useState<User>({
        id: 1234,
        name: 'jojo',
        age: 31,
        address: '-*******'
    })

    useEffect(() =>{
        setTimeout(() =>setUser({...user, age:35}), 3000)
    }, [user])

    return(
        <UserContext.Provider value={user}>
            <ContextTest2/>
        </UserContext.Provider>
        
    )
}

export default ContextTest
