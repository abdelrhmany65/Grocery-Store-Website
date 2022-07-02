let formSearsh = document.querySelector('.form-search');
document.querySelector('#search-btn').onclick = () =>{
    formSearsh.classList.toggle('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    Navbar.classList.remove('active')
}


let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-btn').onclick = () =>{
    shoppingCart.classList.toggle('active')
    formSearsh.classList.remove('active')
    loginForm.classList.remove('active')
    Navbar.classList.remove('active')
};


let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    formSearsh.classList.remove('active')
    shoppingCart.classList.remove('active')
    Navbar.classList.remove('active')

}


let Navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn').onclick = () =>{
        Navbar.classList.toggle('active')
        formSearsh.classList.remove('active')
        shoppingCart.classList.remove('active')
        loginForm.classList.remove('active')

};

var swiper = new Swiper(".products-slider",{
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
        
      },
      "1020": {
        slidesPerView: 3,
        
      },
    },
});


var swiper = new Swiper(".review-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "0": {
      slidesPerView: 1,
      autoplay:{
          delay:700,
          disableOnInteraction:false,
      },
    },
    "768": {
      slidesPerView: 2,
      
    },
    "1020": {
      slidesPerView: 3,
      
    },
  },
});






