export const profile = {
  name: 'V. Enbachozhan',
  initials: 'VE',
  title: 'AI/ML Engineer',
  subtitle: 'Generative AI & Data Science',
  location: 'Cuddalore, Tamil Nadu, India',
  phone: '+91 90437 27653',
  phoneHref: 'tel:+919043727653',
  email: 'venbachozhan@gmail.com',
  github: 'https://github.com/enbachozhan',
  linkedin: 'https://www.linkedin.com/in/enbachozhan-v-8609682a5',
  resume: '/Enbachozhan_Resume.pdf',
  resumeName: 'Enbachozhan_Resume.pdf',
  photo: '/enbachozhan.jpg',
  caption: 'AI · ML · GenAI',
  intro:
    'AI & Data Science undergraduate building Generative AI applications, machine learning pipelines and NLP systems with Python, TensorFlow and PyTorch.',
  about:
    'I am an AI & Data Science undergraduate with hands-on experience building Generative AI applications, machine learning pipelines and NLP systems. I work with Python, TensorFlow and PyTorch, and with LLM-driven solutions including prompt engineering and API integration. My internships and projects have delivered measurable results, including 92% model accuracy, a 91% F1-score and a 40% reduction in data-processing time.',
}

export const nav = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Certifications', 'Impact', 'Contact']

export const education = [
  { degree: 'B.Tech, Artificial Intelligence and Data Science', place: 'PGP College of Engineering and Technology, Namakkal (Affiliated to Anna University, Chennai)', period: 'Sep 2023 – Oct 2027', score: 'CGPA: 8.8 / 10.0' },
]

export const skills = [
  { cat: 'Generative AI & LLMs', items: ['Prompt Engineering', 'LLM Integration (ChatGPT, Claude, Generative AI APIs)', 'Conversational AI Assistants', 'RAG Concepts'] },
  { cat: 'Machine Learning & Deep Learning', items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Predictive Modelling', 'NLP', 'Computer Vision'] },
  { cat: 'Programming & Data Science', items: ['Python (Pandas, NumPy, Matplotlib, Seaborn)', 'Java', 'C', 'SQL', 'EDA', 'Feature Engineering', 'Statistical Analysis'] },
  { cat: 'Cloud, Tools & Deployment', items: ['Google Cloud', 'Oracle Cloud (OCI)', 'Git', 'Flask', 'RESTful APIs', 'Streamlit', 'Jupyter Notebook', 'VS Code'] },
  { cat: 'Databases', items: ['MySQL', 'SQLite', 'MongoDB (basics)'] },
]

export const projects = [
  {
    title: 'Generative AI Chatbot', icon: 'Bot',
    tools: ['Python', 'Flask', 'NLP', 'Prompt Engineering'],
    objective: 'A GenAI-powered conversational assistant with under 2-second response latency.',
    points: [
      'Engineered a GenAI-powered conversational assistant with <2-second response latency.',
      'Applied prompt engineering and integrated real-time RESTful APIs, boosting response relevance by 50%.',
    ],
  },
  {
    title: 'Customer Churn Prediction', icon: 'TrendingDown',
    tools: ['Scikit-learn', 'XGBoost', 'Streamlit'],
    objective: 'An ensemble model that identifies high-risk customers with a 91% F1-score.',
    points: [
      'Built an ensemble model (XGBoost + Random Forest) identifying high-risk customers with a 91% F1-score.',
      'Engineered 20+ predictive features from raw transactional data and delivered retention insights via an interactive Streamlit dashboard.',
    ],
  },
  {
    title: 'StrengthX AI', icon: 'Brain',
    tools: ['Python', 'Flask', 'GenAI', 'NLP'],
    objective: 'A GenAI assistant on a Flask backend supporting concurrent multi-user sessions.',
    points: [
      'Built a GenAI assistant on a Flask backend supporting concurrent multi-user sessions.',
      'Integrated real-time RESTful APIs, increasing response relevance by 45%.',
    ],
  },
  {
    title: 'VeloxGuard AI — Phishing Detection System', icon: 'ShieldCheck',
    tools: ['ML', 'Python', 'Streamlit', 'Random Forest'],
    objective: 'A real-time phishing detector built on a Random Forest classifier trained on the UCI dataset.',
    points: [
      'Developed a real-time phishing detector using a Random Forest Classifier trained on the UCI dataset.',
      'Engineered a heuristic engine extracting 30 URL features via Python Regex for instant threat classification.',
    ],
  },
]

export const experience = [
  {
    role: 'Machine Learning Intern', org: 'Covai Tech Solutions', date: 'Dec 2025',
    points: [
      'Developed and optimised ML models achieving 92% accuracy on predictive test sets through systematic hyperparameter tuning.',
      'Applied advanced feature engineering to minimise overfitting, improving model generalisation on unseen data.',
    ],
  },
  {
    role: 'AI & Data Science Intern', org: 'Rgreens, Madurai', date: 'Jul 2025',
    points: [
      'Automated data-cleaning pipelines in Python, cutting manual processing time by 40%.',
      'Conducted EDA on datasets of 10,000+ rows, uncovering business patterns that informed decision-making.',
      'Built and evaluated ML classification models for real-world predictive use cases.',
    ],
  },
]

export const certifications = [
  { title: 'TensorFlow Developer Certificate', issuer: 'Google' },
  { title: 'Professional Machine Learning Certificate', issuer: 'Google' },
  { title: 'Cloud Infrastructure (OCI) AI Foundations Associate', issuer: 'Oracle' },
  { title: 'Cisco Certifications', issuer: 'Cisco', text: 'Python Essentials, Data Science, Cybersecurity Essentials and IoT.' },
]

export const impact = [
  { value: '92%', label: 'Model accuracy', text: 'Tuned ML models at Covai Tech Solutions.' },
  { value: '91%', label: 'F1-score', text: 'Churn prediction ensemble model.' },
  { value: '40%', label: 'Less processing time', text: 'Automated data-cleaning pipelines at Rgreens.' },
  { value: '<2s', label: 'Response latency', text: 'GenAI chatbot with real-time API integration.' },
]

export const focus = ['Generative AI', 'LLM Integration', 'Machine Learning', 'NLP', 'Computer Vision', 'Data Science']
