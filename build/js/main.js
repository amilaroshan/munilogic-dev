

function init(){

const tl = gsap.timeline();
  
  tl.from("body", {
      duration: 1,
      opacity:0,
    }).from(".hero__group > *", {
      duration: 1.3,
      y:-20,
      opacity:0,
      stagger: .2,});


      let mobileMenu = document.getElementById('mm');
      let nav = document.getElementById('nav');

      mobileMenu.addEventListener('click',function(){

        nav.classList.add('d-flex');

      });
}

  
    window.addEventListener('load', function(){
      init();
  });