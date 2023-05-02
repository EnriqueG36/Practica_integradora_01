//Router de nuestras vistas

const { Router } = require('express')
const router = Router()

//Ruta que renderiza la vista chat.handlebars
router.get('/chat', (req, res)=>{
		
res.render('chat', {})


})


module.exports = router