//1er Practica integradora
const express = require('express')
const routerServer = require('./routes/index.js')	//este está mas adelante
const objectConfig = require('./config/configServer.js')                //Importamos el objecto de configuración de mongoose a mongoAtlas

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

objectConfig.connectDB()                                //Se ejecuta el metodo connectDB para ejecutar la conexion conmongo Atlas

app.use(routerServer)	                             //Esto es nuevo, es para quitar los routers de productos y carritos del archivo principal, se define en un archivo index dentro de /routes

app.listen(PORT, (err) => {
if(err) console.log('Error en el servidor', err)
console.log(`Escuchando en el puerto: ${PORT}`)
})