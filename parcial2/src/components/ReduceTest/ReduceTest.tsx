// @ts-nocheck
import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect,useReducer, useState} from 'react'

interface AuthState{
    validating: boolean,
    token: string | null,
    name: string,
    userName: string, 
}

type authAction = 
    {type: 'logout'}
    {type: 'login', payload: LoginPay}


const initialState:AuthState = {
    validating:true,
    token:null,
    name:'',
    userName:'',

}

{type:string}

const authReducer = (state:AuthState, action:authAction): AuthState =>{
    switch(action.type){
        case 'logout':
            return {
                ...initialState,
                validating:false,
            }

            break;
        default:
            return state;
    }

}

 function ReduceTest(){

    const [state,dispatch] = useReducer(authReducer, initialState);

    useEffect(() =>{
        //setTimeout(() => dispatch({type:'Logout'}),3000)
        setTimeout(() => dispatch({type:'login',payload:{
            name:'Abelardo'
            
        }}),3000)
    },[])

    return(
        <>
        <h1>{JSON.stringify(state,null,2)} </h1>
        <br />
        {state.validating && <h1>validating...</h1>}
        {!state.validating && !state.token && <h1>Login out...</h1>}

        </>
        
    )
}

export default ReduceTest
