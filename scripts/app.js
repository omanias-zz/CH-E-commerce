
// Object Constructor

function Product(componente, marca, precio) {
    this.componente = componente;
    this.marca = marca;
    this.precio = precio;
}

const product1 = new Product("Monitor", "Samsung", 23990)
const product2 = new Product("Cámara", "Logitech", 10989);
const product3 = new Product("Teclado", "Logitech", 3937);
const product4 = new Product("Mouse", "Logitech", 1398);
const product5 = new Product("Impresora", "Brother", 21998);
const product6 = new Product("Auriculares", "Logitech", 1398);
const product7 = new Product("Micrófono", "Trust", 3221);
const product8 = new Product("Parlante", "JBL", 21998);
const product9 = new Product("Notebook", "HP", 86999);
const product10 = new Product("Disco duro externo", "WD", 9499);


// Array con todos los productos

const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

products.sort((a, b) => {
    return a.precio - b.precio;
});

products.forEach((e) => {
    console.log(`${e.componente} ${e.marca} ${e.precio}`);
});
