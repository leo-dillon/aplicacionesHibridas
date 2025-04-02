class ProductManger{
    products = [];
    constructor(products = []){
        this.products = products
    }
    // { name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
    addProduct(product){
        if(validateProductManger(product)){
            this.products.push(product)
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find(  item => item.id == id  );
        return product ? product : {};
    }
}

function validateProductManger( product ){
    let res = false
    if( product.name && product.description && product.image && product.price ){
        res = true
    }
    return res
}

module.exports = ProductManger