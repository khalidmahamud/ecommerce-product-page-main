const incrementBtn = document.querySelector('#increment-btn');
const decrementBtn = document.querySelector('#decrement-btn');
const addToCartBtn = document.querySelector('#add-to-cart-btn');
const cartItemCount = document.querySelector('#cart-item-count');
const itemQuantity = document.querySelector('#item-quantity');
const cartBtn = document.querySelector('#cart-btn');
const cartMenu = document.querySelector('#cart-menu');
const overlay = document.querySelector('#overlay');
const priceText = document.querySelector('#price');
const quantityText = document.querySelector('#quantity');
const totalAmountText = document.querySelector('#calculated-amount');
const removeCart = document.querySelector('#empty-cart-btn');
const cartDetails = document.querySelector('#cart-details');
const emptyCartMsg = document.querySelector('#empty-cart-message');

let quantity = Number(Number(itemQuantity.innerText));
const price = Number(priceText.textContent);
let total;

cartBtn.addEventListener('click', () => {
    cartMenu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('cart-overlay');

    if(quantity > 0) {
        emptyCartMsg.classList.add('hidden');
        cartDetails.classList.remove('hidden');
        cartDetails.classList.add('flex');
    } else {
        emptyCartMsg.classList.remove('hidden');
        cartDetails.classList.add('hidden');
        cartDetails.classList.remove('flex');
    }    

});

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('cart-overlay')) {
        cartMenu.classList.add('hidden');
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('cart-overlay');
    }
});

incrementBtn.addEventListener('click', () => {
    quantity += 1;
    itemQuantity.innerText = quantity;
});

decrementBtn.addEventListener('click', () => {
    quantity -= 1;
    if(quantity >= 0) {
        itemQuantity.innerText = quantity;
    } else {
        quantity = 0;
        itemQuantity.innerText = quantity;
    }
});

addToCartBtn.addEventListener('click', () => {
    quantity = Number(itemQuantity.innerText);

    if(quantity > 0) {
        cartItemCount.innerText = quantity;
        quantityText.innerText = quantity;
        total = price * quantity;
        totalAmountText.innerText = '$' + total;
    } else {
        cartItemCount.innerText = '';
    }
});

removeCart.addEventListener('click', () => {
    if(confirm('Do you want to remove this cart?')) {
        quantityText.textContent = '';

        quantity = 0;
        total = 0;

        cartItemCount.textContent = '';
        totalAmountText.textContent = '';

        emptyCartMsg.classList.remove('hidden');
        cartDetails.classList.add('hidden');
        cartDetails.classList.remove('flex');
    }
});

