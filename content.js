const infrastructureData = {
    "Core Platform & Developer Infrastructure": {
        description: "The foundational tools and platforms that enable development teams to build, collaborate, and manage code effectively.",
        topics: {
            "Version Control": {
                icon: "📚",
                analogy: "Think of it like 'Track Changes' for Code",
                description: "Just like you can see every edit and revision in a Word document, version control tracks every change made to your project's code with complete history and accountability.",
                benefits: ["Team collaboration without conflicts", "Complete change history", "Instant rollback capability", "Full accountability tracking"]
            },
            "CI/CD Platforms": {
                icon: "🔄",
                analogy: "Think of it like an Assembly Line for Software",
                description: "Automatically tests, builds, and deploys your code every time developers make changes - like a factory assembly line that quality-checks and packages your product automatically.",
                benefits: ["Faster, consistent releases", "Early bug detection", "Reduced deployment risk", "Increased developer efficiency"]
            },
            "Dev Environments (Cloud IDEs)": {
                icon: "☁️",
                analogy: "Think of it like Google Docs for Coding",
                description: "Development environments that run in your browser instead of on local computers. Just like Google Docs lets you write documents anywhere, Cloud IDEs let developers code from any device.",
                benefits: ["Instant setup for new team members", "Consistent development environment", "Work from anywhere capability", "Cost-efficient resource usage"]
            },
            "Infrastructure-as-Code (IaC)": {
                icon: "🏗️",
                analogy: "Think of it like Building Blueprints for Servers",
                description: "Define your entire server infrastructure using code files, just like architectural blueprints define a building. Recreate and manage infrastructure by changing text files.",
                benefits: ["Reproducible infrastructure", "Version-controlled changes", "Faster environment deployment", "Reduced configuration errors"]
            },
            "CLI Tools": {
                icon: "⌨️",
                analogy: "Think of it like Text Commands for Everything",
                description: "Tools that let developers interact with systems by typing commands instead of clicking buttons. Like having a direct conversation with your computer using text.",
                benefits: ["Automation-ready workflows", "Speed and efficiency", "Advanced system control", "Remote-friendly operations"]
            },
            "API Access": {
                icon: "🔌",
                analogy: "Think of it like Restaurant Menu Ordering",
                description: "APIs show what services are available and how to request them. Your app can 'order' data or services from other systems using standardized requests.",
                benefits: ["Seamless system integration", "Faster development cycles", "Real-time data access", "Scalable architecture foundation"]
            }
        }
    },
    "Build, Deployment, & Runtime Hosting": {
        description: "Services and platforms that handle how your applications are built, deployed, and run in production environments.",
        topics: {
            "Static Site Hosting": {
                icon: "📄",
                analogy: "Think of it like a Digital Brochure Stand",
                description: "Static sites show the same content to everyone. Hosting delivers these pre-built pages super fast because there's no complex processing needed for each visitor.",
                benefits: ["Lightning-fast page loads", "Very cost-effective", "Highly secure", "Simple deployment process"]
            },
            "Fullstack App Hosting": {
                icon: "🏢",
                analogy: "Think of it like a Complete Restaurant",
                description: "Runs both the 'front of house' (user interface) and 'kitchen' (backend processing) of your application in one integrated platform.",
                benefits: ["Complete integrated solution", "Simplified management", "Easy scaling capabilities", "Built-in essential services"]
            },
            "Backend/Server Hosting": {
                icon: "🖥️",
                analogy: "Think of it like a Restaurant Kitchen",
                description: "Runs the behind-the-scenes part of your application - processing data, handling business logic, and managing databases.",
                benefits: ["Full server control", "Enhanced data security", "API flexibility", "Performance optimization options"]
            },
            "Container Hosting": {
                icon: "📦",
                analogy: "Think of it like Shipping Containers for Code",
                description: "Packages your application with all dependencies into standardized 'containers' that run consistently anywhere, like shipping containers that are portable and stackable.",
                benefits: ["Environment consistency", "Easy deployment anywhere", "Resource efficiency", "Microservices ready"]
            },
            "Edge Function Hosting": {
                icon: "🌐",
                analogy: "Think of it like Local Express Delivery",
                description: "Runs code closer to your users - like having mini-computers in every city instead of one central server for faster response times.",
                benefits: ["Ultra-fast response times", "Global distribution", "Auto-scaling capabilities", "Pay-per-use pricing"]
            },
            "Serverless Functions": {
                icon: "⚡",
                analogy: "Think of it like On-Demand Room Service",
                description: "Like calling room service - you request a specific task, it gets done, and you only pay for what you use. No need to maintain a full kitchen (server).",
                benefits: ["Cost-efficient pay-per-use", "No server management", "Instant scaling", "Focus on business logic"]
            },
            "Cold Start Optimized Runtimes": {
                icon: "🚀",
                analogy: "Think of it like a Quick-Start Car Engine",
                description: "Optimized runtimes are like having a car that starts instantly in cold weather instead of taking time to warm up when functions wake up.",
                benefits: ["Faster first response", "Better user experience", "Predictable performance", "Ideal for real-time apps"]
            },
            "Warm Instance Support": {
                icon: "☕",
                analogy: "Think of it like Keeping the Coffee Pot Warm",
                description: "Keeps serverless functions 'ready to go' by maintaining active instances, like keeping a coffee pot warm so the first cup is always ready immediately.",
                benefits: ["Instant response times", "Consistent performance", "Business-critical reliability", "Balanced cost-performance"]
            },
            "Cron Job Hosting": {
                icon: "⏰",
                analogy: "Think of it like a Digital Alarm Clock",
                description: "Scheduled tasks that run automatically at specific times or intervals, like setting multiple alarms for different daily tasks.",
                benefits: ["Automated task scheduling", "Reliable execution", "Perfect for data processing", "Resource-efficient timing"]
            },
            "Background Worker Hosting": {
                icon: "🎭",
                analogy: "Think of it like a Backstage Crew",
                description: "Handles time-consuming tasks behind the scenes while users continue using your application, ensuring smooth operation without interrupting the main experience.",
                benefits: ["Better user experience", "Improved app performance", "Asynchronous processing", "Scalable architecture"]
            }
        }
    },
    "Data & Backend Services": {
        description: "Essential data storage, management, and backend service solutions that power modern applications.",
        topics: {
            "Database-as-a-Service (DBaaS)": {
                icon: "🗄️",
                analogy: "Think of it like a Managed Filing System",
                description: "A fully managed database service where the provider handles maintenance, backups, and scaling - like having a professional filing service manage your documents.",
                benefits: ["No database administration", "Automatic backups and scaling", "High availability guarantee", "Focus on application logic"]
            },
            "Object/File Storage": {
                icon: "📁",
                analogy: "Think of it like Unlimited Digital Storage Lockers",
                description: "Scalable cloud storage for files, images, videos, and documents that can grow infinitely and be accessed from anywhere globally.",
                benefits: ["Unlimited scalability", "Global accessibility", "Cost-effective storage", "Built-in redundancy"]
            },
            "Caching & Key-Value Stores": {
                icon: "⚡",
                analogy: "Think of it like Express Lane Memory",
                description: "Super-fast temporary storage that keeps frequently used data instantly accessible, like having an express lane for your most common purchases.",
                benefits: ["Lightning-fast data access", "Reduced database load", "Improved user experience", "Cost-efficient performance"]
            },
            "Vector Databases": {
                icon: "🧠",
                analogy: "Think of it like AI-Powered Memory",
                description: "Specialized databases that store and search data based on meaning and similarity rather than exact matches, perfect for AI and machine learning applications.",
                benefits: ["AI-native data storage", "Semantic search capabilities", "Machine learning integration", "Similarity-based queries"]
            },
            "GraphQL Backend Services": {
                icon: "🔗",
                analogy: "Think of it like a Smart Data Waiter",
                description: "A query language that lets your frontend request exactly the data it needs, like having a waiter who brings you exactly what you want from multiple kitchen stations.",
                benefits: ["Efficient data fetching", "Single API endpoint", "Flexible data queries", "Reduced over-fetching"]
            },
            "Search-as-a-Service": {
                icon: "🔍",
                analogy: "Think of it like Google for Your App",
                description: "Powerful search functionality that can understand context, handle typos, and provide relevant results across all your application's content.",
                benefits: ["Professional search experience", "Intelligent result ranking", "Typo tolerance", "Real-time search updates"]
            },
            "Authentication": {
                icon: "🔐",
                analogy: "Think of it like a Digital Bouncer",
                description: "Verifies who users are when they try to access your application, like a bouncer checking IDs at a club entrance.",
                benefits: ["Secure user verification", "Multiple login options", "Password management", "Industry-standard security"]
            },
            "Authorization": {
                icon: "🛡️",
                analogy: "Think of it like Access Control Cards",
                description: "Determines what authenticated users can access and do, like access cards that open different doors based on your clearance level.",
                benefits: ["Granular permission control", "Role-based access", "Security compliance", "Audit trail capability"]
            },
            "Realtime Pub/Sub & WebSockets": {
                icon: "📡",
                analogy: "Think of it like Live Broadcasting",
                description: "Enables instant, two-way communication between your application and users, like live TV broadcasting where information flows immediately to all viewers.",
                benefits: ["Instant real-time updates", "Live collaboration features", "Push notifications", "Interactive user experience"]
            }
        }
    },
    "Monitoring, Observability & DevOps": {
        description: "Tools and services that help you monitor, understand, and optimize your application's performance and health.",
        topics: {
            "Logging & Log Management": {
                icon: "📋",
                analogy: "Think of it like a Digital Security Camera System",
                description: "Captures and organizes every action and event in your application, like security cameras recording everything for later review and analysis.",
                benefits: ["Complete activity tracking", "Issue debugging capability", "Security audit trails", "Performance analysis data"]
            },
            "Metrics & Analytics": {
                icon: "📊",
                analogy: "Think of it like a Business Dashboard",
                description: "Real-time measurement and visualization of your application's performance, like having a car dashboard that shows speed, fuel, and engine health.",
                benefits: ["Real-time performance insights", "Data-driven decisions", "Trend identification", "Performance optimization guidance"]
            },
            "Alerting & Uptime Monitoring": {
                icon: "🚨",
                analogy: "Think of it like a Medical Alert System",
                description: "Constantly monitors your application's health and immediately notifies you when something goes wrong, like a medical alert system for your software.",
                benefits: ["Immediate issue notification", "Proactive problem detection", "Minimize downtime", "Peace of mind coverage"]
            },
            "Application Performance Monitoring (APM)": {
                icon: "🎯",
                analogy: "Think of it like a Health Checkup for Apps",
                description: "Provides detailed insights into how your application performs, identifying bottlenecks and optimization opportunities like a comprehensive health exam.",
                benefits: ["Performance bottleneck identification", "User experience optimization", "Resource usage insights", "Proactive performance tuning"]
            },
            "Audit Logging": {
                icon: "📝",
                analogy: "Think of it like a Legal Court Reporter",
                description: "Records every significant action and change in your system with timestamps and user details, like a court reporter documenting legal proceedings.",
                benefits: ["Compliance requirements", "Security investigation capability", "Change accountability", "Regulatory audit support"]
            },
            "Secrets & Environment Variable Management": {
                icon: "🔒",
                analogy: "Think of it like a Digital Safe",
                description: "Securely stores and manages sensitive information like passwords, API keys, and configuration settings that your application needs to function.",
                benefits: ["Secure credential management", "Centralized configuration", "Access control", "Audit trail for sensitive data"]
            },
            "Error Tracking & Monitoring": {
                icon: "🐛",
                analogy: "Think of it like a Bug Reporting System",
                description: "Automatically captures and reports errors in your application, helping you identify and fix issues before they affect users.",
                benefits: ["Proactive error detection", "Detailed error context", "Performance impact tracking", "Automatic alerting"]
            },
            "Distributed Tracing": {
                icon: "🕵️",
                analogy: "Think of it like a Detective Following Clues",
                description: "Tracks requests as they flow through your application's different services, helping you understand performance bottlenecks and dependencies.",
                benefits: ["Request flow visualization", "Performance bottleneck identification", "Service dependency mapping", "Root cause analysis"]
            }
        }
    },
    "Background Jobs & Workflows": {
        description: "Tools and services for handling asynchronous tasks, background processing, and workflow orchestration.",
        topics: {
            "Task Queues": {
                icon: "📋",
                analogy: "Think of it like a Restaurant Order Queue",
                description: "A system that manages and processes tasks in order, like a restaurant kitchen that handles orders one by one to ensure quality and prevent chaos.",
                benefits: ["Ordered task processing", "Reliable job execution", "Scalable workload handling", "Prevents system overload"]
            },
            "Background Jobs": {
                icon: "🎭",
                analogy: "Think of it like a Backstage Crew",
                description: "Processes that run behind the scenes while users continue using your application, like stagehands working backstage during a performance.",
                benefits: ["Non-blocking user experience", "Improved application performance", "Asynchronous processing", "Better resource utilization"]
            },
            "Cron Scheduling": {
                icon: "⏰",
                analogy: "Think of it like a Digital Alarm Clock",
                description: "Automated task scheduling that runs jobs at specific times or intervals, like setting multiple alarms for different daily tasks.",
                benefits: ["Automated task execution", "Reliable scheduling", "Perfect for maintenance tasks", "Time-based automation"]
            },
            "Durable Workflows / Orchestration": {
                icon: "🔄",
                analogy: "Think of it like a Recipe with Multiple Steps",
                description: "Complex, multi-step processes that can be paused, resumed, and managed like following a detailed recipe with checkpoints.",
                benefits: ["Complex process management", "Fault-tolerant workflows", "State persistence", "Business process automation"]
            }
        }
    },
    "Networking & Security": {
        description: "Essential networking, security, and infrastructure services for modern applications.",
        topics: {
            "CDN Services": {
                icon: "🌐",
                analogy: "Think of it like Global Express Delivery",
                description: "Content delivery networks that serve your content from locations closest to users worldwide, like having warehouses in every city for instant delivery.",
                benefits: ["Global fast content delivery", "Reduced server load", "Improved user experience", "Automatic scaling"]
            },
            "DNS Management": {
                icon: "🔗",
                analogy: "Think of it like a Global Address Book",
                description: "Manages how domain names translate to IP addresses, like a worldwide directory that helps people find your digital location.",
                benefits: ["Reliable domain routing", "Traffic management", "Failover capabilities", "Global accessibility"]
            },
            "Domain Provisioning": {
                icon: "🌍",
                analogy: "Think of it like Automated Real Estate Registration",
                description: "Automated domain registration and management, like having a service that handles all the paperwork for buying and managing digital property.",
                benefits: ["Automated domain setup", "Centralized management", "Bulk domain operations", "Compliance handling"]
            },
            "Reverse Proxy / API Gateway": {
                icon: "🚪",
                analogy: "Think of it like a Smart Building Receptionist",
                description: "Routes and manages incoming requests to the right services, like a receptionist who directs visitors to the correct department.",
                benefits: ["Centralized traffic management", "Load balancing", "Security enforcement", "API rate limiting"]
            },
            "DDoS Protection": {
                icon: "🛡️",
                analogy: "Think of it like a Digital Security Guard",
                description: "Protects your application from malicious traffic attacks, like having security guards that filter out unwanted visitors.",
                benefits: ["Automatic attack mitigation", "Uptime protection", "Traffic filtering", "Peace of mind security"]
            },
            "SSL Certificate Auto-Provisioning": {
                icon: "🔒",
                analogy: "Think of it like Automatic Lock Installation",
                description: "Automatically manages SSL certificates for secure HTTPS connections, like having a service that installs and renews locks automatically.",
                benefits: ["Automatic security setup", "Certificate renewal", "HTTPS enforcement", "Zero maintenance"]
            },
            "Role-Based Access Control (RBAC)": {
                icon: "👤",
                analogy: "Think of it like a Building Access Card System",
                description: "Manages user permissions and access levels, like access cards that open different doors based on your clearance level.",
                benefits: ["Granular permission control", "Security compliance", "User access management", "Audit trail capability"]
            }
        }
    },
    "Communication & Notifications": {
        description: "Services for sending emails, SMS, push notifications, and other communication channels.",
        topics: {
            "Email Delivery": {
                icon: "📧",
                analogy: "Think of it like a Professional Mail Service",
                description: "Reliable email sending with delivery tracking and analytics, like having a professional mail service that ensures your letters reach their destination.",
                benefits: ["High deliverability rates", "Delivery tracking", "Email analytics", "Compliance support"]
            },
            "SMS / Voice / WhatsApp APIs": {
                icon: "📱",
                analogy: "Think of it like a Multi-Channel Communication Hub",
                description: "APIs for sending messages across multiple communication channels, like having a central switchboard that can reach people through any device.",
                benefits: ["Multi-channel messaging", "High engagement rates", "Global reach", "Flexible communication options"]
            },
            "Push Notifications": {
                icon: "🔔",
                analogy: "Think of it like a Digital Town Crier",
                description: "Real-time notifications delivered directly to users' devices, like having a town crier who can instantly announce important news to everyone.",
                benefits: ["Instant user engagement", "High visibility", "Targeted messaging", "Real-time communication"]
            }
        }
    },
    "Payments & Billing": {
        description: "Payment processing, subscription management, and billing services for applications.",
        topics: {
            "Payment APIs": {
                icon: "💳",
                analogy: "Think of it like a Digital Cash Register",
                description: "Secure payment processing for transactions, like having a modern cash register that handles all payment methods securely.",
                benefits: ["Secure payment processing", "Multiple payment methods", "Fraud protection", "Compliance with standards"]
            },
            "Subscription Management": {
                icon: "📅",
                analogy: "Think of it like a Membership Management System",
                description: "Tools for managing recurring billing and customer subscriptions, like a gym membership system that handles renewals and payments.",
                benefits: ["Automated billing cycles", "Customer lifecycle management", "Revenue optimization", "Subscription analytics"]
            },
            "Invoicing & Tax Calculation": {
                icon: "🧾",
                analogy: "Think of it like an Automated Accounting Office",
                description: "Automated invoice generation and tax calculations, like having an accounting office that handles all financial paperwork automatically.",
                benefits: ["Automated invoicing", "Tax compliance", "Financial reporting", "Reduced manual work"]
            }
        }
    },
    "AI & Machine Learning": {
        description: "Artificial intelligence and machine learning services for modern applications.",
        topics: {
            "Model Hosting": {
                icon: "🤖",
                analogy: "Think of it like a Smart Factory",
                description: "Platforms for deploying and serving machine learning models, like having a factory that produces intelligent insights on demand.",
                benefits: ["Scalable AI deployment", "Model versioning", "Performance optimization", "Cost-effective AI"]
            },
            "AI Inference API": {
                icon: "🧠",
                analogy: "Think of it like an AI-Powered Assistant",
                description: "Ready-to-use AI services for common tasks, like having a smart assistant that can understand images, text, and speech.",
                benefits: ["Pre-trained AI models", "Easy integration", "Cost-effective AI", "No ML expertise required"]
            },
            "Embedding + Vector Search": {
                icon: "🔍",
                analogy: "Think of it like a Smart Library System",
                description: "AI-powered search using semantic understanding, like having a librarian who understands the meaning behind your questions.",
                benefits: ["Semantic search capabilities", "AI-powered recommendations", "Natural language queries", "Intelligent content discovery"]
            }
        }
    },
    "Data & Analytics": {
        description: "Data processing, analytics, and business intelligence tools.",
        topics: {
            "API Builders / No-Code Backends": {
                icon: "🔧",
                analogy: "Think of it like a Visual Programming Studio",
                description: "Tools for creating APIs and backend services without coding, like having a visual studio where you can build software by connecting blocks.",
                benefits: ["No-code development", "Rapid prototyping", "Business user friendly", "Reduced development time"]
            },
            "ETL Tools": {
                icon: "📊",
                analogy: "Think of it like a Data Processing Factory",
                description: "Data extraction, transformation, and loading tools, like having a factory that processes raw materials into finished products.",
                benefits: ["Automated data processing", "Data quality improvement", "Scalable data pipelines", "Business intelligence foundation"]
            },
            "Data Warehouses": {
                icon: "🏢",
                analogy: "Think of it like a Central Business Archive",
                description: "Centralized data storage for analytics and business intelligence, like having a massive archive where all business information is organized and accessible.",
                benefits: ["Centralized data storage", "Business intelligence", "Historical data analysis", "Scalable analytics"]
            },
            "API Documentation Tools": {
                icon: "📚",
                analogy: "Think of it like an Automated Technical Writer",
                description: "Tools for creating and maintaining API documentation, like having a technical writer who automatically updates manuals as your system changes.",
                benefits: ["Always up-to-date docs", "Developer experience", "API discoverability", "Reduced support burden"]
            },
            "Data Ownership / Export Tools": {
                icon: "📤",
                analogy: "Think of it like a Data Portability Service",
                description: "Tools for data portability and compliance with data regulations, like having a service that helps users take their data with them.",
                benefits: ["Regulatory compliance", "User data control", "Data portability", "Trust building"]
            },
            "Self-Hosting Options": {
                icon: "🏠",
                analogy: "Think of it like a Private Cloud Estate",
                description: "Solutions for hosting applications on your own infrastructure, like having your own private estate instead of renting space.",
                benefits: ["Full control", "Data sovereignty", "Customization options", "Cost optimization"]
            }
        }
    },
    "Internal Tools & No-Code": {
        description: "Tools for building internal applications and automating business processes.",
        topics: {
            "Admin Panel Builders": {
                icon: "⚙️",
                analogy: "Think of it like a Visual Control Room Builder",
                description: "Tools for creating internal admin interfaces without coding, like having a visual builder for creating control rooms for your business operations.",
                benefits: ["No-code admin tools", "Rapid internal tool development", "Business user friendly", "Custom workflow creation"]
            },
            "Workflow Automation": {
                icon: "🔄",
                analogy: "Think of it like an Automated Assembly Line",
                description: "Tools to automate business processes and reduce manual work, like having an assembly line that handles repetitive tasks automatically.",
                benefits: ["Process automation", "Reduced manual work", "Consistent execution", "Error reduction"]
            }
        }
    },
    "Product Analytics & Growth": {
        description: "Analytics and tools for understanding user behavior and driving product growth.",
        topics: {
            "Product Analytics": {
                icon: "📈",
                analogy: "Think of it like a Business Intelligence Dashboard",
                description: "Data-driven insights into user behavior and product performance, like having a dashboard that shows you exactly how your business is performing.",
                benefits: ["User behavior insights", "Data-driven decisions", "Performance tracking", "Growth optimization"]
            },
            "Heatmaps & Session Replay": {
                icon: "🎯",
                analogy: "Think of it like a User Behavior Recording Studio",
                description: "Visual tools to understand how users interact with your application, like having cameras that record exactly how people use your product.",
                benefits: ["User experience insights", "Visual behavior analysis", "Conversion optimization", "Usability improvement"]
            },
            "Feature Flags": {
                icon: "🚩",
                analogy: "Think of it like a Light Switch for Features",
                description: "Safely deploy and test new features with the ability to turn them on and off instantly, like having light switches for different features in your app.",
                benefits: ["Safe feature deployment", "A/B testing capability", "Instant rollback", "Gradual rollout"]
            },
            "AB Testing": {
                icon: "🧪",
                analogy: "Think of it like a Scientific Experiment Platform",
                description: "Statistical testing to compare different versions and optimize user experience, like running scientific experiments to find the best approach.",
                benefits: ["Data-driven optimization", "Statistical confidence", "User experience improvement", "Conversion optimization"]
            },
            "User Feedback Tools": {
                icon: "💬",
                analogy: "Think of it like a Digital Suggestion Box",
                description: "Collect and manage user feedback, feature requests, and support tickets, like having a suggestion box that's always open and organized.",
                benefits: ["User voice collection", "Feature prioritization", "Customer satisfaction", "Product improvement"]
            }
        }
    },
    "Compliance & Security": {
        description: "Security compliance and regulatory tools for enterprise applications.",
        topics: {
            "SOC 2 / ISO 27001 / HIPAA Compliance": {
                icon: "🛡️",
                analogy: "Think of it like a Security Certification Service",
                description: "Security compliance frameworks for enterprise and healthcare applications, like having a service that ensures your business meets all security standards.",
                benefits: ["Security compliance", "Enterprise trust", "Regulatory adherence", "Risk mitigation"]
            },
            "GDPR Compliance Tools": {
                icon: "📋",
                analogy: "Think of it like a Privacy Management System",
                description: "Tools to ensure compliance with European data protection regulations, like having a system that automatically manages user privacy and data rights.",
                benefits: ["Regulatory compliance", "User privacy protection", "Data rights management", "Legal risk reduction"]
            }
        }
    }
};

// Global variables for content page
let selectedTechSubcategories = new Set();
let selectedNonTechSubcategories = new Set();
let completedTopics = new Set();
let totalTopics = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProgressFromStorage();
    loadSubcategorySelections();
    
    // Check if user has selected subcategories
    if (selectedTechSubcategories.size === 8 && selectedNonTechSubcategories.size === 2) {
        // Complete selections - show full content
        initializeProgress();
        updateProgressDisplay();
        initializeNavigation();
        loadWelcomeContent();
    } else {
        // Incomplete or no selections - redirect to selection page
        window.location.href = 'selection.html';
    }
    
    // Setup reset button
    setupResetButton();
});

// Setup reset button functionality
function setupResetButton() {
    const resetButton = document.getElementById('resetFromContent');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Clear all stored data
            localStorage.removeItem('selectedTechSubcategories');
            localStorage.removeItem('selectedNonTechSubcategories');
            localStorage.removeItem('user_id');
            localStorage.removeItem('infrastructureGuideProgress');
            // Redirect to selection page
            window.location.href = 'selection.html';
        });
    }
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

// Initialize progress tracking
function initializeProgress() {
    // Count total selected topics
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    totalTopics = allSelectedSubcategories.size;
    
    // Update total topics display
    const totalTopicsElement = document.querySelector('.total-topics');
    if (totalTopicsElement) {
        totalTopicsElement.textContent = `of ${totalTopics} total topics`;
    }
}

// Load progress from localStorage
function loadProgressFromStorage() {
    const savedProgress = localStorage.getItem('infrastructureGuideProgress');
    if (savedProgress) {
        completedTopics = new Set(JSON.parse(savedProgress));
    }
}

// Save progress to localStorage
function saveProgressToStorage() {
    localStorage.setItem('infrastructureGuideProgress', JSON.stringify([...completedTopics]));
}

// Update progress display
function updateProgressDisplay() {
    const completedCount = completedTopics.size;
    const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    // Update text
    const progressText = document.querySelector('.progress-text');
    const completedTopicsText = document.querySelector('.completed-topics');
    
    if (progressText) {
        progressText.textContent = `${percentage}% Complete`;
    }
    if (completedTopicsText) {
        completedTopicsText.textContent = `${completedCount} topics completed`;
    }
}

// Mark topic as done/undone
function toggleTopicCompletion(categoryName, topicName, event) {
    const topicKey = `${categoryName}|${topicName}`;
    
    if (completedTopics.has(topicKey)) {
        completedTopics.delete(topicKey);
    } else {
        completedTopics.add(topicKey);
    }
    
    saveProgressToStorage();
    updateProgressDisplay();
    
    // Update the button and card appearance
    const button = event.target;
    const card = button.closest('.topic-card');
    
    if (completedTopics.has(topicKey)) {
        button.textContent = 'Completed ✓';
        button.classList.add('completed');
        card.classList.add('completed');
    } else {
        button.textContent = 'Mark as Done';
        button.classList.remove('completed');
        card.classList.remove('completed');
    }
}

// Check if topic is completed
function isTopicCompleted(categoryName, topicName) {
    const topicKey = `${categoryName}|${topicName}`;
    return completedTopics.has(topicKey);
}

// Initialize navigation
function initializeNavigation() {
    const navigation = document.getElementById('navigation');
    if (!navigation) return;
    
    // Clear existing navigation
    navigation.innerHTML = '';
    
    // Get all selected subcategories
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    

    
    // Create navigation cards for each selected subcategory
    let topicIndex = 1;
    allSelectedSubcategories.forEach(topicName => {
        // Find which category this topic belongs to
        let topicCategory = null;
        let topicData = null;
        
        Object.keys(infrastructureData).forEach((category) => {
            if (infrastructureData[category].topics[topicName]) {
                topicCategory = category;
                topicData = infrastructureData[category].topics[topicName];
            }
        });
        
        if (topicData) {
            const navCard = document.createElement('div');
            navCard.className = 'nav-card';
            navCard.setAttribute('data-category', topicCategory);
            navCard.setAttribute('data-topic', topicName);
            
            navCard.innerHTML = `
                <div class="nav-item">
                    <span class="topic-icon">${topicData.icon}</span>
                    <span class="topic-name">${topicName}</span>
                </div>
            `;
            
            navCard.addEventListener('click', () => {
                // Remove active class from all cards
                document.querySelectorAll('.nav-card').forEach(card => card.classList.remove('active'));
                // Add active class to clicked card
                navCard.classList.add('active');
                // Load content for the specific topic
                loadTopicContent(topicCategory, topicName);
            });
            
            navigation.appendChild(navCard);
            topicIndex++;
        } else {
            // Fallback: Create navigation card even if topic data is not found
            const navCard = document.createElement('div');
            navCard.className = 'nav-card';
            navCard.setAttribute('data-category', 'Unknown');
            navCard.setAttribute('data-topic', topicName);
            
            navCard.innerHTML = `
                <div class="nav-item">
                    <span class="topic-icon">📋</span>
                    <span class="topic-name">${topicName}</span>
                </div>
            `;
            
            navCard.addEventListener('click', () => {
                // Remove active class from all cards
                document.querySelectorAll('.nav-card').forEach(card => card.classList.remove('active'));
                // Add active class to clicked card
                navCard.classList.add('active');
                // Load welcome content as fallback
                loadWelcomeContent();
            });
            
            navigation.appendChild(navCard);
            topicIndex++;
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to content function
function scrollToContent() {
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Load specific topic content
function loadTopicContent(category, topicName) {
    const content = document.getElementById('content');
    if (!content) return;
    
    const categoryData = infrastructureData[category];
    if (!categoryData) return;
    
    const topic = categoryData.topics[topicName];
    if (!topic) return;
    
    const isCompleted = isTopicCompleted(category, topicName);
    const completedClass = isCompleted ? 'completed' : '';
    const buttonText = isCompleted ? 'Completed ✓' : 'Mark as Done';
    const buttonClass = isCompleted ? 'mark-done-btn completed' : 'mark-done-btn';
    
    content.innerHTML = `
        <div class="module-title">${topicName}</div>
        <div class="module-intro">
            <p>${categoryData.description}</p>
        </div>
        <div class="topics-grid">
            <div class="topic-card ${completedClass}">
                <h3>
                    <span class="topic-icon">${topic.icon}</span>
                    ${topicName}
                </h3>
                <div class="analogy-box">
                    <h4>${topic.analogy}</h4>
                    <p>${topic.description}</p>
                </div>
                <div class="benefits-list">
                    ${topic.benefits.map(benefit => `
                        <div class="benefit-item">
                            <span class="benefit-icon">✓</span>
                            ${benefit}
                        </div>
                    `).join('')}
                </div>
                <button class="${buttonClass}" onclick="toggleTopicCompletion('${category}', '${topicName}', event)">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
    
    // Smooth scroll to content area with a slight delay to ensure content is loaded
    setTimeout(() => {
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 100);
}







// Load welcome content
function loadWelcomeContent() {
    const content = document.getElementById('content');
    if (!content) return;
    
    content.innerHTML = `
        <div class="welcome-header">
            <div class="welcome-icon">🚀</div>
            <div class="module-title">Welcome to Your Technical Guide</div>
        </div>
        
        <div class="welcome-content">
            <div class="welcome-card">
                <div class="welcome-card-icon">📚</div>
                <div class="welcome-card-content">
                    <h3>Comprehensive Learning</h3>
                    <p>This guide breaks down complex developer infrastructure concepts into simple, business-focused explanations. Each section uses real-world analogies and focuses on the practical benefits for your projects.</p>
                </div>
            </div>
            
            <div class="welcome-card">
                <div class="welcome-card-icon">🎯</div>
                <div class="welcome-card-content">
                    <h3>How to Use This Guide</h3>
                    <p>Select a topic from the sidebar or use the dropdown above to explore specific technologies. Each concept includes a simple analogy and clear benefits.</p>
                </div>
            </div>
        </div>
    `;
}

 