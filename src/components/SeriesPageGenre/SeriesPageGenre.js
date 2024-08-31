document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('navbar');
    const links = navbar.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            const current = document.getElementsByClassName('active');

            if (current.length > 0) {
                current[0].classList.remove('active');
            }

            this.classList.add('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdown = document.querySelector('.dropdown');

    profileIcon.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

$(document).ready(function() {
    $('.profile-icon').hover(function() {
        $('.dropdown').css('display', 'block');
    }, function() {
        $('.dropdown').css('display', 'none');
    });

    $('.dropdown a').click(function() {
        window.location.href = $(this).attr('href');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.nextBtn');
        const prevButton = carousel.querySelector('.prevBtn');
        const slideWidth = slides[0].getBoundingClientRect().width;

        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            if (prevSlide) {
                moveToSlide(track, currentSlide, prevSlide);
            }
        });

        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            if (nextSlide) {
                moveToSlide(track, currentSlide, nextSlide);
            }
        });
    });
});





$(document).ready(function() {
    $("#aksi-link").click(function(e) {
        e.preventDefault();  // Prevent the default action of the link
        $("#aksi-content").toggle();  // Toggle the display of the aksi-content
    });
});

$(document).ready(function() {
    $("#aksi-link").click(function(e) {
        e.preventDefault();  // Prevent the default action of the link
        $("#aksi-content").toggle();  // Toggle the display of the aksi-content
    });
});


// script.js

document.addEventListener("DOMContentLoaded", function() {
    var aksiLink = document.getElementById("aksi-link");
    var aksiContent = document.getElementById("aksi-content");

    aksiLink.addEventListener("click", function(event) {
        event.preventDefault();
        aksiContent.style.display = aksiContent.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('#aksi-link')) {
            aksiContent.style.display = "none";
        }
    });
});
