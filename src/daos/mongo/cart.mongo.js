//Contiene la lógica para recibir datos de carritos 

const cartModel = require('../model/cart.model.js') //Importamos el cartModel

class CartManagerMongo {

    //Retorna todos los documentos de carritos
    async createCart(){
        try{
            //Este arreglo vavio se declara para cumplir con el Schema de mongoose
            let emptyProducts = {productId: null, 
                            quantity: 0}

            //Se pasa el arreglo anterior
            return await cartModel.create({products: emptyProducts})
        }catch(err){
        return new Error(err)
        }
    }    
    
    //Agrega un nuevo carrito a la coleccion
    async addProductToCart(cid, pid){
        try {
           let foundCart = await cartModel.findOne({_id: cid})
          //console.log (foundCart)

          let productArray = foundCart.products //obtenemos el arreglo products del documento
          //console.log(productArray) 
          let newProduct = {productId: pid, quantity: 1}    //Definimos un nuevo producto 
          let foundId = false;

          productArray.forEach(element => {     //recorremos el arreglo products en busca del id proporcionado por params
            if (element.productId == pid){
                element.quantity ++             //Si se encuentra se sumará uno a la propiedad quantity
                foundId = true
                
            }
        })
            if (foundId){
                return await cartModel.updateOne({_id: cid},{products: productArray})       //si se encontro el id del producto en el carro, se actualiza en mongoAtlas
            }
            else {
                productArray.push(newProduct)                                               //Si no se encontró, se hace push del nuevo producto antes de actualizar en mongoAtlas
                return await cartModel.updateOne({_id: cid},{products: productArray})       
            }   
 
        
        }catch(error){
            return new Error(error)
        }
    }

    //Lista los productos en un carrito
    async showCartProducts(cid){
        try {
            
        return await cartModel.findOne({_id: cid})
        }catch(error){
            return new Error(error)
        }
    }

}

module.exports = CartManagerMongo