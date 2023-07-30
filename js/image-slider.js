document.addEventListener("DOMContentLoaded",function(){

    let slideIndex = 0; /*the first slide index*/
    const slides = document.getElementsByClassName("slide-image"); /*let slides become constant variable to call the image in html to slide*/

    //function to show current slide
    function showSlide(index){
        //if user go to previous slide
        if ( index < 0 ){
            //to calculate current slide length
            slideIndex = slides.length - 1;
        }
        //check if user reach last slide
        else if ( slideIndex >= slides.length ){
            slideIndex = 0;
        }

        //to hide all slide
        for (let i = 0; i < slides.length ; i++ ){
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
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function(){
        slideIndex--;
        showSlide(slideIndex)
    });

    nextBtn.addEventListener("click", function(){
        slideIndex++;
        showSlide(slideIndex)
    });

});