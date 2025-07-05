// Initialize Supabase
const SUPABASE_URL = "https://jihcsguhtuemypsovbdd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaGNzZ3VodHVlbXlwc292YmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NTUwMjYsImV4cCI6MjA2NzAzMTAyNn0.YqPtRYDZ6aZoKYzJgW2PT8sUKmSEIV-gXRfzK2gtkrU";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Infrastructure data (simplified version)
const infrastructureData = {
    "Core Platform & Developer Infrastructure": {
        topics: {
            "Version Control": { icon: "📚" },
            "CI/CD Platforms": { icon: "🔄" },
            "Dev Environments (Cloud IDEs)": { icon: "☁️" },
            "Infrastructure-as-Code (IaC)": { icon: "🏗️" },
            "CLI Tools": { icon: "⌨️" },
            "API Access": { icon: "🔌" }
        }
    },
    "Build, Deployment, & Runtime Hosting": {
        topics: {
            "Static Site Hosting": { icon: "📄" },
            "Fullstack App Hosting": { icon: "🏢" },
            "Backend/Server Hosting": { icon: "🖥️" },
            "Container Hosting": { icon: "📦" },
            "Edge Function Hosting": { icon: "🌐" },
            "Serverless Functions": { icon: "⚡" }
        }
    },
    "Data & Backend Services": {
        topics: {
            "Database-as-a-Service (DBaaS)": { icon: "🗄️" },
            "Object/File Storage": { icon: "📁" },
            "Caching & Key-Value Stores": { icon: "⚡" },
            "Vector Databases": { icon: "🧠" },
            "GraphQL Backend Services": { icon: "🔗" }
        }
    },
    "Monitoring, Observability & DevOps": {
        topics: {
            "Logging & Log Management": { icon: "📋" },
            "Metrics & Analytics": { icon: "📊" },
            "Alerting & Uptime Monitoring": { icon: "🚨" },
            "Application Performance Monitoring (APM)": { icon: "🎯" }
        }
    },
    "Background Jobs & Workflows": {
        topics: {
            "Task Queues": { icon: "📋" },
            "Background Jobs": { icon: "🎭" },
            "Cron Scheduling": { icon: "⏰" },
            "Durable Workflows / Orchestration": { icon: "🔄" }
        }
    },
    "Networking & Security": {
        topics: {
            "CDN Services": { icon: "🌐" },
            "DNS Management": { icon: "🔗" },
            "Domain Provisioning": { icon: "🌍" },
            "Reverse Proxy / API Gateway": { icon: "🚪" },
            "DDoS Protection": { icon: "🛡️" },
            "SSL Certificate Auto-Provisioning": { icon: "🔒" },
            "Role-Based Access Control (RBAC)": { icon: "👤" }
        }
    },
    "Communication & Notifications": {
        topics: {
            "Email Delivery": { icon: "📧" },
            "SMS / Voice / WhatsApp APIs": { icon: "📱" },
            "Push Notifications": { icon: "🔔" }
        }
    },
    "Payments & Billing": {
        topics: {
            "Payment APIs": { icon: "💳" },
            "Subscription Management": { icon: "📅" },
            "Invoicing & Tax Calculation": { icon: "🧾" }
        }
    },
    "AI & Machine Learning": {
        topics: {
            "Model Hosting": { icon: "🤖" },
            "AI Inference API": { icon: "🧠" },
            "Embedding + Vector Search": { icon: "🔍" }
        }
    },
    "Data & Analytics": {
        topics: {
            "API Builders / No-Code Backends": { icon: "🔧" },
            "ETL Tools": { icon: "📊" },
            "Data Warehouses": { icon: "🏢" },
            "API Documentation Tools": { icon: "📚" },
            "Data Ownership / Export Tools": { icon: "📤" },
            "Self-Hosting Options": { icon: "🏠" }
        }
    },
    "Internal Tools & No-Code": {
        topics: {
            "Admin Panel Builders": { icon: "⚙️" },
            "Workflow Automation": { icon: "🔄" }
        }
    },
    "Product Analytics & Growth": {
        topics: {
            "Product Analytics": { icon: "📈" },
            "Heatmaps & Session Replay": { icon: "🎯" },
            "Feature Flags": { icon: "🚩" },
            "AB Testing": { icon: "🧪" },
            "User Feedback Tools": { icon: "💬" }
        }
    },
    "Compliance & Security": {
        topics: {
            "SOC 2 / ISO 27001 / HIPAA Compliance": { icon: "🛡️" },
            "GDPR Compliance Tools": { icon: "📋" }
        }
    }
};

// Subcategory descriptions
const subcategoryDescriptions = {
    // Technical subcategories
    "Version Control": "Manage code changes, track history, and collaborate with team members using Git-based systems.",
    "CI/CD Platforms": "Automate building, testing, and deploying applications with continuous integration and delivery pipelines.",
    "Dev Environments (Cloud IDEs)": "Cloud-based development environments that eliminate local setup and enable instant collaboration.",
    "Infrastructure-as-Code (IaC)": "Define and manage infrastructure using code instead of manual configuration processes.",
    "CLI Tools": "Command-line interface tools for developers to interact with services and automate workflows.",
    "API Access": "Programmatic interfaces to access and integrate with various services and platforms.",
    "Static Site Hosting": "Fast, secure hosting for static websites with global CDN distribution.",
    "Fullstack App Hosting": "Complete hosting solutions for full-stack applications with database and backend services.",
    "Backend/Server Hosting": "Dedicated hosting for backend services, APIs, and server applications.",
    "Container Hosting": "Platforms for deploying and managing containerized applications using Docker and Kubernetes.",
    "Edge Function Hosting": "Serverless functions that run at the edge for improved performance and reduced latency.",
    "Serverless Functions": "Event-driven, scalable functions that run without managing servers or infrastructure.",
    "Database-as-a-Service (DBaaS)": "Managed database services with automated backups, scaling, and maintenance.",
    "Object/File Storage": "Scalable cloud storage for files, images, videos, and other digital assets.",
    "Caching & Key-Value Stores": "High-performance data storage for caching frequently accessed information.",
    "Vector Databases": "Specialized databases for storing and querying vector embeddings used in AI applications.",
    "GraphQL Backend Services": "Flexible API layer that allows clients to request exactly the data they need.",
    "Logging & Log Management": "Centralized collection, storage, and analysis of application and system logs.",
    "Metrics & Analytics": "Monitoring and analyzing application performance, user behavior, and business metrics.",
    "Alerting & Uptime Monitoring": "Real-time monitoring and notifications for system health and availability.",
    "Application Performance Monitoring (APM)": "Tools to monitor and optimize application performance and user experience.",
    "Task Queues": "Asynchronous processing systems for handling background tasks and job queues.",
    "Background Jobs": "Scheduled and on-demand background processing for time-consuming operations.",
    "Cron Scheduling": "Automated task scheduling for recurring jobs and maintenance operations.",
    "Durable Workflows / Orchestration": "Reliable workflow management for complex, multi-step business processes.",
    "CDN Services": "Content delivery networks for fast, global distribution of static assets.",
    "DNS Management": "Domain name system management for routing traffic to your applications.",
    "Domain Provisioning": "Automated domain registration, configuration, and management services.",
    "Reverse Proxy / API Gateway": "Traffic management and routing for microservices and API endpoints.",
    "DDoS Protection": "Protection against distributed denial-of-service attacks and malicious traffic.",
    "SSL Certificate Auto-Provisioning": "Automatic SSL/TLS certificate management for secure HTTPS connections.",
    "Role-Based Access Control (RBAC)": "Granular permission systems for managing user access and security.",
    "Email Delivery": "Reliable email sending services with delivery tracking and analytics.",
    "SMS / Voice / WhatsApp APIs": "Communication APIs for sending SMS, voice calls, and WhatsApp messages.",
    "Push Notifications": "Real-time notification delivery to mobile and web applications.",
    "Payment APIs": "Secure payment processing and transaction management for e-commerce applications.",
    "Subscription Management": "Tools for managing recurring billing, subscriptions, and customer lifecycle.",
    "Invoicing & Tax Calculation": "Automated invoice generation and tax calculation for business transactions.",
    "Model Hosting": "Platforms for deploying and serving machine learning models in production.",
    "AI Inference API": "Ready-to-use AI services for common tasks like image recognition and text processing.",
    "Embedding + Vector Search": "AI-powered search capabilities using semantic understanding and vector similarity.",
    "API Builders / No-Code Backends": "Visual tools for creating APIs and backend services without coding.",
    "ETL Tools": "Data extraction, transformation, and loading tools for data pipeline management.",
    "Data Warehouses": "Centralized data storage and analytics platforms for business intelligence.",
    "API Documentation Tools": "Tools for creating, maintaining, and sharing API documentation.",
    "Data Ownership / Export Tools": "Tools for data portability, export, and compliance with data regulations.",
    "Self-Hosting Options": "Solutions for hosting applications on your own infrastructure with full control.",
    
    // Non-technical subcategories
    "Admin Panel Builders": "Visual tools for creating internal admin interfaces and dashboards without coding.",
    "Workflow Automation": "Tools to automate business processes and reduce manual repetitive tasks.",
    "Product Analytics": "Data-driven insights into user behavior, feature usage, and product performance.",
    "Heatmaps & Session Replay": "Visual tools to understand how users interact with your application.",
    "Feature Flags": "Safely deploy and test new features with the ability to rollback instantly.",
    "AB Testing": "Statistical testing to compare different versions and optimize user experience.",
    "User Feedback Tools": "Collect and manage user feedback, feature requests, and support tickets.",
    "SOC 2 / ISO 27001 / HIPAA Compliance": "Security compliance frameworks for enterprise and healthcare applications.",
    "GDPR Compliance Tools": "Tools to ensure compliance with European data protection regulations."
};

// Subcategory categorization
const techSubcategories = [
    "Version Control", "CI/CD Platforms", "Dev Environments (Cloud IDEs)", "Infrastructure-as-Code (IaC)", "CLI Tools", "API Access",
    "Static Site Hosting", "Fullstack App Hosting", "Backend/Server Hosting", "Container Hosting", "Edge Function Hosting", "Serverless Functions",
    "Database-as-a-Service (DBaaS)", "Object/File Storage", "Caching & Key-Value Stores", "Vector Databases", "GraphQL Backend Services",
    "Logging & Log Management", "Metrics & Analytics", "Alerting & Uptime Monitoring", "Application Performance Monitoring (APM)",
    "Task Queues", "Background Jobs", "Cron Scheduling", "Durable Workflows / Orchestration",
    "CDN Services", "DNS Management", "Domain Provisioning", "Reverse Proxy / API Gateway",
    "DDoS Protection", "SSL Certificate Auto-Provisioning", "Role-Based Access Control (RBAC)",
    "Email Delivery", "SMS / Voice / WhatsApp APIs", "Push Notifications",
    "Payment APIs", "Subscription Management", "Invoicing & Tax Calculation",
    "Model Hosting", "AI Inference API", "Embedding + Vector Search",
    "API Builders / No-Code Backends", "ETL Tools", "Data Warehouses",
    "API Documentation Tools", "Data Ownership / Export Tools", "Self-Hosting Options"
];

const nonTechSubcategories = [
    "Admin Panel Builders", "Workflow Automation",
    "Product Analytics", "Heatmaps & Session Replay", "Feature Flags", "AB Testing", "User Feedback Tools",
    "SOC 2 / ISO 27001 / HIPAA Compliance", "GDPR Compliance Tools"
];

// Selected subcategories
let selectedTechSubcategories = new Set();
let selectedNonTechSubcategories = new Set();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadSubcategorySelections();
    
    // Check if user has already made selections
    if (selectedTechSubcategories.size === 5 && selectedNonTechSubcategories.size === 5) {
        // User has already selected subcategories, redirect to content page
        window.location.href = 'content.html';
    } else {
        // User needs to select subcategories
        initializeSubcategorySelection();
    }
});

// Initialize subcategory selection
function initializeSubcategorySelection() {
    populateSubcategoryGrids();
    updateSelectionCounters();
    setupSubcategoryEventListeners();
}

// Load subcategory selections from localStorage
function loadSubcategorySelections() {
    const savedTech = localStorage.getItem('selectedTechSubcategories');
    const savedNonTech = localStorage.getItem('selectedNonTechSubcategories');
    
    if (savedTech) {
        selectedTechSubcategories = new Set(JSON.parse(savedTech));
    }
    if (savedNonTech) {
        selectedNonTechSubcategories = new Set(JSON.parse(savedNonTech));
    }
}

// Save subcategory selections to localStorage
function saveSubcategorySelections() {
    localStorage.setItem('selectedTechSubcategories', JSON.stringify([...selectedTechSubcategories]));
    localStorage.setItem('selectedNonTechSubcategories', JSON.stringify([...selectedNonTechSubcategories]));
}

// Populate the subcategory grids
function populateSubcategoryGrids() {
    const techGrid = document.getElementById('techSubcategories');
    const nonTechGrid = document.getElementById('nonTechSubcategories');
    
    // Populate tech subcategories
    techSubcategories.forEach(subcategory => {
        const item = createSubcategoryItem(subcategory, 'tech');
        techGrid.appendChild(item);
    });
    
    // Populate non-tech subcategories
    nonTechSubcategories.forEach(subcategory => {
        const item = createSubcategoryItem(subcategory, 'non-tech');
        nonTechGrid.appendChild(item);
    });
}

// Create a subcategory item element
function createSubcategoryItem(subcategoryName, type) {
    const item = document.createElement('div');
    item.className = 'subcategory-item';
    item.dataset.subcategory = subcategoryName;
    item.dataset.type = type;
    
    const description = subcategoryDescriptions[subcategoryName] || 'No description available.';
    
    // Find the icon for this subcategory
    let icon = '📋'; // Default icon
    Object.keys(infrastructureData).forEach(category => {
        if (infrastructureData[category].topics[subcategoryName]) {
            icon = infrastructureData[category].topics[subcategoryName].icon;
        }
    });
    
    item.innerHTML = `
        <h4><span class="subcategory-icon">${icon}</span> ${subcategoryName}</h4>
        <p class="subcategory-description">${description}</p>
    `;
    
    // Mark as selected if already selected
    if ((type === 'tech' && selectedTechSubcategories.has(subcategoryName)) ||
        (type === 'non-tech' && selectedNonTechSubcategories.has(subcategoryName))) {
        item.classList.add('selected');
    }
    
    return item;
}

// Setup event listeners for subcategory selection
function setupSubcategoryEventListeners() {
    // Subcategory item clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.subcategory-item')) {
            const item = e.target.closest('.subcategory-item');
            const subcategoryName = item.dataset.subcategory;
            const type = item.dataset.type;
            
            toggleSubcategorySelection(subcategoryName, type, item);
        }
    });
    
    // Start learning button
    document.getElementById('startLearning').addEventListener('click', async function() {
        if (selectedTechSubcategories.size === 5 && selectedNonTechSubcategories.size === 5) {
            // Get or create user_id
            let user_id = localStorage.getItem('user_id');
            if (!user_id) {
                user_id = crypto.randomUUID();
                localStorage.setItem('user_id', user_id);
            }
            // Prepare data
            const techTopics = Array.from(selectedTechSubcategories);
            const nonTechTopics = Array.from(selectedNonTechSubcategories);
            // Store in Supabase
            const { data, error } = await supabaseClient
                .from('user_selections')
                .insert([
                    {
                        user_id: user_id,
                        tech_topics: techTopics,
                        non_tech_topics: nonTechTopics
                    }
                ]);
            if (error) {
                alert('Error saving your selections: ' + error.message);
                return;
            }
            // Redirect to content page
            window.location.href = 'content.html';
        }
    });
    
    // Reset selection button
    document.getElementById('resetSelection').addEventListener('click', async function() {
        // Delete user record from Supabase
        let user_id = localStorage.getItem('user_id');
        if (user_id) {
            await supabaseClient.from('user_selections').delete().eq('user_id', user_id);
        }
        resetSubcategorySelection();
    });
}

// Toggle subcategory selection
function toggleSubcategorySelection(subcategoryName, type, item) {
    const maxSelections = 5;
    
    if (type === 'tech') {
        if (selectedTechSubcategories.has(subcategoryName)) {
            selectedTechSubcategories.delete(subcategoryName);
            item.classList.remove('selected');
        } else if (selectedTechSubcategories.size < maxSelections) {
            selectedTechSubcategories.add(subcategoryName);
            item.classList.add('selected');
        }
    } else {
        if (selectedNonTechSubcategories.has(subcategoryName)) {
            selectedNonTechSubcategories.delete(subcategoryName);
            item.classList.remove('selected');
        } else if (selectedNonTechSubcategories.size < maxSelections) {
            selectedNonTechSubcategories.add(subcategoryName);
            item.classList.add('selected');
        }
    }
    
    updateSelectionCounters();
    saveSubcategorySelections();
    updateStartButton();
}

// Update selection counters
function updateSelectionCounters() {
    document.getElementById('techSelected').textContent = selectedTechSubcategories.size;
    document.getElementById('nonTechSelected').textContent = selectedNonTechSubcategories.size;
    
    // Add visual feedback for max selections
    const techGrid = document.getElementById('techSubcategories');
    const nonTechGrid = document.getElementById('nonTechSubcategories');
    
    if (selectedTechSubcategories.size >= 5) {
        techGrid.classList.add('max-selected');
    } else {
        techGrid.classList.remove('max-selected');
    }
    
    if (selectedNonTechSubcategories.size >= 5) {
        nonTechGrid.classList.add('max-selected');
    } else {
        nonTechGrid.classList.remove('max-selected');
    }
}

// Update start button state
function updateStartButton() {
    const startButton = document.getElementById('startLearning');
    const isComplete = selectedTechSubcategories.size === 5 && selectedNonTechSubcategories.size === 5;
    startButton.disabled = !isComplete;
}

// Reset subcategory selection
function resetSubcategorySelection() {
    // Add visual feedback
    const resetButton = document.getElementById('resetSelection');
    const originalText = resetButton.textContent;
    resetButton.textContent = 'Resetting...';
    resetButton.disabled = true;
    
    // Clear selections
    selectedTechSubcategories.clear();
    selectedNonTechSubcategories.clear();
    
    // Remove progress as well
    localStorage.removeItem('infrastructureGuideProgress');
    
    // Remove selected class from all items
    document.querySelectorAll('.subcategory-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    updateSelectionCounters();
    updateStartButton();
    saveSubcategorySelections();
    
    // Restore button after a short delay
    setTimeout(() => {
        resetButton.textContent = originalText;
        resetButton.disabled = false;
    }, 500);
} 