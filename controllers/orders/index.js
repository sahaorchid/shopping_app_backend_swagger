// const { addOrder,lastOrder,addOrderProducts,deleteOrder,getOrder } = require('../../models/orders/index')
const Order = require('../../models/orders/Order')
const OrderProduct = require('../../models/orders/OrderProduct')
const Product = require('../../models/products/Product')

async function addNewOrder(req,res){
    try{
        const { user_id,products,address,grand_total } = (req.body)
        console.log(req.body)
        const rslt = await Order.create({user_id:user_id,address:address,grand_total:grand_total})
        const order_id = await Order.findAll({
            limit: 1,
            order: [['id','DESC']]
        })
        const orderProductsData = products.map((product) => {
            return { order_id: rslt.id, product_id: product.id, quantity: product.quantity }
        })       
        const result = await OrderProduct.bulkCreate(orderProductsData)
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function deleteUserOrder(req,res){
    try{
        const id = req.params.id
        console.log(id)
        const rslt = await OrderProduct.destroy({
            where: {order_id:id},
        })
        const result = await Order.destroy({
            where: {id:id},
        })
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function getOrderByUserId(req,res){
    try{
        const user_id = req.params.user_id
        const result = await Order.findAll({
            include :[{
                model: OrderProduct,
                attributes :['quantity'],
                include: [{model:Product}]
            }],
            where: {user_id: user_id}
        })
        res.status(200).json({msg:"success",data:result})
    }catch(err){
        res.status(500).json({msg:"error occured"})
    }
}

module.exports = {
    addNewOrder,
    deleteUserOrder,
    getOrderByUserId
}