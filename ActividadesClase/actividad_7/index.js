import express from 'express';
import chalk from 'chalk';
import  ProductManger  from './ProductManager.js';

const port = 5000;
const productManager = new ProductManger()
const app = express();

app.get("/",(request,response) => {
    console.log('Ruta raiz');

    response.send('Home');
    
})

app.get("/products", async (req,res) => {
    const lista_products= await productManager.getProducts();

    res.json(lista_products);
})

app.post("/products", async(req,res) => {
    let product_TV2 = { id: 2, name: 'TV2 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
    const product = await productManager.addProduct( product_TV2 );
    res.json(product);
   
    
})

app.listen(port,() => {
    console.log(chalk.green("servidor conectado en el puerto 5000"));
    
})