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

            const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
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


 const typed = new Typed('.multiple-text', {
    strings: ['Web developper', 'Designer Web', 'Computer Engineer Student','IT support learner','Networking learner','Java Programming learner'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/* const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name')?.toString().trim() || '';
        const email = formData.get('email')?.toString().trim() || '';
        const phone = formData.get('phone')?.toString().trim() || '';
        const subject = formData.get('subject')?.toString().trim() || 'Nouveau message';
        const message = formData.get('message')?.toString().trim() || '';
        const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0ATéléphone: ${phone}%0D%0ASujet: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        const gmailURL =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=franckwatkakule@gmail.com` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, "_blank");

        contactForm.reset();
      });
    }  

/*const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const body = `
Nom : ${name}

Email : ${email}

Téléphone : ${phone}

Message :
${message}
        `;

        const gmailURL =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=franckwatkakule@gmail.com` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, "_blank");

        contactForm.reset();
    });
}    */



  /*  const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name')?.toString().trim() || '';
        const email = formData.get('email')?.toString().trim() || '';
        const phone = formData.get('phone')?.toString().trim() || '';
        const subject = formData.get('subject')?.toString().trim() || 'Nouveau message';
        const message = formData.get('message')?.toString().trim() || '';
        const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0ATéléphone: ${phone}%0D%0ASujet: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:franckwatkakule@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        contactForm.reset(); 
      });
} */
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const phone = document.getElementById("phone")?.value.trim() || "";
        const subject = document.getElementById("subject")?.value.trim() || "Message de contact";
        const message = document.getElementById("message")?.value.trim() || "";

        const body =
`Full Name: ${fullname}

Email: ${email}

Phone Number: ${phone}

Message:
${message}`;

        const gmailLink =
`https://mail.google.com/mail/?view=cm&fs=1&to=franckwatkakule@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, "_blank");
        form.reset();
    });
}

