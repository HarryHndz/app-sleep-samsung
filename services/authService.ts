import axios, {isAxiosError } from 'axios'
import { URL_SERVER } from './config'
import { ILogin, IRegister } from '@/data/interfaces/IAuth'
export const registerService = async(dataRegister:IRegister)=>{
  try {
    const {data} = await axios.post(`${URL_SERVER}register`,{
      email:dataRegister.email,
      name:dataRegister.name,
      password:dataRegister.password,
      age:dataRegister.age,
      gender:dataRegister.gender,
      weight:dataRegister.weight
    },
    {
      headers:{
        "Content-Type":'application/json'
      }
    }
  )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.request);
      console.log(error.response);
    }
    
    throw error
  }
}

export const loginService = async(dataLogin:ILogin)=>{
  try {
    const {data} = await axios.post(`${URL_SERVER}login`,{
      email:dataLogin.email,
      password:dataLogin.password
    },
    {
      headers:{
        "Content-Type":'application/json'
      }
    }
  )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.request);
      console.log(error.response);
    }
    
    throw error
  }
}