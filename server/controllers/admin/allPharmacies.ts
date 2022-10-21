import { Request, Response, NextFunction } from "express";
import { getAllPharmaciesGeneral } from '../../queries/admin';
import { pharmacyStatus } from "../../middlewares/interfaces";
import  pharmacyStatusSchema  from '../../validation'

const getAllPharmacies = async (req: Request<pharmacyStatus>, res:Response, next:NextFunction)=>{
    const {status, page = 1} = req.query;
    try{
        await pharmacyStatusSchema(status, +(page));
        const pharmaciesResult = await getAllPharmaciesGeneral(status, page);
        res.json({data:pharmaciesResult, msg:'Pharmacies are returned successfully'})
    } catch(err){
        next(err);
    }
}

export default getAllPharmacies;
