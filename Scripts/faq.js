const faqItems = document.querySelectorAll('.faq-item');
const faqImage = document.getElementById('faqImage');
const images = {
    default: "../assets/faq.jpg",
    delivery: "https://public.readdy.ai/ai/img_res/61ce21c6a368bd98ed0ec21a942c2747.jpg",
    payment: "https://public.readdy.ai/ai/img_res/699655ee4773bf64c6f14ee1fa69466d.jpg",
    warranty: "https://public.readdy.ai/ai/img_res/3b0d2608922042d1fb172401830c2a6e.jpg",
    shipping: "https://public.readdy.ai/ai/img_res/7327646bcc49814a7e43e20998a0d6a1.jpg",
    trade: "https://public.readdy.ai/ai/img_res/e5a6ffb6b0788782bc2ba49a8cfa04c8.jpg"
};
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const wasActive = item.classList.contains('active');
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        if (!wasActive) {
            item.classList.add('active');
            const imageType = item.dataset.image;
            if (images[imageType]) {
                faqImage.style.opacity = '0';
                setTimeout(() => {
                    faqImage.src = images[imageType];
                    faqImage.style.opacity = '1';
                }, 300);
            }
        }
    });
});