import { Request, Response, NextFunction } from "express";
import {getAllPharmaciesGeneral} from '../../queries/admin';
interface RequestQuery {
  status: string,
  page: number
}

const getAllPharmacies = async (req: Request<RequestQuery>, res:Response, next:NextFunction)=>{
    const {status, page = 1 } = req.query;

    try{
        const pharmaciesResult = await getAllPharmaciesGeneral(status, page);
        res.json({data:pharmaciesResult, msg:'Pharmacies are returned successfully'})
    } catch(err){
        next(err);
    }
}

export default getAllPharmacies;
