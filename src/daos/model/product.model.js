//Contiene el Schema y el model para documentos de productos en mongoAtlas

const {Schema, model} = require('mongoose')
const collection = 'products'	//Esta variable contendrá el nombre de la colección que vamos a usar en nuestra base de datos de mongo

//Ahora definiremos el Schema de mongo, campo y tipo de dato, además de otras propiedades
const productSchema = new Schema({
	title: { type: String, required: true },
	description: {type: String, required: true },
	code: { type: String, required: true, unique: true },
    price: { type: Number },
    status: { type: Boolean },
    stock: { type: Number },
    category: {type: String },
    thumbnails: { type: String },
})

//definimos  productModel, que será un objeto al que le pasaremos la colección que vamos a usar y el Schema que vayamos a usar también mediante la función model
const productModel = model(collection, productSchema)

//Ahora exportamos productModel
module.exports =  productModel
