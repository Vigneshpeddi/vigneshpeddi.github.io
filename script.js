const projects = [
    {
        name: "Comp Bio LLM",
        description: "A fine-tuned large language model to answer conceptual computational biology questions",
        github: "https://github.com/Vigneshpeddi/comp-bio-llm",
        live: "",
        image: ""
    },
    {
        name: "Banking Ledger App",
        description: "A full-stack banking application with double-entry bookkeeping ledger database",
        github: "https://github.com/Vigneshpeddi/banking-ledger-app",
        live: "",
        image: ""
    },
    {
        name: "KVStore",
        description: "A distributed C++ bucket-based key-value store with mutex synchronization, sharding, multiget/multiput support, and dynamic shardcontroller",
        github: "https://github.com/Vigneshpeddi/kvstore",
        live: "",
        image: ""
    },
    {
        name: "Medbot",
        description: "A medical chatbot designed to provide healthcare information using AI technology",
        github: "https://github.com/Vigneshpeddi/medbot",
        live: "",
        image: ""
    },
    {
        name: "Python Derivative Pricing",
        description: "a Python implementation of European derivative pricing algorithms",
        github: "https://github.com/Vigneshpeddi/python-derivative-pricing",
        live: "",
        image: ""
    },
    {
        name: "R Sleep Data Analysis",
        description: "a statistical analysis of sleep data using R to explore patterns and correlations in sleep behavior",
        github: "https://github.com/Vigneshpeddi/r-sleep-data-analysis",
        live: "",
        image: ""
    }
];

function createProjectCard(project) {
    const liveDemoLink = project.live ? `<a href="${project.live}" target="_blank">live demo</a>` : '';
    
    return `
        <div class="project-card">
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${liveDemoLink}
                    <a href="${project.github}" target="_blank">github</a>
                </div>
            </div>
        </div>
    `;
}

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        projectsGrid.innerHTML += createProjectCard(project);
    });
}

function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
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
}

function init() {
    loadProjects();
    smoothScroll();
}

document.addEventListener('DOMContentLoaded', init); 