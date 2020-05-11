var buttons = document.querySelectorAll('.btn4');

var cart_button = document.querySelector('.cart_button');

var cartList = [];

if(localStorage.getItem('cartList')){
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

cart_button.innerText = cartList.length;

function renderCart() {
    var cartContainer = document.querySelector('.cart_list');
    cartList.forEach(function (obj) {
       var newItem = document.createElement('div');
       newItem.classList.add('cart_item');
       newItem.innerHTML = `
       <p>` + obj.name + `</p>
       <img src="${obj.img}"/>
       <small>${obj.price}</small>
       `;
       cartContainer.appendChild(newItem);
    });
}
cart_button.addEventListener('click', renderCart);
//renderCart();

buttons.forEach(function(elem){
    elem.addEventListener('click', function(){
        var name = elem.getAttribute('data-name');
        var price = elem.getAttribute('data-price');
        var id = elem.getAttribute('data-id');
        var img = elem.getAttribute('data-img');

        cartList.push({
            name: name,
            price: price,
            id: id,
            img: img,
        });
        cart_button.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});