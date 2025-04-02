const http = require('node:http')
const productManager = require('./ProductManager.js')
const productManagernew = new productManager()
const port = 3000
const server = http.createServer( async ( request, response ) => {
    let url = request.url
    let body = ""
    let status = ""
    if(url == "/"){
        body = "Home"
        status = 200
    } else if( url == "/productos" ){
        body = "productos"
        status = 200
    } else{
        body = "ERROR 404"
        status = 404
    }
    console.log(url)
    response.writeHead(status, {
        "content-type": "text/html"
    })
    response.end( await crearHMTL(body, url))
    
})
server.listen(port, () => {
    console.log(`servidor web en puerto ${port}`)
})


async function crearHMTL ( body, status){
    let productos 
    if(body === "productos"){
        productos = await buscarProductos()
    }
    let a = `
        <a href="/productos"> Productos </a>
        <a href="/"> Home </a>
        <a href="/error"> cosa </a>
        <h1>${body} </h1><br>
        <p> ${status} </p>
        <div class="mostrar"> ${JSON.stringify(productos)} </div>
    `
    return a
}
async function buscarProductos(){
    productos = await productManagernew.getProducts()
    return productos
}