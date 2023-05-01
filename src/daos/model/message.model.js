//Contiene el Schema y el model para documentos de productos en mongoAtlas

const {Schema, model} = require('mongoose')
const collection = 'messages'	//Esta variable contendrá el nombre de la colección que vamos a usar en nuestra base de datos de mongo

//Ahora definiremos el Schema de mongo, campo y tipo de dato, además de otras propiedades
const messagesSchema = new Schema({
	email: {type: String, required: true},
    messageText: {type: String, required: true}
})

//definimos  productModel, que será un objeto al que le pasaremos la colección que vamos a usar y el Schema que vayamos a usar también mediante la función model
const messagesModel = model(collection, messagesSchema)

//Ahora exportamos userModel
module.exports = {
	messagesModel
}