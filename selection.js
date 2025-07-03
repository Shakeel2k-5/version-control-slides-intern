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
    }
    // ... other categories would be added here
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
    
    const icon = '📋'; // Default icon
    
    item.innerHTML = `
        <h4>${icon} ${subcategoryName}</h4>
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