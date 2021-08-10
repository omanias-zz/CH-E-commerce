
const addToShoppingCartButtons = $('.addToCart');
addToShoppingCartButtons.each(function (index, element) {
    element.addEventListener('click', addToCartClicked);
});

// const shoppingCartItemsContainer = $('.content-cart tbody');

const Lista = [];


function addToCartClicked(event) {


    const button = event.target;
    const item = button.closest('.col');

    const productTitle = item.querySelector('.card-header').textContent;
    const productPrice = item.querySelector('.card-text').textContent;
    const productImage = item.querySelector('img').src;
    addToShoppingCart(productTitle, productPrice, productImage);
    listado.innerHTML = ''
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

        let td3 = document.createElement('th')

        let img = document.createElement('img')
        img.src = imprimir[i].productImage;
        td3.appendChild(img);
        tr.append(td3);


        let td1 = document.createElement('th')
        td1.textContent = imprimir[i].productTitle;
        tr.append(td1);

        let td2 = document.createElement('th')
        td2.textContent = imprimir[i].productPrice;
        tr.append(td2);


        let td4 = document.createElement('th')

        let btn = document.createElement('button')
        btn.setAttribute('class', 'shoppingCartItem')
        btn.textContent = 'Eliminar del carrito'
        btn.addEventListener('click', removeShoppingCartItem)
        td4.append(btn)
        tr.append(td4)
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


//sumar precios de productos





//ANIMACIONES

function evento() {
    $('.btn-outline-info').slideToggle(1000)
}

$('.btn-outline-info').on('click', evento);



