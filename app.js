//Usando objeto de express
const express = require('express')
//App de express
const app = express()
app.use(express.json()) //Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Server listo on ${port}`)
})

// GET Crea un endpoint que regrese una lista de explorers
//Utiliza el método GET de express para este endpoint
//Crea algunos objetos y regresa la lista como se indica.
//Agrega el código HTTP CODE 200 en el request:
//Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res)=> {
    console.log(`API explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: 'El pepe'}
    const explorer2 = {id: 2, name: 'La maria'}
    const explorer3 = {id: 3, name: 'La wera'}
    const explorer4 = {id: 4, name: 'La china'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    //HTTP CODE STATUS: 200 (codigo exitoso)
    res.status(200).json(explorers)
})