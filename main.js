// Initialize WOW.js
new WOW().init({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function(box) {
        console.log("WOW element revealed:", box);
    }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    offset: 100,
    once: true
});

// Navigation scroll effect
const nav = document.querySelector('.nav-floating');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateX(-50%)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        nav.style.transform = 'translate(-50%, -100%)';
    } else {
        nav.style.transform = 'translateX(-50%)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Text animation for hero section
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    const text = glitchText.textContent;
    glitchText.setAttribute('data-text', text);
}

// Typing animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}

// Work section filter and animation
const workItems = document.querySelectorAll('.work-item');
const workFilterButtons = document.querySelectorAll('.filter-btn');

workFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        workFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        workItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || filter === category) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.pointerEvents = 'auto';
            } else {
                item.style.opacity = '0.3';
                item.style.transform = 'scale(0.9)';
                item.style.pointerEvents = 'none';
            }
        });
    });
});

// Intersection Observer for scroll animations
const scrollObserverOptions = {
    threshold: 0.2
};

const workObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            workObserver.unobserve(entry.target);
        }
    });
}, scrollObserverOptions);

workItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    workObserver.observe(item);
});

// Contact form animation and validation
const form = document.querySelector('.contact-form');
const formFields = document.querySelectorAll('.form-field input, .form-field textarea');

formFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', () => {
        if (field.value === '') {
            field.parentElement.classList.remove('focused');
        }
    });
});

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                form.reset();
                
                formFields.forEach(field => {
                    field.parentElement.classList.remove('focused');
                });
            }, 2000);
        }, 1500);
    });
}

// Social links hover animation
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    const text = link.querySelector('span');
    if (text) {
        const originalText = text.textContent;
        
        link.addEventListener('mouseenter', () => {
            text.style.width = text.scrollWidth + 'px';
        });
        
        link.addEventListener('mouseleave', () => {
            text.style.width = '0';
        });
    }
});

// Parallax effect for hero section
const heroParticles = document.querySelector('.hero-particles');

if (heroParticles) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        heroParticles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}

// Add animation to tech stack items on hover
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.05)';
        item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = 'none';
    });
});

// Add sparkle effect to headings
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
        heading.classList.add('sparkle');
    });
    
    heading.addEventListener('mouseleave', () => {
        heading.classList.remove('sparkle');
    });
});

// Add floating animation to cards
const cards = document.querySelectorAll('.work-item, .tech-item, .interest-card');
cards.forEach(card => {
    card.classList.add('floating');
});

// Add gradient text effect to section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    title.classList.add('gradient-text');
});

// Add pulse animation to social links
const pulseLinks = document.querySelectorAll('.social-link.pulse');
pulseLinks.forEach(link => {
    link.classList.add('pulse');
});

// Add wave animation to hero text
const heroText = document.querySelector('.hero-text-animation');
if (heroText) {
    heroText.classList.add('wave');
}

// Add heartbeat animation to logo
const logo = document.querySelector('.logo-animation');
if (logo) {
    logo.classList.add('heartbeat');
}

// Add rotate animation to tech stack icons
const techIcons = document.querySelectorAll('.tech-item i');
techIcons.forEach(icon => {
    icon.classList.add('rotate');
}); 