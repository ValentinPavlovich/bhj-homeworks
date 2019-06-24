const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItem = document.querySelectorAll('.slider__item');

let i = 0;

arrowPrev.onclick = function () {
    i -= 1;
    
    for (let k = 0; k < sliderItem.length; k++) {
        sliderItem[k].classList.remove( 'slider__item_active' );
    }
    if (i < 0) {
        i = sliderItem.length - 1;        
    }
    sliderItem[i].classList.add( 'slider__item_active' );
};

arrowNext.onclick = function () {
    i += 1;
    
    for (let k = 0; k < sliderItem.length; k++) {  
        sliderItem[k].classList.remove( 'slider__item_active' );
    }
    if (i >= sliderItem.length) {
        i = 0;
    }
    sliderItem[i].classList.add( 'slider__item_active' );
};