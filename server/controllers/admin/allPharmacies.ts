import { Request, Response, NextFunction } from "express";
import {getAllPharmaciesGeneral} from '../../queries/admin';

const getAllPharmacies = async (req: Request, res:Response, next:NextFunction)=>{
    const {status, pageNum} = req.params;
    try{
        const pharmaciesResult = await getAllPharmaciesGeneral(status, +(pageNum));
        res.json({data:pharmaciesResult, msg:'Pharmacies are returned successfully'})
    } catch(err){
        next(err);
    }
    
}

export default getAllPharmacies;
