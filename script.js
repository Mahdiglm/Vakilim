// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Form handling
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                field.style.borderColor = '#e1e5e9';
            }
        });
        
        if (isValid) {
            // Show success message
            showNotification('درخواست شما با موفقیت ارسال شد. در اسرع وقت با شما تماس خواهیم گرفت.', 'success');
            this.reset();
        } else {
            showNotification('لطفاً تمام فیلدهای ضروری را پر کنید.', 'error');
        }
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email && isValidEmail(email)) {
            showNotification('عضویت شما در خبرنامه با موفقیت انجام شد.', 'success');
            this.reset();
        } else {
            showNotification('لطفاً یک ایمیل معتبر وارد کنید.', 'error');
        }
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        right: 20px;
        max-width: 400px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        font-family: 'Vazirmatn', sans-serif;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(-100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(-100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .lawyer-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.stat h3');
                stats.forEach(stat => {
                    const value = parseInt(stat.textContent);
                    animateCounter(stat, value);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(aboutSection);
}

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 1.2rem;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Lawyer card click to show details
document.querySelectorAll('.lawyer-card').forEach(card => {
    card.addEventListener('click', function() {
        const lawyerName = this.querySelector('h3').textContent;
        const specialty = this.querySelector('.lawyer-specialty').textContent;
        const experience = this.querySelector('.lawyer-experience').textContent;
        
        showNotification(`وکیل ${lawyerName} - ${specialty} - ${experience}`, 'info');
    });
});

// Contact form field validation
document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach(field => {
    field.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#e1e5e9';
        }
    });
    
    field.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '#667eea';
        }
    });
});

// Initialize tooltips for social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const platform = this.querySelector('i').className.includes('telegram') ? 'تلگرام' :
                        this.querySelector('i').className.includes('instagram') ? 'اینستاگرام' : 'لینکدین';
        
        this.setAttribute('title', `ما را در ${platform} دنبال کنید`);
    });
});

// Hero Chatbot functionality
const consultationBtn = document.getElementById('consultationBtn');
const contactBtn = document.getElementById('contactBtn');
const heroChatbot = document.getElementById('heroChatbot');
const closeHeroChatbot = document.getElementById('closeHeroChatbot');
const heroChatInput = document.getElementById('heroChatInput');
const heroSendMessage = document.getElementById('heroSendMessage');
const heroChatbotMessages = document.getElementById('heroChatbotMessages');

// Hero elements for transition
const heroContainer = document.getElementById('heroContainer');
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroButtons = document.getElementById('heroButtons');
const heroCard = document.getElementById('heroCard');

// Chatbot responses
const botResponses = {
    'سلام': 'سلام! چطور می‌تونم کمکتون کنم؟',
    'مشاوره': 'بله، من آماده ارائه مشاوره حقوقی هستم. لطفاً مشکل خود را توضیح دهید.',
    'قیمت': 'هزینه مشاوره بسته به نوع مشکل متفاوت است. برای اطلاعات دقیق با ما تماس بگیرید.',
    'وکیل': 'ما تیم متخصصی از وکلای مجرب داریم. می‌خواهید با کدام وکیل صحبت کنید؟',
    'قرارداد': 'برای مشاوره در مورد قراردادها، لطفاً جزئیات بیشتری ارائه دهید.',
    'طلاق': 'در مورد طلاق، ما می‌توانیم راهنمایی‌های لازم را ارائه دهیم.',
    'املاک': 'برای مشاوره املاک، لطفاً نوع مشکل خود را مشخص کنید.',
    'کیفری': 'در پرونده‌های کیفری، ما از حقوق شما دفاع می‌کنیم.',
    'تجاری': 'برای مشاوره تجاری، لطفاً نوع کسب و کار خود را توضیح دهید.'
};

// Default responses
const defaultResponses = [
    'متوجه نشدم. لطفاً سوال خود را واضح‌تر مطرح کنید.',
    'برای اطلاعات دقیق‌تر، لطفاً با مشاوران ما تماس بگیرید.',
    'این موضوع نیاز به بررسی دقیق‌تری دارد. پیشنهاد می‌کنم با وکیل متخصص مشورت کنید.',
    'برای حل این مشکل، لطفاً با دفتر ما تماس بگیرید.'
];

// Open hero chatbot with transition
consultationBtn.addEventListener('click', () => {
    // Start hero transition animations
    heroContainer.classList.add('transitioning');
    
    // Wait for hero elements to animate out
    setTimeout(() => {
        // Show hero chatbot
        heroChatbot.classList.add('active');
        
        // Add entrance animation for chatbot elements
        setTimeout(() => {
            const welcomeSection = document.querySelector('.chatbot-welcome');
            if (welcomeSection) {
                welcomeSection.style.animation = 'fadeInUp 1s ease-out 0.5s both';
            }
        }, 100);
        
    }, 800); // Wait for hero transition to complete
});

// Close hero chatbot
closeHeroChatbot.addEventListener('click', () => {
    heroChatbot.classList.remove('active');
    
    // Reset hero container
    setTimeout(() => {
        heroContainer.classList.remove('transitioning');
        
        // Reset hero animations
        heroTitle.style.animation = 'none';
        heroSubtitle.style.animation = 'none';
        heroButtons.style.animation = 'none';
        heroCard.style.animation = 'none';
        
        // Force reflow
        heroTitle.offsetHeight;
        heroSubtitle.offsetHeight;
        heroButtons.offsetHeight;
        heroCard.offsetHeight;
        
        // Restore original animations
        heroTitle.style.animation = '';
        heroSubtitle.style.animation = '';
        heroButtons.style.animation = '';
        heroCard.style.animation = '';
    }, 300);
});

// Close chatbot when clicking outside (but not on interface elements)
document.addEventListener('click', (e) => {
    if (e.target === heroChatbot && !e.target.closest('.chatbot-interface')) {
        heroChatbot.classList.remove('active');
    }
});

// Send message function for hero chatbot
function sendHeroUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">${message}</div>
        <div class="message-time">الان</div>
    `;
    heroChatbotMessages.appendChild(messageDiv);
    heroChatbotMessages.scrollTop = heroChatbotMessages.scrollHeight;
    
    // Simulate bot response with typing indicator
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';
        botMessageDiv.innerHTML = `
            <div class="message-content">${botResponse}</div>
            <div class="message-time">الان</div>
        `;
        heroChatbotMessages.appendChild(botMessageDiv);
        heroChatbotMessages.scrollTop = heroChatbotMessages.scrollHeight;
    }, 1000);
}

// Get bot response
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
        if (message.includes(key.toLowerCase())) {
            return response;
        }
    }
    
    // Return random default response
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Send message on button click for hero chatbot
heroSendMessage.addEventListener('click', () => {
    const message = heroChatInput.value.trim();
    if (message) {
        sendHeroUserMessage(message);
        heroChatInput.value = '';
    }
});

// Send message on Enter key for hero chatbot
heroChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = heroChatInput.value.trim();
        if (message) {
            sendHeroUserMessage(message);
            heroChatInput.value = '';
        }
    }
});

// Contact button functionality (placeholder)
contactBtn.addEventListener('click', () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Enhanced button click effects
document.querySelectorAll('.hero-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create enhanced ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: enhancedRipple 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    });
});

// Add enhanced ripple animation
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes enhancedRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(enhancedStyle);

console.log('وکیل بان - وب‌سایت خدمات حقوقی با قابلیت چت‌بات آماده است!'); 