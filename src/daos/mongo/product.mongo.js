//Contiene la logica para recibir datos de productos 
const productModel = require('../model/product.model.js')        //Importamos el productModel para mongoAtlas

class ProductManagerMongo {

    //Retorna todos los documentos de productos
    async getProducts(){
        try{
            return await productModel.find()
        }catch(err){
        return new Error(err)
        }
    }    

    //Agrega un nuevo producto a la coleccion
    async addProduct(newProduct){
        try {
            
        return await productModel.create(newProduct)
        }catch(error){
            return new Error(error)
        }
    }

    //Busca un producto por su id
    async getProductById(pid){
        try {
        return await productModel.findOne({_id: pid})
        }catch(error){
            return new Error(error)
        }
        
    }

     //Elimina un producto por su id
     async deleteProductById(pid){
        try {
        return await productModel.deleteOne({_id: pid})
        }catch(error){
            return new Error(error)
        }
        
    }

     //Actualiza un producto por su id
     async updateProductById(pid, newProduct){
        try {
        return await productModel.updateOne({_id: pid}, newProduct)
        }catch(error){
            return new Error(error)
        }
        
    }

}

module.exports = ProductManagerMongo

