
// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// ===== TYPING ANIMATION =====
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Cloud DevOps Engineer | Cloud Security Engineer | CISSP | SC-100',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // No deleting logic needed for single phrase single run
        return; 
    } else {
        if (typingText) {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Stop at end of phrase
        return;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
setTimeout(typeEffect, 1000);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMATED COUNTERS =====
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;

    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;

    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
        hasAnimated = true;

        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = Math.ceil(target / 100); 
            let current = 0;

            const updateCounter = () => {
                current += increment;
                
                // Ensure we don't get stuck at 0 if target is small
                if (current === 0 && target > 0) current = 1;

                if (current < target) {
                    stat.textContent = current + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ===== PARALLAX EFFECT FOR GRADIENT ORBS =====
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe education cards
document.querySelectorAll('.education-card').forEach(card => {
    observer.observe(card);
});

// Observe certification cards
document.querySelectorAll('.cert-card').forEach(card => {
    observer.observe(card);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// ===== CURSOR TRAIL EFFECT (OPTIONAL) =====
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });

    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';

    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
    
    // Check for counters on load in case already in view
    animateCounters();
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
});

// ===== THEME CUSTOMIZATION =====
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if(themeToggle) themeToggle.textContent = '☀️';
}

if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ===== SCROLL PROGRESS BAR =====
const scrollProgressBar = document.querySelector('.scroll-progress-bar');

window.addEventListener('scroll', () => {
    if(scrollProgressBar) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        scrollProgressBar.style.width = scrollPercent + '%';
    }
});

// ===== 3D TILT EFFECT =====
const tiltElements = document.querySelectorAll('.project-card, .cert-card, .timeline-content, .stat-item');

tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 5;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===== PARTICLE BACKGROUND =====
const canvas = document.getElementById('particles-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas && ctx) {
    let particlesArray;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // Draw particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color; // Use the color passed in constructor
            ctx.fill();
        }

        // Update particle position
        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            this.x += this.directionX;
            this.y += this.directionY;

            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = (canvas.height * canvas.width) / 9000;

        for (let i = 0; i < numberOfParticles; i++) {
            const size = (Math.random() * 3) + 1;
            const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            const directionX = (Math.random() * 2) - 1; // Speed
            const directionY = (Math.random() * 2) - 1;

            // Use CSS variable color if possible, or default
            const color = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#667eea';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connectParticles();
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                    + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    const color = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#667eea';
                    // Convert hex to rgba for opacity
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        initParticles();
    });

    // Initialize particles
    initParticles();
    animateParticles();

    // Update particle color on theme change
    const observerTheme = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                initParticles(); // Re-init to pick up new colors
            }
        });
    });

    observerTheme.observe(document.body, { attributes: true });
}

// ===== INITIALIZE =====
// Call functions that need to run on page load
updateActiveNavLink();
revealOnScroll();

// ===== MODAL LOGIC =====
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.querySelector('.modal-body');

// Data for projects
const projectData = {
    'thesis': {
        title: 'Secure Cloud & Kubernetes Architecture',
        subtitle: "Master's Thesis Project",
        description: 'A comprehensive implementation of cloud security best practices covering AWS infrastructure hardening with Terraform, Kubernetes (EKS) security using RBAC and Network Policies, and secure application development with Python and Angular. Featured DevSecOps pipelines, zero-trust principles, and continuous runtime security monitoring with Falco.',
        content: `
            <div class="modal-header">
                <h2 class="modal-title">Secure Cloud & Kubernetes Architecture</h2>
                <p class="modal-subtitle">Master's Thesis Project - AWS, Kubernetes, DevSecOps</p>
                <div class="modal-links" style="margin-top: 15px;">
                    <a href="https://github.com/Pjjp/Thesis" target="_blank" class="btn btn-primary" style="font-size: 0.9rem; padding: 8px 20px;">
                        <span style="margin-right: 8px;">📂</span> View on GitHub
                    </a>
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">Architecture Overview</h3>
                <p class="modal-text">
                    The project implements a highly secure, scalable architecture on AWS. The infrastructure is provisioned using Terraform (IaC) and follows the Zero Trust security model. Key components include a VPC with public/private subnets, an EKS cluster for container orchestration, and strict IAM policies.
                </p>
                <div class="modal-image-container">
                    <img src="assets/architecture-overview.png" alt="Architecture Overview Diagram" class="modal-image">
                </div>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Deployment & DevSecOps Pipeline</h3>
                <p class="modal-text">
                    The deployment pipeline integrates security checks at every stage. From code commit to production deployment, automated tools validate code quality, scan for vulnerabilities (SAST/DAST), and ensure container image security.
                </p>
                <div class="modal-image-container">
                    <img src="assets/deployment-overview.png" alt="Deployment Overview Diagram" class="modal-image">
                </div>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Key Security Implementations</h3>
                <ul class="modal-list">
                    <li><strong>Infrastructure Hardening:</strong> Terraform modules for secure VPC, IAM, and Security Groups configuration.</li>
                    <li><strong>Kubernetes Security:</strong> Implementation of RBAC, Network Policies to isolate pod communication, and Pod Security Standards.</li>
                    <li><strong>Runtime Security:</strong> Deployment of Falco for real-time threat detection within the cluster.</li>
                    <li><strong>Secure Application Development:</strong> Angular frontend and Python backend built with OWASP Top 10 mitigation strategies.</li>
                    <li><strong>Supply Chain Security:</strong> Container image scanning and dependency vulnerability checks.</li>
                </ul>
            </div>

            <div class="modal-tags">
                <span class="tag">AWS</span>
                <span class="tag">EKS</span>
                <span class="tag">Terraform</span>
                <span class="tag">Python</span>
                <span class="tag">Angular</span>
                <span class="tag">Falco</span>
                <span class="tag">DevSecOps</span>
            </div>
        `
    },
    'lakey': {
        title: 'Lakey-Service',
        subtitle: "Scalable Data Lake Access",
        description: 'A scalable data lake access service enabling thousands of clients to connect to expensive data lakes and download data to local machines.',
        content: `
            <div class="modal-header">
                <h2 class="modal-title">Lakey-Service</h2>
                <p class="modal-subtitle">Scalable Data Lake Access Service</p>
                <div class="modal-links" style="margin-top: 15px;">
                    <a href="https://github.com/Pjjp/lakey-service" target="_blank" class="btn btn-primary" style="font-size: 0.9rem; padding: 8px 20px;">
                        <span style="margin-right: 8px;">📂</span> View on GitHub
                    </a>
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">Project Overview</h3>
                <p class="modal-text">
                    Lakey-service is a HTTP/Websockets service designed to bridge the gap between local researchers and expensive PaaS data lakes. It allows for efficient, authorized data retrieval, enabling rapid prototyping without direct, costly connections for every user.
                </p>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Key Features & Architecture</h3>
                <ul class="modal-list">
                    <li><strong>Efficient Data Transfer:</strong> Utilizes Websockets and optimized HTTP flows for reliable data download.</li>
                    <li><strong>Catalogue Management:</strong> Integrated discovery system allowing users to browse available datasets (catalogue items).</li>
                    <li><strong>Auth Token Management:</strong> Secure handling of authentication tokens to manage "who is who" and control access permissions.</li>
                    <li><strong>Fake Catalogue Generation:</strong> Tools to generate and manage fake catalogue items for testing and development.</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Technical Stack</h3>
                <p class="modal-text">
                    Built primarily with Python and Jupyter Notebooks for research workflows. It employs a microservice-like architecture with distinct modules for Auth, Catalogue, and Downloading.
                </p>
            </div>

            <div class="modal-tags">
                <span class="tag">Python</span>
                <span class="tag">Jupyter</span>
                <span class="tag">Websockets</span>
                <span class="tag">HTTP</span>
                <span class="tag">Data Engineering</span>
            </div>
        `
    },
    'wiedza': {
        title: 'Wiedza i Zycie',
        subtitle: "Full-Stack Web Application",
        description: 'Full-stack web application featuring Python backend with advanced data scraping capabilities and machine learning integration.',
        content: `
            <div class="modal-header">
                <h2 class="modal-title">Wiedza i Zycie</h2>
                <p class="modal-subtitle">Full-Stack Web Application & ML Integration</p>
                <div class="modal-links" style="margin-top: 15px;">
                    <a href="https://github.com/Pjjp/wiedza-i-zycia" target="_blank" class="btn btn-primary" style="font-size: 0.9rem; padding: 8px 20px;">
                        <span style="margin-right: 8px;">📂</span> View on GitHub
                    </a>
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">Project Overview</h3>
                <p class="modal-text">
                    A comprehensive web platform that combines automated data gathering with machine learning analysis to provide insights. The project demonstrates a complete full-stack lifecycle from data acquisition to frontend visualization.
                </p>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Key Capabilities</h3>
                <ul class="modal-list">
                    <li><strong>Advanced Web Scraping:</strong> Python-based scrapers that autonomously gather data from targeted sources.</li>
                    <li><strong>Machine Learning Integration:</strong> Backend algorithms process the scraped data to identify trends, categorize content, or provide recommendations.</li>
                    <li><strong>Modern Frontend:</strong> Built with Angular and Ngrx for robust state management, ensuring a responsive and reactive user experience.</li>
                    <li><strong>Scalable Architecture:</strong> Designed with separation of concerns, allowing independent scaling of the scraping engine and the user-facing application.</li>
                </ul>
            </div>

            <div class="modal-tags">
                <span class="tag">Python</span>
                <span class="tag">Angular</span>
                <span class="tag">Ngrx</span>
                <span class="tag">Machine Learning</span>
                <span class="tag">Scraping</span>
            </div>
        `
    }
};

// Function to open modal
function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        modalBody.innerHTML = project.content;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Function to close modal
function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners
if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModalFunc();
    }
});

// Attach click events to "View Details" buttons
document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.project-link');
    
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            if (projectId) {
                openModal(projectId);
            }
        });
    });
});
