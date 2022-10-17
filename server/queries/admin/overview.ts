import { Pharmacy, Product, ProductsRequest, AdminProduct } from "../../models";

const pharmacyCount = async () => Pharmacy.count();
const pendingApplicationsCount = async () => Pharmacy.count({
    where:{
        status:'Pending'
    }
});
const closedApplicationsCount = async () => Pharmacy.count({
    where:{
        status:'Closed'
    }
});
const openedApplicationsCount = async () => Pharmacy.count({
    where:{
        status:'Opened'
    }
});

const productCount = async () => Product.count();

const expiredProductsCount = async () => AdminProduct.findAndCountAll({
    attributes:['expired_quantity']
});
const inStockProductsCount = async () => AdminProduct.findAndCountAll({
    attributes:['in_stock_quantity']
});

const requestsCount = async () => ProductsRequest.count();

export {
    pharmacyCount,
    productCount,
    requestsCount,
    pendingApplicationsCount,
    openedApplicationsCount,
    closedApplicationsCount,
    expiredProductsCount,
    inStockProductsCount
}