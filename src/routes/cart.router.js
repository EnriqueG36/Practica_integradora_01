//Endpoints para manejar los carritos

const { Router } = require('express')
const CartManager = require('./../daos/mongo/cart.mongo.js')    //Importamos el cartManager

const cartManager = new CartManager()

const router = Router();    //Intanciamos router

//Endpoints para manejar los carritos

//Crear un carrito nuevo vacío
router.post('/', async (req, res)=>{
    try{
        const newCart = await cartManager.createCart()
        res.status(200).send({
            status: "success, se ha creado un nuevo carrito",
            payload: newCart
        })

    }catch(error){
        console.log(error)
    }

})

//Agrega un producto a un carrito
router.post('/:cid/product/:pid', async (req, res)=>{
    try{
        const {cid} = req.params
        const {pid} = req.params
       
        const showCart = await cartManager.addProductToCart(cid, pid)
        res.status(200).send({
            status: `success, se añadió el producto al carro: ${cid}`,
            payload: showCart
        })

    }catch(error){
        console.log(error)
    }



})


//lista los productos en un carrito por el id del carrito
router.get('/:cid', async (req, res)=>{
    try{
        const {cid} = req.params
        console.log(cid)
        const showCart = await cartManager.showCartProducts(cid)
        res.status(200).send({
            status: `success, se muestra el carrito: ${cid}`,
            payload: showCart
        })

    }catch(error){
        console.log(error)
    }

})

module.exports = router