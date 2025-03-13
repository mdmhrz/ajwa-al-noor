
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="text"]');
    const cartButton = document.querySelector('.ri-shopping-cart-line').parentElement;
    const userButton = document.querySelector('.ri-user-line').parentElement;
    searchInput.addEventListener('focus', function () {
        this.classList.add('border-primary');
    });
    searchInput.addEventListener('blur', function () {
        this.classList.remove('border-primary');
    });
    cartButton.addEventListener('click', function () {
        alert('Cart functionality will be implemented soon!');
    });
    userButton.addEventListener('click', function () {
        alert('User account functionality will be implemented soon!');
    });
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        if (button.textContent === 'Add to Cart') {
            button.addEventListener('click', function () {
                const cartCount = document.querySelector('.ri-shopping-cart-line').parentElement.querySelector('span');
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
            });
        }
    });
});




document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        document.getElementById('newsletter-success').classList.remove('hidden');
        this.reset();
        setTimeout(() => {
            document.getElementById('newsletter-success').classList.add('hidden');
        }, 3000);
    }
});