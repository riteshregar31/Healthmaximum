function thank(){
    alert("Thanks !!! We got your message :)");
}

burger=document.querySelector('.burger');
navlist=document.querySelector('.nav-list');
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.rightnav');
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
burger.classList.toggle('navbar');
})