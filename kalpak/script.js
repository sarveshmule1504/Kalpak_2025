// ========================================
// DIAGNOSTIC VERSION - WITH DETAILED LOGGING
// ========================================

console.log('%c🔍 DIAGNOSTIC MODE ENABLED', 'font-size: 16px; font-weight: bold; color: #ff6b6b;');
console.log('%cThis version has detailed logging to help debug issues', 'font-size: 12px; color: #666;');

// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM Loaded');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            });
        });
    }
});

// ========================================
// REGISTRATION FORM SUBMISSION
// ========================================
const registrationForm = document.getElementById('registrationForm');
console.log('Registration form element:', registrationForm ? '✅ Found' : '❌ Not found');

if (registrationForm) {
    registrationForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('%c📝 FORM SUBMISSION STARTED', 'font-size: 14px; font-weight: bold; color: #4CAF50;');

        // Show loading state
        const submitButton = this.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        // Get form data with detailed logging
        console.log('📊 Collecting form data...');
        
        const formData = {
            event: document.getElementById('event').value,
            team_leader: document.getElementById('teamLeader').value,
            team_members: document.getElementById('teamMembers').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            className: document.getElementById('className').value,
            rollno: document.getElementById('rollno').value,
            department: document.getElementById('department').value,
            payment_screenshot: document.getElementById('paymentScreenshot').value || '',
            transaction_id: document.getElementById('transactionId').value,
            transaction_status: document.getElementById('transactionStatus').value
        };

        console.log('%c📦 Form Data Collected:', 'font-weight: bold; color: #2196F3;');
        console.table(formData);
        
        // Validate all required fields
        const requiredFields = ['event', 'team_leader', 'team_members', 'email', 'phone', 'className', 'rollno', 'department', 'transaction_id', 'transaction_status'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
            console.error('❌ Missing required fields:', missingFields);
            alert('Please fill all required fields: ' + missingFields.join(', '));
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            return;
        }
        
        console.log('✅ All required fields present');

        // Google Apps Script URL
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw3npAjaRg8hPbBA3Z5O-y1nmYileSh9UaB6-o1qUxelpiP9z1pW2eY1VL3DP4w6F9W/exec';
        console.log('🌐 Google Apps Script URL:', SCRIPT_URL);

        try {
            console.log('%c🚀 Sending data to Google Sheets...', 'font-weight: bold; color: #FF9800;');
            console.log('Request method: POST');
            console.log('Request mode: no-cors');
            console.log('Content-Type: application/json');
            console.log('Body:', JSON.stringify(formData, null, 2));
            
            const startTime = Date.now();
            
            // Send data to Google Apps Script
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const endTime = Date.now();
            const duration = endTime - startTime;
            
            console.log('%c✅ REQUEST SENT SUCCESSFULLY', 'font-size: 14px; font-weight: bold; color: #4CAF50;');
            console.log(`⏱️ Request took ${duration}ms`);
            console.log('📊 Response (no-cors mode - cannot read):', response);
            console.log('%c⚠️ Note: With no-cors mode, we cannot verify if data was saved. Check your Google Sheet!', 'color: #FF9800;');
            
            // Hide form and show success message
            registrationForm.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            
            // Scroll to success message
            document.getElementById('successMessage').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            console.log('%c🎉 SUCCESS MESSAGE DISPLAYED', 'font-size: 14px; font-weight: bold; color: #4CAF50;');
            console.log('%c📋 NOW CHECK YOUR GOOGLE SHEET!', 'font-size: 16px; font-weight: bold; color: #2196F3; background: #E3F2FD; padding: 10px;');

        } catch (error) {
            console.error('%c❌ ERROR OCCURRED', 'font-size: 14px; font-weight: bold; color: #f44336;');
            console.error('Error type:', error.name);
            console.error('Error message:', error.message);
            console.error('Full error:', error);
            
            // Show error message
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorText').textContent = 
                'Error: ' + error.message + '. Please check console (F12) for details.';
            
            // Scroll to error message
            document.getElementById('errorMessage').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
} else {
    console.error('❌ CRITICAL: Registration form not found! Check HTML.');
}

// Function to hide error message
function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const contactEmail = document.getElementById('contactEmail').value;
        const contactPhone = document.getElementById('contactPhone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        console.log('Contact Form Data:', {
            fullName,
            contactEmail,
            contactPhone,
            subject,
            message
        });

        contactForm.style.display = 'none';
        document.getElementById('contactSuccessMessage').style.display = 'block';
        
        document.getElementById('contactSuccessMessage').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    });
}

function resetContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('contactSuccessMessage');
    
    if (contactForm && successMessage) {
        contactForm.reset();
        contactForm.style.display = 'flex';
        successMessage.style.display = 'none';
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
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

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll(
        '.feature-card, .event-card, .value-card, .leader-card, .reason-card'
    );
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ========================================
// FORM VALIDATION HELPERS
// ========================================
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
});

const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailPattern.test(this.value)) {
            this.style.borderColor = 'var(--secondary-color)';
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-text')) {
                const errorText = document.createElement('small');
                errorText.textContent = 'Please enter a valid email address';
                errorText.style.color = 'var(--secondary-color)';
                errorText.classList.add('error-text');
                this.parentNode.insertBefore(errorText, this.nextSibling);
            }
        } else {
            this.style.borderColor = '';
            const errorText = this.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.setAttribute('id', 'backToTop');
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});

// ========================================
// PREVENT DOUBLE FORM SUBMISSION
// ========================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function() {
        const submitButton = this.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            setTimeout(() => {
                submitButton.disabled = false;
            }, 3000);
        }
    });
});

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c🎉 Welcome to KALPAK 2024! 🎉', 
    'font-size: 20px; font-weight: bold; color: #6C63FF;');
console.log('%cShree Siddheshwar Women\'s College of Engineering', 
    'font-size: 14px; color: #666;');
console.log('%cCelebrating Technology, Innovation, and Excellence', 
    'font-size: 12px; color: #999;');
console.log('%c\n📊 DIAGNOSTIC MODE: Check console for detailed logs when submitting form', 
    'font-size: 13px; font-weight: bold; color: #ff6b6b; background: #ffe6e6; padding: 10px;');