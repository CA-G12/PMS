import { Request } from 'express';

 interface request extends Request{
    user: {id:number, role:string} | unknown
}

export default request;
