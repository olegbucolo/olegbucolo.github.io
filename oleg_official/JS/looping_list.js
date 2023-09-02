const loopingList  = document.querySelector(".body-01-02-floating-text");
const listItemWidth  = document.querySelector(".body-01-02-floating-text li").offsetWidth;


function cloneAndAppend() {
    const clone = loopingList.firstElementChild.cloneNode(true);
    loopingList.appendChild(clone);
}

setInterval(() => {
    if (loopingList.scrollLeft >= listItemWidth) {
        loopingList.scrollLeft -= listItemWidth;
        cloneAndAppend();
    }
}, 1000);