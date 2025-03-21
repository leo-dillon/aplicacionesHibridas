const ProductManger = require("./ProductManager.js")
let a = new ProductManger()
let product_TV = { id: 1, name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
let product_TV2 = { id: 2, name: 'TV2 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
console.log("------------------------------------------------")
console.log(product_TV)
let agregado = a.addProduct(product_TV)
console.log("Se agrego el producto ? ")
console.log(agregado)
let agregado2 = a.addProduct(product_TV2)
console.log("Se agrego el producto ? ")
console.log(agregado2)
console.log("Archivo buscado : 1", a.getProductById(1))

const fs = require('fs');
const path = './notas.json';
const data = JSON.stringify(a.getProducts())

fs.readFile(path, function(err, data){
    if( err) {
        console.error('Ocurrió un error');
    }else {
        console.log(data.toString());
    }
})
setTimeout(() => {
    fs.writeFile(path, data, function(err){
        if(err){
            console.error('Ocurrió un error');
        } else {
            console.log(data.toString());
        }
    })
}, 100);