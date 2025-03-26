document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && ["+", "-", "0"].includes(event.key)) {
        event.preventDefault();
    }
});

document.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
}); 

document.addEventListener("touchmove", function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 80,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 200}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 100}); 



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const recipientEmail = 'vishalsubhashchavan2004@gmail.com';

    const mailtoLink = `mailto:${recipientEmail}?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;

    document.getElementById('contactForm').reset();
});

document.addEventListener("DOMContentLoaded", async function () {
    const homeImg = document.querySelector(".home__img");

    if (homeImg) {
        let isBrave = false;

        if (navigator.brave) {
            isBrave = await navigator.brave.isBrave();
        } else if (navigator.userAgent.includes("Brave")) {
            isBrave = true;
        }

        if (window.innerWidth <= 768) {
            if (isBrave) {
                homeImg.style.top = "50vh"; 
            } else if (navigator.userAgent.toLowerCase().includes("chrome")) {
                homeImg.style.top = "40vh"; 
            }
        }
    }
});

