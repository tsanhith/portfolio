/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "T. Sanhith Reddy",
  title: "Hi all, I'm Sanhith",
  subTitle: emoji(
    "Software Engineer & AI Systems Builder 🚀 B.Tech Data Science & AI (IFHE, 2022–2026), currently working as a Software Engineer. I build applied AI systems: multi-agent pipelines, retrieval-augmented generation, and production ML tooling — not just notebooks, but things deployed and monitored end to end."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tsanhith",
  linkedin: "https://www.linkedin.com/in/sanhith-reddy-740a1625b/",
  gmail: "sanhith6@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  leetcode: "https://leetcode.com/u/SanhithReddy/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER BUILDING PRODUCTION AI SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and maintain multi-agent LLM pipelines (LangGraph, LangChain) with full observability via Langfuse"
    ),
    emoji(
      "⚡ Build retrieval-augmented generation systems with hybrid search — BM25, dense embeddings, and vision embeddings"
    ),
    emoji(
      "⚡ Engineer production ML tooling — privacy-preserving pipelines, PII anonymization, monitoring, and cloud deployment"
    ),
    emoji(
      "⚡ End-to-end system design from data processing to deployed, monitored applications on Cloud Foundry and HF Spaces"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "LangGraph",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-face-smile"
    },
    {
      skillName: "FAISS",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "ChromaDB",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Langfuse",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IFHE (Institute For Higher Education)",
      logo: require("./assets/images/ifheLogo.svg"),
      subHeader: "B.Tech in Data Science & Artificial Intelligence",
      duration: "2022 – 2026",
      desc: "Finishing degree while working as a Software Engineer — building applied AI systems in production",
      descBullets: [
        "Focus on multi-agent systems, retrieval-augmented generation, and production ML tooling",
        "Strong foundation in Data Structures & Algorithms, ML theory, and practical implementation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Multi-Agent LLM Pipelines (LangGraph, LangChain)",
      progressPercentage: "85%"
    },
    {
      Stack: "RAG & Retrieval Systems (FAISS, ChromaDB)",
      progressPercentage: "80%"
    },
    {
      Stack: "Production ML & Observability (Langfuse, FastAPI)",
      progressPercentage: "75%"
    },
    {
      Stack: "Deep Learning (TensorFlow, PyTorch)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Snypar Technologies Pvt Ltd",
      companylogo: require("./assets/images/snyparLogo.jpeg"),
      date: "May 2026 – Present",
      desc: "Working on a production AI system that automates enterprise support-ticket resolution using a multi-agent LangGraph pipeline (14+ nodes, several conditional routing branches) covering classification, pattern analysis, root-cause analysis, and remediation recommendation.",
      descBullets: [
        "Built and maintained individual pipeline nodes and their routing logic in a 14+ node LangGraph system",
        "Instrumented full observability using Langfuse — trace-level visibility into every production run, debugging node-level failures and verifying auth/approval flows end to end",
        "Implemented data-privacy safeguards ahead of LLM inference — PII anonymization on large payloads with chunked processing, plus Python tooling to verify anonymization coverage against live traces",
        "Ran structured smoke/break-testing on Cloud Foundry–hosted production service: health checks, RBAC, approval-authorization flows — surfaced and documented real defects with clean reproduction evidence"
      ]
    },
    {
      role: "AI/ML Trainee",
      company: "360DigiTMG",
      companylogo: require("./assets/images/digiTMGLogo.svg"),
      date: "Jun 2024 – Aug 2024",
      desc: "Built production-style ML and LLM-powered systems at a leading AI/ML training institute in Hyderabad",
      descBullets: [
        "Curated and validated 10,000+ images for CNN training on facial recognition and drowsiness detection",
        "Conducted 15+ model experiments to improve accuracy and performance metrics",
        "Built LLM-powered prompt engineering system using Hugging Face for personalized task automation",
        "Processed 10GB+ video datasets for ML readiness and data pipeline optimization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "PRODUCTION AI SYSTEMS WITH REAL-WORLD IMPACT",
  projects: [
    {
      image: require("./assets/images/videntia_hero.png"),
      projectName: "Videntia: Multimodal Video Intelligence Pipeline",
      projectDesc:
        "A system that lets you ask complex, natural-language questions about long-form video and get back grounded, evidence-cited answers. Architecture: a 4-agent LangGraph pipeline — Lead Detective (query decomposition), Retriever (hybrid BM25 + dense + vision search), Verifier (evidence cross-checking), and Report Generator (temporally-aware synthesis). Achieved 63% latency reduction (8 min → 3 min per hour of video) and 94% retrieval accuracy via emotion-aware boosting and intelligent caching. Deployed live on Hugging Face Spaces and Vercel.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith/videntia"
        }
      ]
    },
    {
      image: require("./assets/images/videntia_architecture.png"),
      projectName: "Videntia — 4-Agent Architecture",
      projectDesc:
        "Lead Detective → Retriever → Verifier → Report Generator. Hybrid retrieval combining BM25 (keyword), dense text embeddings (semantic), and vision embeddings, fused with cross-encoder reranking — finds relevant moments whether the query matches spoken words, meaning, or visual content.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith/videntia"
        }
      ]
    },
    {
      image: "",
      projectName: "Agentic RAG Hybrid System",
      projectDesc:
        "An autonomous router that dynamically switches between local FAISS retrieval, live Tavily web search, and a chat fallback, with explicit validation to cut down hallucinations. Handles compound questions by decomposing them and resolving conversational pronouns before retrieval. Built with Python, LangChain, Groq, FAISS, Tavily, and Streamlit.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://agentic-rag-hybrid.streamlit.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith/Agentic-RAG-Hybrid"
        }
      ]
    },
    {
      image: "",
      projectName: "SVD Interactive Image Compression",
      projectDesc:
        "Image compression via Singular Value Decomposition achieving 75% file-size reduction at 90% SSIM. Features an interactive rank-selection tool and energy-based auto-tuning for optimal quality-size tradeoffs. Built with Python, NumPy, and Streamlit.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Production AI engineering, deployed multimodal systems, and national-level hackathon selection",

  achievementsCards: [
    {
      title: "Production AI Engineering at Snypar Technologies",
      subtitle:
        "Building a multi-agent LangGraph pipeline (14+ nodes) for enterprise support-ticket automation — with full Langfuse observability, PII anonymization, and Cloud Foundry deployment. Real production engineering, not a tutorial project.",
      image: require("./assets/images/snyparLogo.jpeg"),
      imageAlt: "Snypar Technologies Logo",
      footerLink: [
        {
          name: "Company",
          url: "https://snypar.com"
        }
      ]
    },
    {
      title: "Videntia — Deployed Multimodal Video Intelligence",
      subtitle:
        "4-agent pipeline achieving 63% latency reduction and 94% retrieval accuracy. Deployed live on Hugging Face Spaces and Vercel — a real, runnable demo, not just a repo.",
      image: require("./assets/images/videntia_hero.png"),
      imageAlt: "Videntia Project",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith/videntia"
        }
      ]
    },
    {
      title: "Smart India Hackathon 2024 - Phase 2",
      subtitle:
        "Shortlisted for Smart India Hackathon 2024 Phase 2 for AI-Based Traffic Management System. Designed adaptive traffic signal logic with real-world feasibility considerations.",
      image: "",
      imageAlt: "SIH Logo",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/tsanhith"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights on AI, LLMs, and practical ML systems",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/tsanhith",
      title: "Building LLM-Powered Systems",
      description:
        "Practical guide to building recommendation systems with prompt engineering and LLMs"
    },
    {
      url: "https://github.com/tsanhith",
      title: "Computer Vision for Real-Time Detection",
      description:
        "Implementing drowsiness detection and eye-state classification using CNNs and real-time processing"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Sharing knowledge on AI systems and practical ML 🎤"),

  talks: [
    {
      title: "LLM-Powered Systems in Production",
      subtitle:
        "Building practical AI applications with RAG and prompt engineering",
      slides_url: "https://github.com/tsanhith",
      event_url: "https://github.com/tsanhith"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon - discussions on AI, ML, and LLM systems",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1tCs5t0HYHgMh2eEIMMHd33_aKYhqJBlZ/view?usp=sharing",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Software Engineer building production AI systems. Open to collaborations on applied ML, multi-agent systems, and retrieval pipelines.",
  number: "+91-XXXXXXXXXX",
  email_address: "sanhith6@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
