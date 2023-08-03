const img01 = document.querySelector('.img01');
const img01Styles = window.getComputedStyle(img01);
const img01Bottom = img01Styles.getPropertyValue('bottom');
console.log('the bottom of the img01 is: ' + img01Bottom);
const img01BottomParsed = removePx(img01Bottom);
console.log('the bottom of the img01 WITHOUT PX is: ' + img01BottomParsed);

const img02 = document.querySelector('.img02');
const img02Styles = window.getComputedStyle(img02);
const img02Bottom = img02Styles.getPropertyValue('bottom');
console.log('the bottom of the img02 is: ' + img02Bottom);
const img02BottomParsed = removePx(img02Bottom);
console.log('the bottom of the img02 WITHOUT PX is: ' + img02BottomParsed);

// console.log('the scroll is: ' + s);

window.addEventListener('scroll', function(){
    let s = window.scrollY;
    
    const img01AdjustedBottom = (s * 1 + img01BottomParsed) + 'px';
    img01.style.setProperty('bottom', img01AdjustedBottom);
    console.log('the bottom img01 is: ' + img01AdjustedBottom);

    const img02AdjustedBottom = (img02BottomParsed - s * 2) + 'px';
    img02.style.setProperty('bottom', img02AdjustedBottom);
    console.log('the bottom img02 is: ' + img02AdjustedBottom);

})

// removing px from value like '270.2879px' 

function removePx(valueWithPx) {
    return parseFloat(valueWithPx);
  }
  