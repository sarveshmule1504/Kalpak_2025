// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
});

// Registration Form Handling
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    // Get event from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventParam = urlParams.get('event');
    const eventSelect = document.getElementById('eventSelect');
    
    if (eventParam && eventSelect) {
        eventSelect.value = eventParam;
        handleEventSelection(eventParam);
    }

    // Event selection handler
    eventSelect.addEventListener('change', function() {
        handleEventSelection(this.value);
    });

    // Form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            leaderName: document.getElementById('leaderName').value,
            leaderEmail: document.getElementById('leaderEmail').value,
            leaderContact: document.getElementById('leaderContact').value,
            leaderClass: document.getElementById('leaderClass').value,
            leaderRoll: document.getElementById('leaderRoll').value,
            department: document.getElementById('department').value,
            event: document.getElementById('eventSelect').value,
            transactionId: document.getElementById('transactionId').value,
            timestamp: new Date().toISOString()
        };

        // Add team members if not ByteBrawl
        if (formData.event !== 'ByteBrawl') {
            formData.member1 = document.getElementById('member1').value;
            formData.member2 = document.getElementById('member2').value;
            formData.member3 = document.getElementById('member3').value;
        }

        // Validate team members for non-ByteBrawl events
        if (formData.event !== 'ByteBrawl') {
            if (!formData.member1 || !formData.member2 || !formData.member3) {
                alert('Please enter all team members (4 students required)');
                return;
            }
        }

        // Store in localStorage (simulating database)
        storeRegistration(formData);

        // Show success message
        document.querySelector('.registration-form').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';

        // Send confirmation email (simulated)
        console.log('Registration Data:', formData);
    });
}

// Handle event selection for team members
function handleEventSelection(event) {
    const teamMembersSection = document.getElementById('teamMembersSection');
    const teamNote = document.getElementById('teamNote');
    const member1 = document.getElementById('member1');
    const member2 = document.getElementById('member2');
    const member3 = document.getElementById('member3');

    if (event === 'ByteBrawl') {
        teamMembersSection.style.display = 'none';
        teamNote.style.display = 'block';
        member1.removeAttribute('required');
        member2.removeAttribute('required');
        member3.removeAttribute('required');
    } else {
        teamMembersSection.style.display = 'block';
        teamNote.style.display = 'none';
        member1.setAttribute('required', 'required');
        member2.setAttribute('required', 'required');
        member3.setAttribute('required', 'required');
    }
}

// Store registration data in localStorage
function storeRegistration(data) {
    let registrations = JSON.parse(localStorage.getItem('kalpakRegistrations')) || [];
    registrations.push(data);
    localStorage.setItem('kalpakRegistrations', JSON.stringify(registrations));
}

// Get all registrations (for admin purposes)
function getAllRegistrations() {
    return JSON.parse(localStorage.getItem('kalpakRegistrations')) || [];
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const contactData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Store in localStorage (simulating database)
        storeContactMessage(contactData);

        // Show success message
        contactForm.style.display = 'none';
        document.getElementById('contactSuccessMessage').style.display = 'block';

        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            document.getElementById('contactSuccessMessage').style.display = 'none';
        }, 3000);

        console.log('Contact Message:', contactData);
    });
}

// Store contact message in localStorage
function storeContactMessage(data) {
    let messages = JSON.parse(localStorage.getItem('kalpakContactMessages')) || [];
    messages.push(data);
    localStorage.setItem('kalpakContactMessages', JSON.stringify(messages));
}

// Get all contact messages (for admin purposes)
function getAllContactMessages() {
    return JSON.parse(localStorage.getItem('kalpakContactMessages')) || [];
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.event-card, .leader-card, .value-card, .mission-point').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Phone number validation
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
});

// Email validation
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailPattern.test(this.value)) {
            this.setCustomValidity('Please enter a valid email address');
            this.reportValidity();
        } else {
            this.setCustomValidity('');
        }
    });
});

// Add loading animation to buttons
const buttons = document.querySelectorAll('.submit-btn, .register-btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.tagName === 'BUTTON') {
            this.innerHTML = '<span>Processing...</span>';
            this.disabled = true;
        }
    });
});

// Prevent form resubmission on page reload
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Console info for developers
console.log('%c🎓 Kalpak 2024 - Technical Festival', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped for Shree Siddheshwar Women\'s College of Engineering', 'color: #7c3aed; font-size: 14px;');
console.log('%cTo view registrations: getAllRegistrations()', 'color: #10b981; font-size: 12px;');
console.log('%cTo view contact messages: getAllContactMessages()', 'color: #10b981; font-size: 12px;');

// Admin functions exposed to console
window.kalpakAdmin = {
    getRegistrations: getAllRegistrations,
    getContactMessages: getAllContactMessages,
    clearRegistrations: function() {
        localStorage.removeItem('kalpakRegistrations');
        console.log('All registrations cleared');
    },
    clearMessages: function() {
        localStorage.removeItem('kalpakContactMessages');
        console.log('All contact messages cleared');
    },
    exportRegistrations: function() {
        const data = getAllRegistrations();
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'kalpak-registrations.json';
        a.click();
        console.log('Registrations exported');
    },
    exportMessages: function() {
        const data = getAllContactMessages();
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'kalpak-contact-messages.json';
        a.click();
        console.log('Contact messages exported');
    }
};

console.log('%cAdmin functions available via window.kalpakAdmin', 'color: #f59e0b; font-size: 12px;');
console.log('%cExample: kalpakAdmin.getRegistrations()', 'color: #f59e0b; font-size: 12px;');
