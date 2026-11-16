export interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
  techStack: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
  liveLink: string;
  githubClientLink: string;
  challenges: string[];
  futurePlans: string[];
}

export const personalInfo = {
  name: "Tarik Saidul Islam Sabit",
  shortName: "Sabit",
  designation: "Full Stack Web Developer & Competitive Programmer",
  photo: "/profile.jpg",
  resumePath: "/Tarik-Saidul-Islam-Sabit-Resume.pdf",
  email: "tariksaidulislam@gmail.com",
  phone: "+880 1623-672660",
  whatsapp: "8801623672660",
  address: "Mirpur-1, Dhaka-1216, Bangladesh",
  socials: {
    github: "https://github.com/tsisabit",
    linkedin: "https://www.linkedin.com/in/tsisabit",
    facebook: "https://www.facebook.com/tariksaidulislamsabit",
    codeforces: "https://codeforces.com/profile/TSI_Sabit",
    codechef: "https://www.codechef.com/users/tsi_sabit",
  },
  about: {
    intro:
      "Hello! I'm Tarik Saidul Islam Sabit, a Computer Science and Engineering undergraduate at Bangladesh University of Business and Technology (BUBT) and a passionate Full Stack Web Developer.",
    journey:
      "My programming journey started with C and C++, diving deep into Data Structures, Algorithms, and Competitive Programming. Solving over 960+ algorithmic problems across Codeforces (Max 1150) and CodeChef (2★, Max 1580), and securing 4th place in the BUBT Intra University Programming Contest (Summer 2026) shaped my analytical mindset. Transitioning from problem-solving to software engineering, I fell in love with building scalable, full-stack web applications using Next.js, React, TypeScript, Node.js, Express, and MongoDB.",
    workStyle:
      "I enjoy architecting clean, user-centric web platforms that solve real-world local problems—whether it's tracking daily kitchen market prices in Dhaka, organizing community volunteer drives, or building performance-driven fitness trackers.",
    hobbies:
      "Outside of coding and late-night contests, I actively engage in tech community leadership, organizing programming contests, mentoring juniors, and exploring advancements in Artificial Intelligence and Cyber Security.",
  },
};

export const projectsList: Project[] = [
  {
    id: "bazar-dor",
    title: "Bazar Dor (বাজার দর)",
    tagline: "Real-Time Kitchen Market Price Monitoring & Comparison Platform",
    image: "/bazardor.png",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "Lucide React",
    ],
    shortDescription:
      "A modern web application built to monitor, analyze, and compare real-time daily commodity and kitchen market prices across major Dhaka bazaars.",
    fullDescription:
      "Bazar Dor empowers everyday consumers in Bangladesh to track daily fluctuations in essential commodity prices across local markets like Karwan Bazar, Mirpur-1, and Mohammadpur Town Hall. It features an infinite real-time marquee ticker, top risers/fallers analytics, category filtering, and protected bazaar-wise price breakdowns.",
    features: [
      "Real-Time Price Ticker with animated infinite marquee showing percentage price changes.",
      "Market Monitoring Dashboard highlighting Today's Risers, Today's Fallers, and sortable inventory.",
      "Category Browsing for Rice, Lentils, Oil, Vegetables, Fish, and Meat with loading skeletons.",
      "Protected Product Details comparing prices across multiple physical bazaars via BetterAuth.",
    ],
    liveLink: "https://bazar-dor-jade.vercel.app/",
    githubClientLink: "https://github.com/tsisabit/bazardor",
    challenges: [
      "Eliminating SSR/CSR hydration mismatches when formatting dynamic Bangla and English dates across server and client components.",
      "Configuring BetterAuth origin verification and protected dynamic routes (/product/[id]) seamlessly for Vercel production deployment.",
    ],
    futurePlans: [
      "Integrate an automated price-alert notification system via email/SMS when staple commodities drop below a user's target price.",
      "Add crowdsourced price reporting with admin verification and historical 30-day price trend charts.",
    ],
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Performance-Driven Dark Gym & Workout Routine Companion",
    image: "/fitlog.png",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers API",
      "Lucide React",
      "React Hot Toast",
    ],
    shortDescription:
      "A dark, responsive gym companion allowing lifters to explore workout movements, calculate cumulative burn stats, and schedule daily routines.",
    fullDescription:
      "FitLog is built for fitness enthusiasts who want a fast, distraction-free workout planner. Powered by a Cloudflare Workers API, it enables multi-metric sorting, detailed exercise execution guides, and a smart daily workout planner with built-in overtraining safeguards.",
    features: [
      "Interactive Workout Library fetching live data with real-time search and sorting by Duration, Calories, and Rating.",
      "Dynamic Workout Specification Pages (/workout/[id]) with equipment tables, sets/reps, and step-by-step instructions.",
      "Smart Daily Plan Manager (/my-plan) with a 5-exercise daily cap and real-time calorie/duration aggregation.",
      "Client-Side Persistence via localStorage synchronization with 'Today's Plan' and 'Saved For Later' tabs.",
    ],
    liveLink: "https://fitlog-indol-pi.vercel.app/",
    githubClientLink: "https://github.com/tsisabit/fitlog",
    challenges: [
      "Synchronizing client-side localStorage workout states with Next.js App Router server rendering without triggering hydration flickering.",
      "Designing an intuitive state architecture that enforces the 5-lift daily limit while dynamically recalculating total calories and workout duration.",
    ],
    futurePlans: [
      "Add user authentication and cloud database sync so lifters can access their workout history across mobile and desktop devices.",
      "Introduce interactive rest timers and progressive overload weight-tracking graphs.",
    ],
  },
  {
    id: "goodgather",
    title: "GoodGather",
    tagline: "Community Volunteer & Social Service Event Management Platform",
    image: "/goodgather.png",
    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js & Express",
      "MongoDB",
      "JWT & Google OAuth",
    ],
    shortDescription:
      "A full-stack community platform enabling organizers and volunteers across Bangladesh to create, discover, and join social service drives.",
    fullDescription:
      "GoodGather connects local changemakers for social initiatives such as winter blanket distributions, urban cleanups, and tree plantation drives. It enforces strict future-date event validation, chronological volunteer tracking, and seamless dark/light theme customization.",
    features: [
      "Strict Future-Date Event Creation preventing backdated campaigns, paired with automatic past-event filtering.",
      "Unified Authentication supporting Google OAuth and custom email/password with real-time password strength validation.",
      "Protected Action Dashboard allowing organizers to update/delete events and volunteers to track joined drives chronologically.",
      "Persistent Dark & Light mode toggle synchronized with user system preferences.",
    ],
    liveLink: "https://good-gather-gilt.vercel.app/",
    githubClientLink: "https://github.com/tsisabit/goodgather",
    challenges: [
      "Handling timezone-accurate date filtering across both MongoDB backend queries and Next.js client views so expired events hide automatically.",
      "Implementing secure JWT session management alongside Google OAuth while keeping protected dashboard routes responsive.",
    ],
    futurePlans: [
      "Integrate an interactive map view (Leaflet/Mapbox) to discover nearby volunteer campaigns by district.",
      "Add automated digital volunteer certificates upon event completion verification by organizers.",
    ],
  },
];

export const cpAchievements = {
  contests: [
    {
      rank: "4th Place",
      contest: "BUBT Intra University Programming Contest — Summer 2026",
      division: "Senior Division",
      handle: "Tarik Saidul Islam Sabit",
      highlight: "Awarded 30% Merit Tuition Fee Waiver for Fall 2026",
      featured: true,
    },
    {
      rank: "15th Place",
      contest: "BUBT Intra University Programming Contest — Spring 2025",
      division: "Junior Division",
      handle: "Team: BUBT_Quantum_Trio",
      highlight: "Official Final Standings",
      featured: false,
    },
    {
      rank: "27th Place",
      contest: "BUBT Intra University Programming Contest — Spring 2025",
      division: "Junior Division",
      handle: "Team: BUBT_Quantum_Trio",
      highlight: "Official Final Standings",
      featured: false,
    },
  ],
  profiles: [
    {
      platform: "Codeforces",
      handle: "TSI Sabit",
      rating: "1150 Max Rating",
      solved: "600+ Problems Solved",
      link: "https://codeforces.com/profile/TSI_Sabit",
    },
    {
      platform: "CodeChef",
      handle: "tsi-sabit",
      rating: "2★ (1580 Max Rating)",
      solved: "360+ Problems Solved",
      link: "https://www.codechef.com/users/tsi_sabit",
    },
  ],
};

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: "95%", tag: "CP & DSA" },
      { name: "C", level: "90%", tag: "Core" },
      { name: "TypeScript", level: "88%", tag: "Typed JS" },
      { name: "JavaScript (ES6+)", level: "92%", tag: "Web" },
      { name: "Python", level: "82%", tag: "AI & Scripting" },
      { name: "Java", level: "78%", tag: "OOP" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "Next.js (App Router)", level: "92%", tag: "SSR / Fullstack" },
      { name: "React.js", level: "90%", tag: "UI Library" },
      { name: "Tailwind CSS", level: "95%", tag: "Styling" },
      { name: "HTML5 & CSS3", level: "96%", tag: "Semantic Web" },
      { name: "DaisyUI / Shadcn", level: "90%", tag: "Components" },
    ],
  },
  {
    category: "Backend, Database & Tools",
    skills: [
      { name: "Node.js & Express.js", level: "86%", tag: "REST API" },
      { name: "MongoDB", level: "88%", tag: "NoSQL" },
      { name: "MySQL / SQL", level: "82%", tag: "Relational DB" },
      { name: "BetterAuth / JWT", level: "85%", tag: "Security" },
      { name: "Git & GitHub", level: "92%", tag: "Version Control" },
      { name: "Vercel & Render", level: "90%", tag: "Deployment" },
    ],
  },
];

export const educationList = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    location: "Mirpur-2, Dhaka, Bangladesh",
    period: "2024 – Present",
    grade: "CGPA: 3.43 / 4.00 (154 Credits)",
    highlights: [
      "Awarded 85% Merit-Based Tuition Fee Waiver (Fall 2024).",
      "Awarded 30% Tuition Fee Waiver for securing 4th Place in BUBT Intra University Programming Contest (Summer 2026).",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "BCIC College",
    location: "Mirpur, Dhaka, Bangladesh",
    period: "2023",
    grade: "GPA: 4.92 / 5.00",
    highlights: [
      "Served as the College Captain for the entire BCIC College (2022–2023).",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Model Academy",
    location: "Dhaka, Bangladesh",
    period: "2021",
    grade: "GPA: 5.00 / 5.00",
    highlights: [
      "Elected 2-time Prime Minister of the Student Cabinet (2017–2018).",
    ],
  },
];

export const workExperienceList = [
  {
    role: "Student Advisor Intern",
    company: "Shohoj Coding",
    location: "Dhaka, Bangladesh",
    period: "02 Jan 2026 – 31 Mar 2026",
    responsibilities: [
      "Guided prospective students regarding programming courses, career pathways, and enrollment procedures.",
      "Conducted follow-up calls and counseling sessions to help students make informed academic decisions.",
      "Collaborated with internal teams to develop strategies improving student engagement and enrollment rates.",
    ],
  },
  {
    role: "Sales Intern",
    company: "Shohoj Coding",
    location: "Dhaka, Bangladesh",
    period: "19 Mar 2025 – 30 Jul 2026",
    responsibilities: [
      "Contacted prospective learners to promote educational courses and maintained positive client relationships.",
      "Tracked and recorded monthly sales performance, prepared periodic enrollment reports, and achieved monthly targets.",
      "Developed strong communication, negotiation, and customer relationship management (CRM) skills.",
    ],
  },
];

export const leadershipList = [
  {
    role: "Campus Ambassador",
    organization: "Nexus Coding Club",
    period: "Apr 2026 – May 2026",
    points: [
      "Promoted technical workshops and coding initiatives across university networks and social media.",
      "Organized multiple online competitive programming contests and participated in development seminars.",
    ],
  },
  {
    role: "Volunteer — Reception & Invitation Team",
    organization: "ICPC Dhaka Site Regional 2025",
    period: "2025",
    points: [
      "Assisted in participant registration, check-in, and smooth event coordination at the regional contest.",
      "Welcomed contestants, distributed participant kits/placards, and provided venue & schedule guidance.",
    ],
  },
  {
    role: "Campus Ambassador",
    organization: "Shohoj Coding",
    period: "Jan 2025 – Jun 2025",
    points: [
      "Represented Shohoj Coding at BUBT, organized online programming contests, and mentored aspiring coders.",
    ],
  },
  {
    role: "College Captain",
    organization: "BCIC College",
    period: "Sep 2022 – Nov 2023",
    points: [
      "Led the student body as the Captain for the entire BCIC College, bridging communication between students and faculty.",
      "Actively contributed to institutional development initiatives and student welfare activities.",
    ],
  },
  {
    role: "2-Time Prime Minister — Student Cabinet",
    organization: "Model Academy School",
    period: "Feb 2017 – Dec 2018",
    points: [
      "Elected twice as Prime Minister of the Student Cabinet; coordinated with teachers to resolve student issues and organize school development activities.",
    ],
  },
];