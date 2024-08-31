document.addEventListener("DOMContentLoaded", function() {
    // Sound button logic
    const soundButton = document.getElementById("sound-button");
    const soundIcon = document.getElementById("sound-icon");

    soundButton.addEventListener("click", function() {
        const isMuted = soundIcon.src.endsWith("sound-icon.png"); // Better URL check
        soundIcon.src = isMuted ? "/src/assets/Icon/sound-icon-mute.png" : "/src/assets/Icon/sound-icon.png"; // Toggle icon path
    });

    // Navbar active link logic
    const navbar = document.getElementById('navbar');
    const links = navbar.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            const current = navbar.querySelector('.active');
            if (current) current.classList.remove('active'); // Ensure only one active class
            this.classList.add('active');
        });
    }

    // Profile dropdown logic
    const profileIcon = document.querySelector('.profile-icon');
    const dropdown = document.querySelector('.dropdown');

    if (profileIcon && dropdown) {
        profileIcon.addEventListener('click', function(event) {
            // Toggle the dropdown visibility
            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', function(event) {
            // Check if the click was outside the dropdown and profile icon
            if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });
    }

    // Carousel logic
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
            track.style.transform = `translateX(-${targetSlide.style.left})`;
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        if (prevButton) {
            prevButton.addEventListener('click', e => {
                const currentSlide = track.querySelector('.current-slide');
                const prevSlide = currentSlide.previousElementSibling;
                if (prevSlide) {
                    moveToSlide(track, currentSlide, prevSlide);
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', e => {
                const currentSlide = track.querySelector('.current-slide');
                const nextSlide = currentSlide.nextElementSibling;
                if (nextSlide) {
                    moveToSlide(track, currentSlide, nextSlide);
                }
            });
        }
    });
});

// If using jQuery
$(document).ready(function() {
    $('.profile-icon').hover(
        function() {
            $('.dropdown').css('display', 'block');
        },
        function() {
            $('.dropdown').css('display', 'none');
        }
    );

    $('.dropdown a').click(function() {
        window.location.href = $(this).attr('href');
    });
});
