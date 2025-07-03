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
                icon: "🗝️",
                analogy: "Think of it like a Digital Safe",
                description: "Securely stores and manages sensitive information like passwords and API keys, like a bank vault for your application's secrets.",
                benefits: ["Secure credential storage", "Centralized secret management", "Access control and rotation", "Compliance and security"]
            },
            "Cost Monitoring & Billing APIs": {
                icon: "💰",
                analogy: "Think of it like an Expense Tracker",
                description: "Tracks and manages your cloud spending in real-time, like having a personal finance app for your infrastructure costs.",
                benefits: ["Real-time cost visibility", "Budget alerts and controls", "Usage optimization insights", "Billing automation"]
            }
        }
    },
    "Async Processing, Queueing & Workflows": {
        description: "Systems that handle background tasks, scheduling, and complex workflows to keep your application responsive and reliable.",
        topics: {
            "Task Queues": {
                icon: "📋",
                analogy: "Think of it like a To-Do List Manager",
                description: "Organizes and processes background tasks in order, like having an efficient assistant who manages your to-do list and completes tasks systematically.",
                benefits: ["Organized task processing", "Reliable task completion", "Load balancing", "Failure recovery"]
            },
            "Background Jobs": {
                icon: "🔄",
                analogy: "Think of it like Invisible Assistants",
                description: "Handles time-consuming tasks behind the scenes while your application stays responsive, like having invisible assistants doing work while you focus on customers.",
                benefits: ["Non-blocking operations", "Improved user experience", "Scalable processing", "Resource optimization"]
            },
            "Cron Scheduling": {
                icon: "⏰",
                analogy: "Think of it like Automated Calendar Reminders",
                description: "Automatically runs tasks at specific times or intervals, like having a super-reliable calendar system that never forgets to execute important recurring tasks.",
                benefits: ["Automated recurring tasks", "Reliable scheduling", "Time-based operations", "Reduced manual work"]
            },
            "Durable Workflows / Orchestration": {
                icon: "🎼",
                analogy: "Think of it like a Symphony Conductor",
                description: "Coordinates complex multi-step processes across different systems, like a conductor ensuring every musician plays their part at the right time.",
                benefits: ["Complex process coordination", "Fault-tolerant workflows", "Multi-system integration", "Process visibility"]
            },
            "Retry Policies & Dead Letter Queues": {
                icon: "🔁",
                analogy: "Think of it like Persistent Customer Service",
                description: "Automatically retries failed tasks and handles persistent failures gracefully, like customer service that keeps trying to help but escalates unresolvable issues.",
                benefits: ["Automatic failure recovery", "Persistent issue handling", "System reliability", "Error management"]
            },
            "Triggered Jobs": {
                icon: "⚡",
                analogy: "Think of it like Motion Sensor Lights",
                description: "Automatically executes tasks when specific events occur, like motion sensor lights that turn on when someone enters a room.",
                benefits: ["Event-driven automation", "Real-time responsiveness", "Efficient resource usage", "Reactive processing"]
            }
        }
    },
    "CDN, Networking, & Edge": {
        description: "Infrastructure that delivers your content quickly and reliably to users around the world.",
        topics: {
            "CDN Services": {
                icon: "🌐",
                analogy: "Think of it like Global Express Delivery",
                description: "Stores copies of your content in multiple locations worldwide, so users get faster access from the nearest location, like having express delivery hubs in every city.",
                benefits: ["Faster global content delivery", "Reduced server load", "Improved user experience", "Better SEO performance"]
            },
            "DNS Management": {
                icon: "🗂️",
                analogy: "Think of it like Internet Phone Book",
                description: "Translates human-readable domain names into computer addresses, like a phone book that converts names into phone numbers for the internet.",
                benefits: ["Domain name resolution", "Traffic routing control", "Failover capabilities", "Global accessibility"]
            },
            "Domain Provisioning": {
                icon: "🏷️",
                analogy: "Think of it like Digital Real Estate",
                description: "Automatically registers and manages domain names for your applications, like having a real estate agent who handles all property paperwork automatically.",
                benefits: ["Automated domain management", "SSL certificate integration", "Brand protection", "Scalable domain operations"]
            },
            "Reverse Proxy / API Gateway": {
                icon: "🚪",
                analogy: "Think of it like a Hotel Concierge",
                description: "Acts as a smart intermediary that routes requests to the right services, like a concierge who directs guests to the right hotel services based on their needs.",
                benefits: ["Request routing and management", "Security and rate limiting", "API versioning support", "Load distribution"]
            },
            "Load Balancers": {
                icon: "⚖️",
                analogy: "Think of it like Traffic Control",
                description: "Distributes incoming requests across multiple servers to prevent overload, like traffic controllers ensuring no single road gets overwhelmed during rush hour.",
                benefits: ["Even traffic distribution", "High availability", "Improved performance", "Automatic failover"]
            },
            "Edge Caching & Smart Routing": {
                icon: "🧠",
                analogy: "Think of it like Smart GPS Navigation",
                description: "Intelligently caches content and routes traffic for optimal performance, like GPS that not only finds the fastest route but remembers and improves based on traffic patterns.",
                benefits: ["Intelligent content delivery", "Reduced latency", "Optimized routing", "Adaptive performance"]
            }
        }
    },
    "Security & Compliance": {
        description: "Essential security measures and compliance tools to protect your application and meet regulatory requirements.",
        topics: {
            "DDoS Protection": {
                icon: "🛡️",
                analogy: "Think of it like Digital Bodyguards",
                description: "Protects your application from overwhelming malicious traffic attacks, like having professional bodyguards who filter out troublemakers while letting legitimate visitors through.",
                benefits: ["Attack mitigation", "Service availability protection", "Automatic threat detection", "Business continuity"]
            },
            "SSL Certificate Auto-Provisioning": {
                icon: "🔒",
                analogy: "Think of it like Automatic Security Badges",
                description: "Automatically creates and maintains security certificates that encrypt data between users and your application, like automatic security badge renewal for building access.",
                benefits: ["Automatic encryption setup", "Certificate maintenance", "Trust and credibility", "Search engine benefits"]
            },
            "SOC 2 / ISO 27001 / HIPAA Compliance": {
                icon: "📋",
                analogy: "Think of it like Professional Certifications",
                description: "Industry-standard security and privacy certifications that demonstrate your platform meets strict professional requirements, like medical or legal professional certifications.",
                benefits: ["Industry trust and credibility", "Regulatory compliance", "Risk reduction", "Competitive advantage"]
            },
            "GDPR Compliance Tools": {
                icon: "🇪🇺",
                analogy: "Think of it like Privacy Rights Manager",
                description: "Tools that help you respect user privacy rights according to European regulations, like having a privacy rights advocate ensuring all user data is handled properly.",
                benefits: ["Legal compliance", "User privacy protection", "Avoid regulatory penalties", "International market access"]
            },
            "Role-Based Access Control (RBAC)": {
                icon: "👥",
                analogy: "Think of it like Organizational Hierarchy",
                description: "Controls who can access what based on their role in the organization, like how different job titles have different access levels in a company building.",
                benefits: ["Granular access control", "Security through organization", "Compliance support", "Administrative efficiency"]
            },
            "Audit Trails": {
                icon: "👣",
                analogy: "Think of it like Digital Footprints",
                description: "Records every action taken in your system with timestamps and user information, like security cameras that track who did what and when.",
                benefits: ["Complete activity history", "Security investigation support", "Compliance documentation", "Regulatory audit trails"]
            }
        }
    },
    "Communication & Notification": {
        description: "Services that enable communication and notifications between your application and users.",
        topics: {
            "Email Delivery": {
                icon: "📧",
                analogy: "Think of it like a Digital Post Office",
                description: "Reliable email delivery service that ensures your application's emails reach users' inboxes, like a modern post office that guarantees delivery.",
                benefits: ["High deliverability rates", "Email analytics and tracking", "Template management", "Automated email workflows"]
            },
            "SMS / Voice / WhatsApp APIs": {
                icon: "📱",
                analogy: "Think of it like a Multi-Channel Communication Hub",
                description: "Send messages through multiple channels - SMS, voice calls, and WhatsApp - like having a communication center that can reach users wherever they are.",
                benefits: ["Multi-channel messaging", "High engagement rates", "Global reach", "Real-time delivery confirmation"]
            },
            "Push Notifications": {
                icon: "🔔",
                analogy: "Think of it like a Digital Butler",
                description: "Sends instant notifications to users' devices, like having a butler who immediately informs you of important updates.",
                benefits: ["Instant user engagement", "High visibility", "Targeted messaging", "Rich notification content"]
            },
            "Transactional Messaging": {
                icon: "💬",
                analogy: "Think of it like Automated Customer Service",
                description: "Handles important business communications like receipts, confirmations, and alerts automatically.",
                benefits: ["Automated communication", "Consistent messaging", "Reliable delivery", "Compliance with regulations"]
            },
            "In-App Messaging APIs": {
                icon: "💭",
                analogy: "Think of it like an Internal Communication System",
                description: "Enables real-time messaging within your application, like having an internal chat system for your users.",
                benefits: ["Real-time communication", "Enhanced user engagement", "Contextual messaging", "Seamless integration"]
            }
        }
    },
    "Payments, Billing, & Licensing": {
        description: "Complete payment processing, billing management, and licensing solutions for your business.",
        topics: {
            "Payment APIs": {
                icon: "💳",
                analogy: "Think of it like a Digital Cash Register",
                description: "Process payments securely from customers, like having a modern cash register that accepts all payment methods.",
                benefits: ["Multiple payment methods", "Secure transactions", "Global payment support", "Fraud protection"]
            },
            "Subscription Management": {
                icon: "🔄",
                analogy: "Think of it like a Membership Management System",
                description: "Handles recurring billing and subscription lifecycle, like managing gym memberships with automatic renewals.",
                benefits: ["Automated billing cycles", "Flexible pricing plans", "Subscription analytics", "Easy upgrades/downgrades"]
            },
            "Invoicing & Tax Calculation": {
                icon: "🧾",
                analogy: "Think of it like an Automated Accountant",
                description: "Generates invoices and calculates taxes automatically, like having an accountant who handles all billing paperwork.",
                benefits: ["Automated invoicing", "Tax compliance", "Professional documentation", "Payment tracking"]
            },
            "Usage-Based Billing": {
                icon: "📊",
                analogy: "Think of it like a Utility Meter",
                description: "Bills customers based on actual usage, like how utility companies charge based on consumption.",
                benefits: ["Fair pricing model", "Scalable revenue", "Usage transparency", "Cost optimization"]
            },
            "Real-Time Billing Dashboard": {
                icon: "📈",
                analogy: "Think of it like a Financial Control Center",
                description: "Provides real-time insights into billing and revenue, like having a financial dashboard for your business.",
                benefits: ["Real-time revenue tracking", "Billing analytics", "Financial insights", "Revenue optimization"]
            }
        }
    },
    "AI/ML & Advanced Workloads": {
        description: "Artificial intelligence and machine learning services to power intelligent applications.",
        topics: {
            "Model Hosting": {
                icon: "🤖",
                analogy: "Think of it like a Brain Hosting Service",
                description: "Hosts and serves machine learning models, like having a service that keeps your AI brains running and accessible.",
                benefits: ["Scalable AI deployment", "Model versioning", "Performance optimization", "Easy model updates"]
            },
            "AI Inference API": {
                icon: "🧠",
                analogy: "Think of it like an AI Brain on Demand",
                description: "Provides AI capabilities through simple API calls, like having access to intelligent brains whenever you need them.",
                benefits: ["Easy AI integration", "No ML expertise required", "Scalable AI processing", "Cost-effective AI access"]
            },
            "Embedding + Vector Search": {
                icon: "🔍",
                analogy: "Think of it like Semantic Memory Search",
                description: "Converts text to numerical representations and finds similar content, like having a search system that understands meaning.",
                benefits: ["Semantic search capabilities", "AI-powered recommendations", "Content similarity matching", "Intelligent data organization"]
            },
            "ML Pipeline Hosting": {
                icon: "⚙️",
                analogy: "Think of it like an Automated Factory for AI",
                description: "Manages the entire machine learning workflow from data to deployment, like having an automated factory that builds and maintains AI systems.",
                benefits: ["End-to-end ML workflows", "Automated model training", "Data pipeline management", "Production-ready ML"]
            }
        }
    },
    "Internal Tools & No-Code/Low-Code": {
        description: "Tools that enable non-technical users to build and manage applications without extensive coding.",
        topics: {
            "Admin Panel Builders": {
                icon: "⚙️",
                analogy: "Think of it like a Control Room Builder",
                description: "Creates administrative interfaces without coding, like having a tool that builds control rooms for managing your business.",
                benefits: ["No coding required", "Rapid admin interface creation", "Customizable dashboards", "User-friendly management"]
            },
            "Workflow Automation": {
                icon: "🔄",
                analogy: "Think of it like an Automated Assembly Line",
                description: "Automates business processes and workflows, like having an assembly line that handles repetitive tasks automatically.",
                benefits: ["Process automation", "Reduced manual work", "Consistent execution", "Error reduction"]
            },
            "API Builders / No-Code Backends": {
                icon: "🔧",
                analogy: "Think of it like a Backend Factory",
                description: "Creates APIs and backend services without traditional programming, like having a factory that builds the behind-the-scenes parts of your app.",
                benefits: ["No backend coding", "Rapid API development", "Visual development", "Database integration"]
            }
        }
    },
    "Product Analytics & Growth": {
        description: "Tools to understand user behavior, optimize products, and drive growth through data-driven decisions.",
        topics: {
            "Product Analytics": {
                icon: "📊",
                analogy: "Think of it like a User Behavior Detective",
                description: "Tracks and analyzes how users interact with your product, like having a detective who studies user behavior patterns.",
                benefits: ["User behavior insights", "Data-driven decisions", "Product optimization", "User journey mapping"]
            },
            "Heatmaps & Session Replay": {
                icon: "🎥",
                analogy: "Think of it like a User Experience Camera",
                description: "Visualizes user interactions and replays user sessions, like having cameras that show exactly how users navigate your product.",
                benefits: ["Visual user insights", "UX optimization", "Issue identification", "Conversion optimization"]
            },
            "Feature Flags": {
                icon: "🚩",
                analogy: "Think of it like a Feature Light Switch",
                description: "Controls which features are visible to users, like having light switches that can turn features on and off instantly.",
                benefits: ["Gradual feature rollouts", "A/B testing capabilities", "Risk mitigation", "Instant feature control"]
            },
            "AB Testing": {
                icon: "🧪",
                analogy: "Think of it like a Scientific Experiment Lab",
                description: "Tests different versions of features to see which performs better, like running scientific experiments to optimize your product.",
                benefits: ["Data-driven optimization", "Risk-free experimentation", "Conversion improvement", "User experience enhancement"]
            },
            "User Feedback Tools": {
                icon: "💬",
                analogy: "Think of it like a Customer Suggestion Box",
                description: "Collects and manages user feedback and suggestions, like having a digital suggestion box that helps improve your product.",
                benefits: ["User voice collection", "Product improvement insights", "Customer satisfaction tracking", "Feature prioritization"]
            }
        }
    },
    "Data Pipelines & Warehousing": {
        description: "Tools for collecting, processing, storing, and analyzing large amounts of data.",
        topics: {
            "ETL Tools": {
                icon: "🔄",
                analogy: "Think of it like a Data Processing Factory",
                description: "Extracts, transforms, and loads data from various sources, like having a factory that processes raw materials into finished products.",
                benefits: ["Automated data processing", "Data quality improvement", "Multi-source integration", "Scalable data workflows"]
            },
            "Data Warehouses": {
                icon: "🏢",
                analogy: "Think of it like a Massive Data Storage Building",
                description: "Centralized storage for large amounts of structured data, like having a massive building designed specifically for storing and organizing data.",
                benefits: ["Centralized data storage", "Fast query performance", "Data consistency", "Business intelligence support"]
            },
            "Data Visualization Dashboards": {
                icon: "📈",
                analogy: "Think of it like a Data Art Gallery",
                description: "Creates visual representations of data through charts and graphs, like having an art gallery that displays data as beautiful, understandable visuals.",
                benefits: ["Visual data insights", "Interactive reporting", "Real-time monitoring", "Decision-making support"]
            }
        }
    },
    "Documentation, Portability & Meta": {
        description: "Tools for documentation, data portability, and platform management features.",
        topics: {
            "API Documentation Tools": {
                icon: "📚",
                analogy: "Think of it like an API Instruction Manual",
                description: "Creates and maintains documentation for APIs, like having an instruction manual that explains how to use your services.",
                benefits: ["Clear API documentation", "Developer onboarding", "Reduced support requests", "API adoption improvement"]
            },
            "Data Ownership / Export Tools": {
                icon: "📤",
                analogy: "Think of it like a Data Moving Service",
                description: "Allows users to export and own their data, like having a moving service that helps users take their data with them.",
                benefits: ["Data portability", "User control", "Compliance support", "Trust building"]
            },
            "Self-Hosting Options": {
                icon: "🏠",
                analogy: "Think of it like a Home Installation Kit",
                description: "Allows users to run the service on their own infrastructure, like having a kit that lets users install the service in their own home.",
                benefits: ["Data sovereignty", "Custom deployment", "Offline operation", "Security control"]
            },
            "Open Source Licensing": {
                icon: "🔓",
                analogy: "Think of it like an Open Recipe Book",
                description: "Provides open source code and licensing, like having a recipe book that's freely available for everyone to use and modify.",
                benefits: ["Community collaboration", "Transparency", "Customization freedom", "Cost reduction"]
            },
            "Team Collaboration Features": {
                icon: "👥",
                analogy: "Think of it like a Digital Team Workspace",
                description: "Enables multiple users to work together on projects, like having a digital workspace where teams can collaborate effectively.",
                benefits: ["Team productivity", "Shared workflows", "Role-based access", "Collaborative development"]
            },
            "Project Transfer Support": {
                icon: "🔄",
                analogy: "Think of it like a Project Moving Service",
                description: "Allows projects to be transferred between users or organizations, like having a service that helps move projects from one owner to another.",
                benefits: ["Project portability", "Ownership transfer", "Team handoffs", "Organizational changes"]
            },
            "Multi-region Migration Support": {
                icon: "🌍",
                analogy: "Think of it like a Global Moving Service",
                description: "Supports moving applications between different geographic regions, like having a moving service that can relocate your application worldwide.",
                benefits: ["Geographic flexibility", "Compliance requirements", "Performance optimization", "Disaster recovery"]
            }
        }
    }
};

// Subcategory categorization
const techSubcategories = [
    "Version Control", "CI/CD Platforms", "Dev Environments (Cloud IDEs)", "Infrastructure-as-Code (IaC)", "CLI Tools", "API Access",
    "Static Site Hosting", "Fullstack App Hosting", "Backend/Server Hosting", "Container Hosting", "Edge Function Hosting", "Serverless Functions", "Cold Start Optimized Runtimes", "Warm Instance Support", "Cron Job Hosting", "Background Worker Hosting",
    "Database-as-a-Service (DBaaS)", "Object/File Storage", "Caching & Key-Value Stores", "Vector Databases", "GraphQL Backend Services", "Search-as-a-Service", "Authentication", "Authorization", "Realtime Pub/Sub & WebSockets",
    "Logging & Log Management", "Metrics & Analytics", "Alerting & Uptime Monitoring", "Application Performance Monitoring (APM)", "Audit Logging", "Secrets & Environment Variable Management", "Cost Monitoring & Billing APIs",
    "Task Queues", "Background Jobs", "Cron Scheduling", "Durable Workflows / Orchestration", "Retry Policies & Dead Letter Queues", "Triggered Jobs",
    "CDN Services", "DNS Management", "Domain Provisioning", "Reverse Proxy / API Gateway", "Load Balancers", "Edge Caching & Smart Routing",
    "DDoS Protection", "SSL Certificate Auto-Provisioning", "Role-Based Access Control (RBAC)", "Audit Trails",
    "Email Delivery", "SMS / Voice / WhatsApp APIs", "Push Notifications", "Transactional Messaging", "In-App Messaging APIs",
    "Payment APIs", "Subscription Management", "Invoicing & Tax Calculation", "Usage-Based Billing", "Real-Time Billing Dashboard",
    "Model Hosting", "AI Inference API", "Embedding + Vector Search", "ML Pipeline Hosting",
    "API Builders / No-Code Backends",
    "ETL Tools", "Data Warehouses", "Data Visualization Dashboards",
    "API Documentation Tools", "Data Ownership / Export Tools", "Self-Hosting Options", "Open Source Licensing", "Team Collaboration Features", "Project Transfer Support", "Multi-region Migration Support"
];

const nonTechSubcategories = [
    "Admin Panel Builders", "Workflow Automation",
    "Product Analytics", "Heatmaps & Session Replay", "Feature Flags", "AB Testing", "User Feedback Tools",
    "SOC 2 / ISO 27001 / HIPAA Compliance", "GDPR Compliance Tools"
];

// Selected subcategories
let selectedTechSubcategories = new Set();
let selectedNonTechSubcategories = new Set();

// Progress tracking
let completedTopics = new Set();
let totalTopics = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProgressFromStorage();
    loadSubcategorySelections();
    // Always re-initialize progress and update display after loading selections
    initializeProgress();
    updateProgressDisplay();
    
    // Check if user has selected subcategories
    if (selectedTechSubcategories.size === 5 && selectedNonTechSubcategories.size === 5) {
        // Complete selections - show full content
        initializeNavigation();
        initializeSearch();
        updateAllCategoryProgress();
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
            // Only remove selection and progress keys
            localStorage.removeItem('selectedTechSubcategories');
            localStorage.removeItem('selectedNonTechSubcategories');
            localStorage.removeItem('user_id');
            localStorage.removeItem('infrastructureGuideProgress');
            // Redirect to selection page
            window.location.href = 'selection.html';
        });
    }
}

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
    
    // Find the subcategory data for icon only
    let subcategoryData = null;
    for (const category in infrastructureData) {
        if (infrastructureData[category].topics[subcategoryName]) {
            subcategoryData = infrastructureData[category].topics[subcategoryName];
            break;
        }
    }
    
    const icon = subcategoryData ? subcategoryData.icon : '📋';
    
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
    document.getElementById('startLearning').addEventListener('click', function() {
        if (selectedTechSubcategories.size === 5 && selectedNonTechSubcategories.size === 5) {
            hideSubcategorySelection();
            showMainContent();
        }
    });
    
    // Reset selection button
    document.getElementById('resetSelection').addEventListener('click', function() {
        resetSubcategorySelection();
    });
    
    // Reset from content button
    const resetFromContentBtn = document.getElementById('resetFromContent');
    if (resetFromContentBtn) {
        resetFromContentBtn.addEventListener('click', function() {
            returnToSubcategorySelection();
        });
    }
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

// Hide subcategory selection and show main content
function hideSubcategorySelection() {
    const selectionDiv = document.getElementById('subcategorySelection');
    selectionDiv.style.display = 'none';
}

// Return to subcategory selection from content page
function returnToSubcategorySelection() {
    // Clear all selections
    selectedTechSubcategories.clear();
    selectedNonTechSubcategories.clear();
    
    // Remove selected class from all items
    document.querySelectorAll('.subcategory-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Update UI
    updateSelectionCounters();
    updateStartButton();
    saveSubcategorySelections();
    
    // Show subcategory selection
    const selectionDiv = document.getElementById('subcategorySelection');
    selectionDiv.style.display = 'block';
    
    // Hide main content sections
    const progressSection = document.querySelector('.progress-section');
    const searchContainer = document.querySelector('.search-container');
    const navigation = document.getElementById('navigation');
    const contentArea = document.querySelector('.content-area');
    
    if (progressSection) progressSection.style.display = 'none';
    if (searchContainer) searchContainer.style.display = 'none';
    if (navigation) navigation.style.display = 'none';
    if (contentArea) contentArea.style.display = 'none';
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show main content
function showMainContent() {
    // Reinitialize navigation and search with selected subcategories
    initializeNavigation();
    initializeSearch();
    updateAllCategoryProgress();
    loadWelcomeContent();
    
    // Show all main content sections
    const progressSection = document.querySelector('.progress-section');
    const searchContainer = document.querySelector('.search-container');
    const navigation = document.getElementById('navigation');
    const contentArea = document.querySelector('.content-area');
    
    if (progressSection) progressSection.style.display = 'block';
    if (searchContainer) searchContainer.style.display = 'block';
    if (navigation) navigation.style.display = 'grid';
    if (contentArea) contentArea.style.display = 'block';
}

// Initialize progress tracking
function initializeProgress() {
    // Count total selected topics
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    totalTopics = allSelectedSubcategories.size;
    
    // Update total topics display
    document.querySelector('.total-topics').textContent = `of ${totalTopics} total topics`;
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
    const percentage = Math.round((completedCount / totalTopics) * 100);
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = `${percentage}%`;
    
    // Update text
    document.querySelector('.progress-text').textContent = `${percentage}% Complete`;
    document.querySelector('.completed-topics').textContent = `${completedCount} topics completed`;
}

// Mark topic as done/undone
function toggleTopicCompletion(categoryName, topicName) {
    const topicKey = `${categoryName}|${topicName}`;
    
    if (completedTopics.has(topicKey)) {
        completedTopics.delete(topicKey);
    } else {
        completedTopics.add(topicKey);
    }
    
    saveProgressToStorage();
    updateProgressDisplay();
    updateCategoryProgress(categoryName);
    
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
    const content = document.getElementById('content');
    
    // Clear existing navigation
    navigation.innerHTML = '';
    
    // Get all selected subcategories
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    
    // Create navigation cards only for categories that contain selected subcategories
    let categoryIndex = 1;
    Object.keys(infrastructureData).forEach((category) => {
        const categoryTopics = Object.keys(infrastructureData[category].topics);
        const hasSelectedTopics = categoryTopics.some(topic => allSelectedSubcategories.has(topic));
        
        if (hasSelectedTopics) {
            const progress = calculateCategoryProgress(category);
            const navCard = document.createElement('div');
            navCard.className = 'nav-card';
            navCard.setAttribute('data-category', category);
            navCard.innerHTML = `
                <h3>
                    <span class="count">${categoryIndex}</span>
                    ${category}
                </h3>
                <p>${infrastructureData[category].description}</p>
                <div class="category-progress">
                    <div class="category-progress-header">
                        <span class="category-progress-text">${progress.percentage}%</span>
                    </div>
                    <div class="category-progress-bar">
                        <div class="category-progress-fill" style="width: ${progress.percentage}%"></div>
                    </div>
                    <div class="category-progress-stats">
                        <span class="category-completed-topics">${progress.completed} topics</span>
                        <span class="category-total-topics">of ${progress.total} total</span>
                    </div>
                </div>
            `;
            
            navCard.addEventListener('click', () => {
                // Update dropdown to match the clicked category
                const searchDropdown = document.getElementById('searchDropdown');
                searchDropdown.value = category;
                
                // Remove active class from all cards
                document.querySelectorAll('.nav-card').forEach(card => card.classList.remove('active'));
                // Add active class to clicked card
                navCard.classList.add('active');
                // Load content
                loadCategoryContent(category);
            });
            
            navigation.appendChild(navCard);
            categoryIndex++;
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
    contentArea.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

// Load category content
function loadCategoryContent(category) {
    const content = document.getElementById('content');
    const categoryData = infrastructureData[category];
    
    // Get all selected subcategories
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    
    let topicsHTML = '';
    Object.keys(categoryData.topics).forEach(topicName => {
        // Only show topics that are in the selected subcategories
        if (allSelectedSubcategories.has(topicName)) {
            const topic = categoryData.topics[topicName];
            const isCompleted = isTopicCompleted(category, topicName);
            const completedClass = isCompleted ? 'completed' : '';
            const buttonText = isCompleted ? 'Completed ✓' : 'Mark as Done';
            const buttonClass = isCompleted ? 'mark-done-btn completed' : 'mark-done-btn';
            
            topicsHTML += `
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
                    <button class="${buttonClass}" onclick="toggleTopicCompletion('${category}', '${topicName}')">
                        ${buttonText}
                    </button>
                </div>
            `;
        }
    });
    
    content.innerHTML = `
        <div class="module-title">${category}</div>
        <div class="module-intro">
            <p>${categoryData.description}</p>
        </div>
        <div class="topics-grid">
            ${topicsHTML}
        </div>
    `;
    
    // Smooth scroll to content area with a slight delay to ensure content is loaded
    setTimeout(() => {
        const contentArea = document.querySelector('.content-area');
        contentArea.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 100);
}

// Generate all topic options for dropdown
function generateTopicOptions() {
    let options = '<option value="all">All Categories</option>';
    
    // Get all selected subcategories
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    
    // Add category options only for categories that contain selected subcategories
    Object.keys(infrastructureData).forEach(category => {
        const categoryTopics = Object.keys(infrastructureData[category].topics);
        const hasSelectedTopics = categoryTopics.some(topic => allSelectedSubcategories.has(topic));
        
        if (hasSelectedTopics) {
            options += `<option value="${category}">📁 ${category}</option>`;
        }
    });
    
    return options;
}

// Initialize search functionality
function initializeSearch() {
    const searchDropdown = document.getElementById('searchDropdown');
    
    // Populate dropdown with all options
    searchDropdown.innerHTML = generateTopicOptions();
    
    function performSearch() {
        const selectedOption = searchDropdown.value;
        
        if (selectedOption === 'all') {
            // Show all categories if "All Categories" is selected
            document.querySelectorAll('.nav-card').forEach(card => {
                card.style.display = 'block';
                card.classList.remove('active');
            });
            // Load welcome content
            loadWelcomeContent();
            return;
        }
        
        // Show only the selected category and load its content
        document.querySelectorAll('.nav-card').forEach((card, index) => {
            const categoryName = Object.keys(infrastructureData)[index];
            if (categoryName === selectedOption) {
                card.style.display = 'block';
                card.classList.add('active');
                // Load the content for the selected category
                loadCategoryContent(selectedOption);
            } else {
                card.style.display = 'none';
                card.classList.remove('active');
            }
        });
    }
    
    searchDropdown.addEventListener('change', performSearch);
}

// Load welcome content
function loadWelcomeContent() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="module-title">Welcome to Your Technical Guide</div>
        <div class="module-intro">
            <p>This comprehensive guide breaks down complex developer infrastructure concepts into simple, business-focused explanations. Each section uses real-world analogies and focuses on the practical benefits for your projects.</p>
            <p><strong>How to use this guide:</strong> Select a category from the dropdown above to explore the technologies in that area. Each concept includes a simple analogy and clear benefits for project managers.</p>
        </div>
    `;
}

// Calculate category progress
function calculateCategoryProgress(categoryName) {
    const categoryData = infrastructureData[categoryName];
    const allSelectedSubcategories = new Set([...selectedTechSubcategories, ...selectedNonTechSubcategories]);
    
    // Only count selected topics
    const selectedTopics = Object.keys(categoryData.topics).filter(topic => allSelectedSubcategories.has(topic));
    const totalTopics = selectedTopics.length;
    let completedCount = 0;
    
    selectedTopics.forEach(topicName => {
        if (isTopicCompleted(categoryName, topicName)) {
            completedCount++;
        }
    });
    
    return {
        completed: completedCount,
        total: totalTopics,
        percentage: totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0
    };
}

// Update category progress display
function updateCategoryProgress(categoryName) {
    const progress = calculateCategoryProgress(categoryName);
    const navCard = document.querySelector(`[data-category="${categoryName}"]`);
    
    if (navCard) {
        const progressFill = navCard.querySelector('.category-progress-fill');
        const progressText = navCard.querySelector('.category-progress-text');
        const completedTopics = navCard.querySelector('.category-completed-topics');
        const totalTopics = navCard.querySelector('.category-total-topics');
        
        if (progressFill) progressFill.style.width = `${progress.percentage}%`;
        if (progressText) progressText.textContent = `${progress.percentage}%`;
        if (completedTopics) completedTopics.textContent = `${progress.completed} topics`;
        if (totalTopics) totalTopics.textContent = `of ${progress.total} total`;
    }
}

// Update all category progress displays
function updateAllCategoryProgress() {
    Object.keys(infrastructureData).forEach(categoryName => {
        updateCategoryProgress(categoryName);
    });
} 