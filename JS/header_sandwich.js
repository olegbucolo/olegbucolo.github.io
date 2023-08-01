const headOuter = document.querySelector('.head-outer');
const sandwich = document.querySelector('.nav-link-sandwich');


sandwich.addEventListener('click', function(event){
    // removing the ability of the <a class="nav-link-sandwich"><span>_</span><span>_</span></a> to redirect the page (therefore reloading and cancelling this script which adds a class to the .head-outer div element)
    event.preventDefault();
    // toggling the .pressed class onto headOuter in order to have our sandwich menu working
        headOuter.classList.toggle('pressed');
    
    // adds the class .no-scroll to set a overflow: hidden to the body when the menu is opened
    document.body.classList.toggle('no-scroll');
})