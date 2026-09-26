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
    { question: "What have you built?", answer: "My projects include a Python banking management system, COVID-19 data visualization, Titanic survival prediction, a library system, and a student report card system. Find the available GitHub repositories in Selected Work above." },
    { question: "Which tools do you use?", answer: "I use Python, pandas, NumPy, and data visualization in my projects, and I’ve also worked with machine learning. FastAPI, REST APIs, SQL, PostgreSQL, Docker, and cloud deployment are currently on my learning list." },
    { question: "What are you working toward?", answer: "I’m an aspiring AI/ML engineer from Nepal. My focus is on developing Python foundations, exploring data, and learning to build useful applications." },
    { question: "Can we arrange a meeting?", answer: "Email contact@mohitmahato.com.np to discuss a suitable time. This FAQ cannot schedule or confirm a meeting." }
  ],
  heroImage: "", // Optional decorative Higgsfield artwork. Site works without it.
  projects: [
    {
      id: "banking", number: "01", category: "PYTHON / APPLICATION",
      title: "Banking management system",
      description: "A command-line banking system for creating accounts, making deposits and withdrawals, and checking balances.",
      tags: ["Python", "OOP", "File handling"],
      concept: "A place for every transaction.", visual: "ledger",
      repository: "https://github.com/MohitMahato-1/CLI_based_bank_management_system", demo: "", screenshot: "", screenshotAlt: "Banking management system screenshot",
      details: "Built with Python classes, text-file storage, and exception handling to practice structuring an interactive application.",
      result: "A learning project with basic validation; not intended for real banking use."
    },
    {
      id: "analysis", number: "02", category: "DATA / EXPLORATION",
      title: "COVID-19 data visualization",
      description: "Exploring country-level COVID-19 data through comparisons of cases, recoveries, deaths, and WHO regions.",
      tags: ["pandas", "NumPy", "Matplotlib"],
      concept: "From observations to understanding.", visual: "chart",
      repository: "https://github.com/MohitMahato-1/covid19-data-visualization", demo: "", screenshot: "", screenshotAlt: "COVID-19 data visualization screenshot",
      details: "Uses pandas for cleaning and aggregation, NumPy for numerical operations, and Matplotlib for bar charts, pie charts, and scatter plots.",
      result: "Analysis uses a static dataset. Project screenshots and a summary of findings will be added here."
    },
    {
      id: "titanic", number: "03", category: "MACHINE LEARNING / IN PROGRESS",
      title: "Titanic survival prediction",
      description: "A hands-on machine learning project exploring passenger survival with the Kaggle Titanic dataset.",
      tags: ["Python", "Machine learning", "Feature engineering"],
      concept: "Turning observations into useful features.", visual: "chart",
      repository: "https://github.com/MohitMahato-1/titanic-survival-prediction", demo: "", screenshot: "", screenshotAlt: "Titanic analysis notebook screenshot",
      details: "Exploratory analysis and feature engineering include family size, travelling alone, and titles extracted from passenger names.",
      result: "Work in progress: the repository lists feature engineering as complete, with model building and evaluation next."
    },
    {
      id: "library", number: "04", category: "SYSTEMS / ORGANIZATION",
      title: "Library system",
      description: "A project centered on organizing a library and making its information easier to manage.",
      tags: ["Library", "Management system"],
      concept: "A little order. A lot to discover.", visual: "catalog",
      repository: "", demo: "", screenshot: "", screenshotAlt: "Library system screenshot",
      details: "Project language, features, and implementation notes to be confirmed and added.",
      result: "Results and project learnings to be added."
    },
    {
      id: "report", number: "05", category: "SYSTEMS / RECORDS",
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
    { title: "Python and data", note: "Tools I’ve used to explore data and build projects.", skills: [
      { name: "Python", status: "Used in projects" },
      { name: "Data analysis", status: "Used in projects" },
      { name: "pandas", status: "Used in projects" },
      { name: "NumPy", status: "Used in projects" },
      { name: "Data visualization", status: "Used in projects" },
      { name: "Machine learning", status: "Used in projects" }
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
