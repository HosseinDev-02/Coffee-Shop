window.addEventListener("load", () => {
    const bookTimeInputBtn = document.getElementById("reserve-time-input-btn")
    const timeInput = document.querySelector(".reserve-time")
    const bookTimes = document.querySelectorAll(".book__times")
    const bookTime = document.getElementById("reserve-time")
    const bookTimeIcon = document.querySelector("#reserve-time-icon")
    const bookForm = document.getElementById("reserve-form")


    jalaliDatepicker.startWatch();


    bookTimes.forEach(time => {
        time.addEventListener("click", () => {
            bookTime.innerHTML = time.innerHTML
            timeInput.classList.add("reserve-time--hidden")
        })
    })

    bookTimeInputBtn.addEventListener("click", () => {
        timeInput.classList.toggle("reserve-time--hidden")
        bookTimeIcon.classList.toggle("rotate-180")
    })

    bookForm.addEventListener('submit', e => {
        e.preventDefault()
    })

    const swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            410: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
})
