document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MOBILE MENU --- */
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    /* --- 2. STICKY HEADER --- */
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "none"; 
        }
    });

    /* --- 3. SMOOTH SCROLL --- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* --- 4. SCROLL REVEAL --- */
    function revealOnScroll() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load

    /* --- 5. HERO SLIDER LOGIC --- */
    let slideIndex = 1;
    let slideInterval;
    
    function showSlides(n) {
        let slides = document.getElementsByClassName("hero-slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        
        for (let i = 0; i < slides.length; i++) slides[i].classList.remove("active");
        for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active-dot");
        
        if(slides.length > 0) {
            slides[slideIndex - 1].classList.add("active");
            dots[slideIndex - 1].classList.add("active-dot");
        }
    }

    window.moveSlide = n => { showSlides(slideIndex += n); resetTimer(); }
    window.currentSlide = n => { showSlides(slideIndex = n); resetTimer(); }
    
    function startTimer() { slideInterval = setInterval(() => showSlides(slideIndex += 1), 5000); }
    function resetTimer() { clearInterval(slideInterval); startTimer(); }

    showSlides(slideIndex);
    startTimer();
});