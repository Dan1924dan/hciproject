const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2000,
	reset: true
})
sr.reveal('.home-text',{delay:100, origin:'left'});
sr.reveal('.home-img',{delay:100, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:100, origin:'bottom'});



// Assume user has successfully logged in








// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}


function addToCart() {
    alert("Item added to cart!");
}


let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () =>{
  cart.classList.toggle('active');
  login.classList.remove('active');
}
