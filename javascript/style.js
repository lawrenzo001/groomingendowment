
// .slider-container {
//     width: 100%;
//     overflow: hidden;
// }

// .slide {
//     display: none;
// }

// .slide img {
//     width: 100%;
//     height: auto;
// }


// let slideindex = 1;
// showSlides(slideindex);


// function plusSlides(n) {
//     showSlides(slideindex += n);

// }

// function currentSlide(n) {
//     showSlides(slideindex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     let dots = document.getElementsByClassName("dot");

//     if (n > slideindex.length) {
//         slideindex = 1;

//     }

//     if (n < 1) {
//         slideindex = slides.length;

//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].style.display = "none";
//     }
    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove = "active";
//     }

//     slides[slideindex - 1].style.display = "block";
//     dots[slideindex - 1].classList.add("active");


// }



const optionMenu1 = document.querySelector(".dropdwn1"),
        selectBtn1 = optionMenu1.querySelector(".drop-btn1"),
        // options = optionMenu.querySelectorAll(".option"),
        sBtn_text1 = optionMenu1.querySelector(".drop-text1");

selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));



const optionMenu2 = document.querySelector(".dropdwn2"),
        selectBtn2 = optionMenu2.querySelector(".drop-btn2"),
        // options = optionMenu.querySelectorAll(".option"),
        sBtn_text2 = optionMenu2.querySelector(".drop-text2");


selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));



const optionMenu3 = document.querySelector(".dropdwn3"),
        selectBtn3 = optionMenu3.querySelector(".drop-btn3"),
        // options = optionMenu.querySelectorAll(".option"),
        sBtn_text3 = optionMenu3.querySelector(".drop-text3");


selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));



const optionMenu4 = document.querySelector(".dropdwn4"),
        selectBtn4 = optionMenu4.querySelector(".drop-btn4"),
        // options = optionMenu.querySelectorAll(".option"),
        sBtn_text4 = optionMenu4.querySelector(".drop-text4");


selectBtn4.addEventListener("click", () => optionMenu4.classList.toggle("active"));


const swiper = new Swiper('.sample-slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,                         //loop
    autoplay: {                         //autoplay
        delay: 2000,  
    },   
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})



const swiper1 = new Swiper('.slider1', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,                         //loop
        autoplay: {                         //autoplay
            delay: 2000,  
        },   
        pagination: {                       //pagination(dots)
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {                       //navigation(arrows)
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
    

















// var swiper = new Swiper(".sample-slider1", {
//         slidesPerView: 4,
//         spaceBetween: 20,
//         loop: true,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//     });
        