let slideIndex = 0; /*the first slide index*/

//wut 7 is this
//var slides = document.getElementsByClassName("slide-image"); /*let slides become constant variable to call the image in html to slide*/

//correct
var slides = document.getElementsByClassName("slide-img");

//function to show current slide
function showSlide(index) {
    //if user go to previous slide
    if (index < 0) {
        //to calculate current slide length
        slideIndex = slides.length - 1;
    }
    //check if user reach last slide
    else if (index >= slides.length) {
        slideIndex = 0;
    }

    //to hide all slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //show slides want to display
    slides[slideIndex].style.display = "block";
}

//function to automatically move to next slide
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

//slide every 5 second
const interval = setInterval(autoSlide, 5000);

//manually control slide show using button
// const prevBtn = document.getElementsByClassName("prevBtn");
// const nextBtn = document.getElementsByClassName("nextBtn");

// prevBtn.addEventListener("click", function () {
//     slideIndex--;
//     showSlide(slideIndex)
// });

// nextBtn.addEventListener("click", function () {
//     slideIndex++;

//     showSlide(slideIndex)
// });


//easier, less bullshit
function prev() {
    slideIndex--;
    showSlide(slideIndex);
}

function next() {
    slideIndex--;
    showSlide(slideIndex);
}