
const addToShoppingCartButtons = $('.addToCart');
addToShoppingCartButtons.each(function (index, element) {
    element.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = $('.content-cart tbody');

const Lista = [];


function addToCartClicked(event) {


    const button = event.target;
    const item = button.closest('.col');

    const productTitle = item.querySelector('.card-header').textContent;
    const productPrice = item.querySelector('.card-text').textContent;
    const productImage = item.querySelector('img').src;

//Aqui no pude agregar JQuery porque no funcionaba, me imprime un error con item.    
    addToShoppingCart(productTitle, productPrice, productImage);
    imprimirCarrito();


}


function addToShoppingCart(productTitle, productPrice, productImage) {
    const newItem = {
        
        productTitle, productPrice, productImage
    }

    Lista.push(newItem)
    localStorage.setItem('Lista', JSON.stringify(Lista));
};



function imprimirCarrito() {

    let imprimir = JSON.parse(localStorage.getItem('Lista'));

    for (let i = 0; i < imprimir.length; i++) {
     

let tr = document.createElement('tr');

        let td1 = document.createElement('th')
        
        td1.textContent = imprimir[i].productTitle;
        
        tr.append(td1);

        let td2 = document.createElement('th')

        td2.textContent = imprimir[i].productPrice;

        tr.append(td2);

        let td3 = document.createElement('th')

        td3.textContent = imprimir[i].productImage;

        tr.append(td3);

        
        let btn = document.createElement('button')
        btn.setAttribute('class', 'shoppingCartItem')
        btn.textContent = 'Eliminar del carrito'
        btn.addEventListener('click', removeShoppingCartItem)
        td2.append(btn)
        tr.append(td2)
        listado.append(tr)

}
}

function removeShoppingCartItem(e) {

    const button = e.target;
    const item = button.closest('tr');
    const index = item.index;
    Lista.splice(index, 1);
    localStorage.setItem('Lista', JSON.stringify(Lista));
    item.remove();


}

// const btnCarrito = $("#carrito");
// btnCarrito.on('click', function () {
//     imprimirCarrito();
// })

