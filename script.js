// Maria's Coffee House - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Maria\'s Coffee House website loaded!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effect to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#FFE4B5';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#FFF8DC';
        });
    });
    
    // Welcome message
    console.log('Welcome to Maria\'s Coffee House - Doha');
    
    // Optional: Add animation on page load
    window.addEventListener('load', function() {
        const header = document.querySelector('header');
        header.style.animation = 'fadeIn 0.8s ease-in';
    });
});

// Add CSS animation via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);