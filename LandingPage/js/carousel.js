const radios = document.querySelectorAll('input[name="carousel-button"]');

radios.forEach((radio) => { // Flickity
    radio.addEventListener( "change" , () => {
        // let offset = radio.dataset.carouselButton;
        // let selectedIndex = offset - 1;
        // let slides = radio.closest("[data-carousel]").querySelector("[data-slides]");
        // let selectedSlide = slides.querySelector("[data-selected]");
        // let newIndex = [...slides.children].indexOf(selectedSlide);
        // console.log(selectedIndex)
        // slides.children[selectedIndex].dataset.selected = true;
        // delete selectedSlide.dataset.active;
    })
} );