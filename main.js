let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // fermer le menu après scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

 ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay : 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});


// Initialize Typed.js using a DOM container so browser translations apply
let typedInstance = null;

function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

function initTyped() {
    if (typedInstance && typeof typedInstance.destroy === 'function') {
        try { typedInstance.destroy(); } catch (e) { /* ignore */ }
        typedInstance = null;
    }

    const stringsEl = document.querySelector('#typed-strings');
    if (!stringsEl) return;

    typedInstance = new Typed('.multiple-text', {
        stringsElement: '#typed-strings',
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 300,
        smartBackspace: true,
        loop: true,
    });
}

// start
initTyped();

// Re-init Typed when the strings container changes (e.g., browser translation)
const stringsContainer = document.querySelector('#typed-strings');
if (stringsContainer) {
    const observer = new MutationObserver(debounce(() => {
        initTyped();
    }, 250));

    observer.observe(stringsContainer, { childList: true, subtree: true, characterData: true });
}
