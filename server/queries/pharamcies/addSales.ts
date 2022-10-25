import { NOW } from "sequelize";
import { Product, SalesHistory } from "../../models";

const addSalesHistory =  async (productName:string, quantity:number, pharmacyId:number) => {
    const {Product:{dataValues:{id}}}:any = await Product.findOne({
        where:{
            name: productName
        },
    });
    console.log('id: ', id);
     return  SalesHistory.create({
        quantity,
        pharmacy_id:pharmacyId,
        product_id: 3,
     })
}

export default addSalesHistory;
