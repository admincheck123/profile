document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.hero-slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000, // Tự động chuyển slide sau 2 giây
        },
    });
});
// Handle form submission with basic validation
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (name === '' || email === '') {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    alert("Đăng ký thành công!");
});