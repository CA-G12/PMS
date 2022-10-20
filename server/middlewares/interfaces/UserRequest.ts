import { Request } from 'express';

 interface UserRequest extends Request{
    user?: {id:number, role:string}
}

export default UserRequest;
