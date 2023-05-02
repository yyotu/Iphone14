const burgerBtn = document.querySelector('.burger-btn');
const navRightMobile = document.querySelector('.nav-right');

burgerBtn.addEventListener('click', function () {
    navRightMobile.classList.toggle('active')
    burgerBtn.classList.toggle('active')


})

console.log(burgerBtn)

