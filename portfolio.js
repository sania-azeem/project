 window.onscroll = function() {stickyNavbar()};

        const navbar = document.querySelector('.navbar');
        const sticky = navbar.offsetTop;

        function stickyNavbar() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }

        document.querySelectorAll('.navbar a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

    
        const animatedElements = document.querySelectorAll('.fade-in');
        window.addEventListener('scroll', function() {
            animatedElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 150) {
                    el.classList.add('visible');
                }
            });
        });


const portfolioItems = document.querySelectorAll('.portfolio-item img');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');


window.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.createElement('img');
    profileImage.src = 'sania.jpg';  
    profileImage.style.maxWidth = '100%';
    profileImage.style.borderRadius = '8px';

    modalContent.innerHTML = ''; 
    modalContent.appendChild(profileImage);  
    modal.style.display = 'flex';  
});


portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('src');
        const modalImage = document.createElement('img');
        modalImage.src = imageSrc;
        modalImage.style.maxWidth = '100%';
        modalImage.style.borderRadius = '8px';

        modalContent.innerHTML = '';  
        modalContent.appendChild(modalImage);  
        modal.style.display = 'flex'; 
    });
});


modal.addEventListener('click', function(e) {
    if (e.target === closeModal || e.target === modal) {
        modal.style.display = 'none'; 
    }
});

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = event.target.name.value;
            const email = event.target.email.value;
            const message = event.target.message.value;

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
               event.target.reset();
        });  