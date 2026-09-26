// EDIT THIS FILE to update portfolio content. Empty fields stay honest placeholders.
// Use https:// links; screenshot paths can be relative, e.g. assets/banking.webp.
window.portfolio = {
  email: "contact@mohitmahato.com.np",
  location: "Nepal",
  phone: "", // Optional public number; hidden when empty.
  socialLinks: [
    { label: "GitHub", url: "https://github.com/MohitMahato-1" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mohit-mahato-8a8271305/" }
  ],
  // Authored FAQ answers, not a live AI chatbot. Update with verified resume details.
  faq: [
    { question: "What have you built?", answer: "My projects include a Python banking management system, a library system, a student report card system, and data analysis work. You can explore them in Selected Work above." },
    { question: "Which tools do you use?", answer: "I’ve used Python in my banking project and worked on data analysis. FastAPI, REST APIs, SQL, PostgreSQL, Docker, and cloud deployment are currently on my learning list." },
    { question: "What are you working toward?", answer: "I’m an aspiring AI/ML engineer from Nepal. My focus is on developing Python foundations, exploring data, and learning to build useful applications." },
    { question: "Can we arrange a meeting?", answer: "Email contact@mohitmahato.com.np to discuss a suitable time. This FAQ cannot schedule or confirm a meeting." }
  ],
  heroImage: "", // Optional decorative Higgsfield artwork. Site works without it.
  projects: [
    {
      id: "banking", number: "01", category: "PYTHON / APPLICATION",
      title: "Banking management system",
      description: "A Python project exploring the structure of a banking management system.",
      tags: ["Python", "Management system"],
      concept: "A place for every transaction.", visual: "ledger",
      repository: "", demo: "", screenshot: "", screenshotAlt: "Banking management system screenshot",
      details: "Project notes are coming soon: the problem, how I approached it, and what I learned.",
      result: "Results and implementation details to be added."
    },
    {
      id: "analysis", number: "02", category: "DATA / EXPLORATION",
      title: "Finding stories in data",
      description: "A space for my data analysis work: the questions, the exploration, and the findings.",
      tags: ["Data analysis", "Exploration"],
      concept: "From observations to understanding.", visual: "chart",
      repository: "", demo: "", screenshot: "", screenshotAlt: "Data analysis project screenshot",
      details: "Dataset, tools, and analysis notebook to be added. The diagram above is illustrative, not a measured result.",
      result: "Findings and dataset source to be added."
    },
    {
      id: "library", number: "03", category: "SYSTEMS / ORGANIZATION",
      title: "Library system",
      description: "A project centered on organizing a library and making its information easier to manage.",
      tags: ["Library", "Management system"],
      concept: "A little order. A lot to discover.", visual: "catalog",
      repository: "", demo: "", screenshot: "", screenshotAlt: "Library system screenshot",
      details: "Project language, features, and implementation notes to be confirmed and added.",
      result: "Results and project learnings to be added."
    },
    {
      id: "report", number: "04", category: "SYSTEMS / RECORDS",
      title: "Student report card system",
      description: "A project exploring how student report cards can be organized in a software system.",
      tags: ["Student records", "Report cards"],
      concept: "Giving information a clear structure.", visual: "report",
      repository: "", demo: "", screenshot: "", screenshotAlt: "Student report card system screenshot",
      details: "Project language, calculation rules, and features to be confirmed and added.",
      result: "Results and project learnings to be added."
    }
  ],
  // Change each status independently. Unconfirmed tools must stay Currently learning.
  skillGroups: [
    { title: "Python and data", note: "Starting with the foundations.", skills: [
      { name: "Python", status: "Used in projects" },
      { name: "Data analysis", status: "Used in projects" },
      { name: "Pandas & NumPy", status: "Currently learning" },
      { name: "Data visualization", status: "Currently learning" },
      { name: "Machine learning", status: "Currently learning" }
    ]},
    { title: "Backend and deployment", note: "Learning how ideas become applications.", skills: [
      { name: "FastAPI", status: "Currently learning" },
      { name: "REST APIs", status: "Currently learning" },
      { name: "SQL", status: "Currently learning" },
      { name: "PostgreSQL", status: "Currently learning" },
      { name: "Docker", status: "Currently learning" },
      { name: "Cloud deployment", status: "Currently learning" }
    ]}
  ]
};

