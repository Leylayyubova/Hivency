document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                // Hide all panels
                accordions.forEach(function(acc) {
                    acc.nextElementSibling.style.display = "none";
                });
                panel.style.display = "block";
            }
        });
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     var swiper = new Swiper(".customMySwiper", {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         freeMode: true,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

