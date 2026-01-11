// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

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
            // Close mobile menu after clicking
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-electric-blue');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-electric-blue');
        }
    });
});

// Intersection Observer for fade-in animations
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

// Observe project cards for animation
document.querySelectorAll('.hover-glow').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Fetch GitHub repositories
const username = 'villas-clarence'; // GitHub username
const projectsContainer = document.getElementById('github-projects');

async function fetchProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        projectsContainer.innerHTML = ''; // Clear the "Loading..." message
        
        if (repos.length === 0) {
            projectsContainer.innerHTML = '<p class="text-gray-400 text-center col-span-full">No repositories found.</p>';
            return;
        }
        
        repos.forEach(repo => {
            // Create card for each project
            const projectCard = `
                <div class="bg-dark-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-electric-blue/20 hover-glow">
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
                            <i class="fas fa-code-branch text-emerald text-xl"></i>
                        </div>
                        ${repo.language ? `<span class="px-3 py-1 bg-dark-lighter text-electric-blue text-xs rounded-full font-semibold uppercase">${repo.language}</span>` : '<span class="px-3 py-1 bg-dark-lighter text-gray-500 text-xs rounded-full font-semibold uppercase">Plain Text</span>'}
                    </div>
                    
                    <h3 class="text-xl font-bold text-electric-blue mb-3 capitalize">
                        ${repo.name.replace(/-/g, ' ')}
                    </h3>
                    
                    <p class="text-gray-400 text-sm mb-4 min-h-[40px]">
                        ${repo.description || 'No description provided.'}
                    </p>
                    
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span class="flex items-center">
                            <i class="fas fa-star text-yellow-500 mr-1"></i>
                            ${repo.stargazers_count}
                        </span>
                        <span class="flex items-center">
                            <i class="fas fa-code-branch mr-1"></i>
                            ${repo.forks_count}
                        </span>
                        <span class="flex items-center text-xs">
                            <i class="fas fa-circle mr-1 ${repo.visibility === 'public' ? 'text-emerald' : 'text-gray-500'}"></i>
                            ${repo.visibility || 'public'}
                        </span>
                    </div>
                    
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center bg-electric-blue hover:bg-electric-blue/90 text-dark-bg text-sm py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                        View Repo <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                    </a>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
        
        // Apply fade-in animation to new cards
        document.querySelectorAll('#github-projects .hover-glow').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
        
    } catch (error) {
        projectsContainer.innerHTML = '<p class="text-red-500 col-span-full text-center">Failed to load projects. Please check your username.</p>';
        console.error("Error fetching projects:", error);
    }
}

// Initialize GitHub projects on page load
fetchProjects();
