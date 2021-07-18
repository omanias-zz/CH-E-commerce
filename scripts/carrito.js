
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector('.content-cart tbody');

const Lista = [];


function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.col');


    const productTitle = item.querySelector('.card-header').textContent;
    const productPrice = item.querySelector('p').textContent;
    const productImage = item.querySelector('img').src;


    addToShoppingCart(productTitle, productPrice, productImage);
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


    imprimir.forEach(element => {
        listado.innerHTML += `
        <tr>
            <td><img src="${element.productImage}"></td>
            <th>${element.productTitle}</th>
            <th>${element.productPrice}</th>
            <td><button type="button" class="btn 
            btn-danger" id="eliminar">Eliminar del carrito</button></td>
        </tr>`

    });
}

function removeShoppingCartItem(e) {
    const buttonClicked = e.target;
    buttonClicked.closest('.shoppingCartItem').remove();

}

const btnCarrito = document.getElementById("carrito");
btnCarrito.addEventListener('click', imprimirCarrito);


const btnEliminar = document.getElementById("eliminar");
btnEliminar.addEventListener('click', eliminar);




