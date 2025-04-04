import express, { json } from 'express';
import chalk from 'chalk';
import  ProductManger  from './ProductManager.js';
import  UserModel  from './UserModel.js';

const port = 5000;
const productManager = new ProductManger();
const userModel = new UserModel();
const app = express();
app.use(express.json())

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
app.get("/api/user", async (req,res) => {
    let userData = await userModel.getUsers()
    res.json(userData)
})

app.get("/api/user/:id", async (req,res) => {
    let { id } = req.params
    let userData = await userModel.getUserById(id)
    if(userData.id){
        res.json(userData)
    }else{
        res.status(404).json({'message': "Usuario no encotrado"})
    }
})



app.post("/api/user", async (req,res) => {
    let user = req.body
    const newUser = await userModel.addUser(user)
    if(newUser){
        res.json(JSON.parse(newUser))
    }else{
        res.status(404).json({'message': "Usuario no creado"})
    }
})

app.put("/api/user/:id", async (req, res) => {
    let user = req.body
    let { id } = req.params
    const updateUser = await userModel.updateUser(id, user)
    if( updateUser ){
        res.json(JSON.parse(updateUser))
    } else {
        res.json({ "message": "Error al querer actualizr un usuario" })
    }

})

app.delete("/api/user/:id", async (req, res) => {
    let { id } = req.params
    const users = await userModel.deleteUser(id)
    if(!users){
        res.json(users)
    }else{
        res.json(JSON.parse(users))
    }
})


app.listen(port,() => {
    console.log(chalk.green("servidor conectado en el puerto 5000"));
    
})