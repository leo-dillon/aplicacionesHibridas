const express = require('express')
const crypto = require('node:crypto')
const { validateMovies, parcialMovieSchema } = require('./validateMovies.js')
const app = express()
const moviesJSON = require('./movies.json')
const { json } = require('node:stream/consumers')

app.use(express.json())

app.get('/', (req, res) => {
    const {genre} = req.query
    res.send(generar('Hola página Home'))
})

app.get('/movies', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*') //Funciona pero no es ideal
    // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/index.html')
    res.json(moviesJSON)
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params
    const movie = moviesJSON.find(movie => movie.id == id)
    if(movie){
        return res.json(movie)
    }else{
        res.status(404).send(generar("Pelicula no encontrada"))
    }
})

app.post('/movies', (req, res) => {
    const result = validateMovies(req.body)
    if(result.error){
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newMovie = {
        id: crypto.randomUUID(),
        ... result.data
    }
    moviesJSON.push(req.body)
    res.send(JSON.stringify(req.body))
})
app.patch('/movies/:id', (req, res) => {
    const { id } = req.params
    const resultValidate = parcialMovieSchema(req.body) 
    if(!resultValidate.success){
        return res.status(400).json({ message: JSON.parse(resultValidate.error.message) })
    }
    const movieIndex = moviesJSON.findIndex(movie => movie.id == id)
    if( movieIndex == -1) return res.status(404).json({message: JSON.parse(resultValidate.error.message)})
    const updateMovie = {
        ...moviesJSON[movieIndex],
        ...resultValidate.data
    }       
    moviesJSON[movieIndex] = updateMovie
    return res.status(200).json(updateMovie)
})


app.listen(3000, () => {
    console.log('Servidor corriento en http://localhost:3000')
})

function generar(text){
    return `<h1>${text}</h1>`
}