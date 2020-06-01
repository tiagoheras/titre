const sliderImages = document.querySelector('.img-container');
const images = document.querySelectorAll('.img-container img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = images[0].clientWidth;

sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    if (counter >= images.length -1) return;
    sliderImages.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    sliderImages.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

sliderImages.addEventListener('transitionend', ()=> {
    if (images[counter].id === 'lastClone') {
        sliderImages.style.transition = 'none';
        counter = images.length -2;
        sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})

sliderImages.addEventListener('transitionend', ()=> {
    if (images[counter].id === 'firstClone') {
        sliderImages.style.transition = 'none';
        counter = images.length -counter;
        sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})