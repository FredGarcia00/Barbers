let slides = document.querySelectorAll(".slider__slide"),
// cities = document.querySelectorAll('.slider__area')
leftArrow = document.getElementById('slider__left')
rightArrow = document.getElementById('slider__right')
activeSlide = 0

// Code below sets active class to first slide
slides[activeSlide].classList.add("slider__slide--active")
// cities[0].classList.add("slider__area--active")

// // logic to change slide right when clicked
// rightArrow.addEventListener('click', () => {
//     activeSlide++; 
//     if(activeSlide > slides.length - 1) {
//         activeSlide = 0;
//     }
//     setActiveSlide();
// });


// // logic to change slide left when clicked
// leftArrow.addEventListener('click', () => {
//     activeSlide--;

//     if(activeSlide < 0) {
//         activeSlide = slides.length - 1;
//     }
//     setActiveSlide();
// });

const setActiveSlide = () => {
    slides.forEach((slide) => slide.classList.remove("slider__slide--active"));
    slides[activeSlide].classList.add("slider__slide--active");
    // cities.forEach((city) => city.classList.remove("slider__area--active"));
    // cities[activeSlide].classList.add("slider__area--active");
    
};
// code below for the auto slide function
const slide = () => {
    activeSlide ++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setActiveSlide();
}


// logic for the pause button
playing = true
time = 4000
interval = setInterval(slide, time)



const trigger = () => {
    playing = true;
    interval = setInterval(slide, time)
}

const control = () => {
    if(playing) {
        playing = false;
        document.getElementById('slider__pause').innerHTML = "play";
        clearInterval(interval);
    }
    else {
        trigger();
        document.getElementById('slider__pause').innerHTML = "pause"
    }
}

// document.getElementById('slider__pause').addEventListener('click',control);

setInterval(slide,time);
