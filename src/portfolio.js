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
    "Aspiring AI / LLM Engineer 🚀 I build practical AI systems using Large Language Models, retrieval-based pipelines, and machine learning. Experienced in turning raw data into working ML and LLM-powered applications."
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
  subTitle: "AI / ML ENGINEER BUILDING PRACTICAL LLM-POWERED SYSTEMS",
  skills: [
    emoji(
      "⚡ Build LLM-powered applications using prompt engineering and retrieval-based pipelines"
    ),
    emoji(
      "⚡ Develop deep learning models (CNNs, Neural Networks) for computer vision and NLP tasks"
    ),
    emoji(
      "⚡ Process and analyze large datasets (10K+ images, 10GB+ video data) for ML readiness"
    ),
    emoji(
      "⚡ Design ML systems focused on measurable results and real-world applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-face-smile"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
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
      logo: "",
      subHeader: "B.Tech in Data Science & Artificial Intelligence",
      duration: "Currently Enrolled",
      desc: "Hands-on experience building LLM-powered applications, computer vision systems, and ML pipelines",
      descBullets: [
        "Focus on clean logic, measurable results, and systems that actually work",
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
      Stack: "LLM & NLP Systems", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning (CNNs, TensorFlow, PyTorch)",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Processing & ML Pipelines",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Aspiring AI/ML Engineer",
      company: "360DigiTMG",
      companylogo: "",
      date: "Jun 2024 – Aug 2024",
      desc: "Built production-style ML and LLM-powered systems at a leading AI/ML training institute in Hyderabad",
      descBullets: [
        "Curated and validated 10,000+ images for CNN training on facial recognition and drowsiness detection",
        "Conducted 15+ model experiments to improve accuracy and performance metrics",
        "Built LLM-powered prompt engineering system using Hugging Face for personalized task automation",
        "Designed 20+ prompt templates and evaluated output quality for relevance and consistency",
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
  subtitle: "PRACTICAL AI/ML SYSTEMS WITH REAL-WORLD IMPACT",
  projects: [
    {
      image: "",
      projectName: "LLM-Powered Prompt Engineering System",
      projectDesc:
        "Built a prompt-driven system that analyzes user profiles and generates personalized suggestions using LLMs. Processed 100+ user profiles, designed 20+ prompt variations, and delivered a working UI using Streamlit. Demonstrates practical ability to leverage LLMs beyond chatbots.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith"
        }
      ]
    },
    {
      image: "",
      projectName: "Drowsiness Detection System",
      projectDesc:
        "Developed a real-time eye-state classification system using CNNs with TensorFlow/Keras. Curated and cleaned 10,000+ facial images, trained and evaluated models across 15+ experiments, applied image preprocessing and augmentation techniques for real-world detection scenarios.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith"
        }
      ]
    },
    {
      image: "",
      projectName: "AI-Based Traffic Management System (SIH 2024)",
      projectDesc:
        "Designed an adaptive traffic signal prototype using computer vision and video data analysis. Shortlisted for Smart India Hackathon 2024 Phase 2. Built logic for dynamic traffic signal control with focus on real-world feasibility and scalability.",
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
    "Selected for smart India Hackathon 2024, Strong competitive programming background, Internship-grade proof of ML systems",

  achievementsCards: [
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
    },
    {
      title: "LLM System Development",
      subtitle:
        "Built production-style LLM systems with prompt engineering and evaluation. Demonstrates ability to leverage LLMs pragmatically for practical tasks.",
      image: "",
      imageAlt: "LLM Systems Logo",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/tsanhith"
        }
      ]
    },

    {
      title: "Data Science Experience",
      subtitle:
        "Completed AI/ML program at 360DigiTMG working with 10K+ images and 10GB+ video datasets. Built end-to-end ML pipelines and LLM systems.",
      image: "",
      imageAlt: "Internship Logo",
      footerLink: [
        {
          name: "Experience Details",
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
    "https://drive.google.com/file/d/1O0-9HD0tpvVX6fOcrky8ictfs_zX0JgL/view?usp=sharing",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Currently looking for AI / ML / LLM internship opportunities. Let's discuss practical ML systems and RAG workflows.",
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
