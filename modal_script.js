
// ===== MODAL LOGIC =====
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.querySelector('.modal-body');

// Data for projects
const projectData = {
    'thesis': {
        title: 'Secure Cloud & Kubernetes Architecture',
        subtitle: "Master's Thesis Project",
        description: 'A comprehensive implementation of cloud security best practices covering AWS infrastructure hardening with Terraform, Kubernetes (EKS) security using RBAC and Network Policies, and secure application development with Python and Angular.',
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
                    <li><strong>Fake Catalogue Generation:</strong> Tools to generate and manage fake catalogue items for testing and development (`make create_fake_catalogue_items`).</li>
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
