// Banner ###

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    function showSlide(index) {
        slides.forEach(slide => slide.style.opacity = '0');
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].style.opacity = '1';
        dots[index].classList.add('active');
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    function stopSlideShow() {
        clearInterval(slideInterval);
    }
    prevButton.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });
    nextButton.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            currentSlide = index;
            showSlide(currentSlide);
            startSlideShow();
        });
    });
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopSlideShow);
    sliderContainer.addEventListener('mouseleave', startSlideShow);
    showSlide(currentSlide);
    startSlideShow();
});



// ###
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




