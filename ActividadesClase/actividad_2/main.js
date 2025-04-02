const ProductManger2 = require("./ProductManager2.js")
const ProductManger = require("./ProductManager.js")
let a = new ProductManger()
let product_TV = { id: 1, name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
let product_TV2 = { id: 2, name: 'TV2 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
let agregado = a.addProduct(product_TV)
let agregado2 = a.addProduct(product_TV2)

setTimeout(() => {
    console.log(a.getProducts())
    console.log("Archivo buscado : 1", a.getProductById(1))
}, 200);