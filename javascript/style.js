
const optionMenu1 = document.querySelector(".dropdwn1"),
        selectBtn1 = optionMenu1.querySelector(".drop-btn1"),
        sBtn_text1 = optionMenu1.querySelector(".drop-text1");

selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));



const optionMenu2 = document.querySelector(".dropdwn2"),
        selectBtn2 = optionMenu2.querySelector(".drop-btn2"),
        sBtn_text2 = optionMenu2.querySelector(".drop-text2");


selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));



const optionMenu3 = document.querySelector(".dropdwn3"),
        selectBtn3 = optionMenu3.querySelector(".drop-btn3"),
        sBtn_text3 = optionMenu3.querySelector(".drop-text3");


selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));



const optionMenu4 = document.querySelector(".dropdwn4"),
        selectBtn4 = optionMenu4.querySelector(".drop-btn4"),
        sBtn_text4 = optionMenu4.querySelector(".drop-text4");


selectBtn4.addEventListener("click", () => optionMenu4.classList.toggle("active"));


const swiper = new Swiper('.sample-slider', {
    slidesPerView: 3,
    spaceBetween: 10,
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

    breakpoints:{
        2560: {
            width: 2560,
            slidesPerView: 4,
            spaceBetween: 10,
        },

        1440: {
            width: 1440,
            slidesPerView: 3,
            spaceBetween: 10,
        },

        810: {
            width: 810,
            slidesPerView: 3,
            spaceBetween: 10,
        },

        // 950: {
        //     slidesPerView: 3;
        // },

        // 1024: {
        //     slidesPerView: 3;
        // },

        // 1440: {
        //     slidesPerView: 3;
        // },
    },
})



const swiper1 = new Swiper('.sample-slider1', {
        slidesPerView: 3,
        spaceBetween: 10,
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




const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//  to made the menu  close when a link is selected

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
    