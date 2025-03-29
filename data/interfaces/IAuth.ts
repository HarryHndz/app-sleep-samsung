
interface IAuth{
  email:string,
  password:string
}

export interface ILogin extends IAuth{}
export interface IRegister extends IAuth{
  name:string,
  age:string,
  weight:string,
  gender:string,
}