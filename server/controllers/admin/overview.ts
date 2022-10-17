import { Request, Response, NextFunction } from "express";
import { pharmacyCount,
        productCount,
        requestsCount, 
        pendingApplicationsCount,
        openedApplicationsCount,
        closedApplicationsCount,
        expiredProductsCount,
        inStockProductsCount } from "../../queries/admin/overview";

const getAdminOverview = async (req:Request, res:Response, next:NextFunction) =>{
    const pharmaciesNumber = await pharmacyCount();
    console.log('pharmaciesNumber: ', pharmaciesNumber);

    const productsNumber = await productCount();
    console.log('productsNumber: ', productsNumber);

    const productsRequestsNumber = await requestsCount();
    console.log('productsRequestsNumber: ', productsRequestsNumber);

    const pendingApplicationsNumber = await pendingApplicationsCount();
    console.log('pendingApplicationsNumber: ', ((pendingApplicationsNumber/pharmaciesNumber)*100).toFixed(1) + '%');

    const openedApplicationsNumber = await openedApplicationsCount();
    console.log('openedApplicationsNumber: ', ((openedApplicationsNumber/pharmaciesNumber)*100).toFixed(1) + '%');

    const closedApplicationsNumber = await closedApplicationsCount();
    console.log('closedApplicationsNumber: ', ((closedApplicationsNumber/pharmaciesNumber)*100).toFixed(1) + '%');
    
    const {count: expiredProductsNumber} = await expiredProductsCount();
    console.log('expiredProductsNumber: ', expiredProductsNumber);

    const {count: inStockProductsNumber} = await inStockProductsCount();
    console.log('inStockProductsNumber: ', inStockProductsNumber);

}

export default getAdminOverview;
