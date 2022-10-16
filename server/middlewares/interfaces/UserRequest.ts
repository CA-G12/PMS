import { Request } from 'express';

 interface UserRequest extends Request{
    user: {id:number, role:string} | unknown
}

export default UserRequest;
