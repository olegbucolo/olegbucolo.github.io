const sandMenu = document.querySelector(".sand-menu");
const headOuter = document.querySelector(".head-outer-sticky");
// const html = document.querySelector("html");
const headOuterB = document.querySelector(".head-outer");

sandMenu.addEventListener('click', ()=>{
    headOuter.classList.toggle("sand-100");
    document.body.classList.toggle("overflow-hidden");
    headOuterB.classList.toggle("zero-height");
})