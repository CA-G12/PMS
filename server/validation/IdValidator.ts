import Joi from "joi"

const IdValidator = (pharmacyId:number) =>{
    const schema = Joi.object({
        pharmacyId: Joi.number().required()
    })
    return schema.validateAsync({pharmacyId})
}

export default IdValidator;
