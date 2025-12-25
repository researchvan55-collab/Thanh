
import { CVData } from './types';

export const cvData: CVData = {
  name: "VAN THANH PHAN, Ed.D.",
  address: "346 Ben Van Don, Ward 1, District 4, Ho Chi Minh City",
  email: "thanhptv@ueh.edu.vn",
  socials: {
    googleScholar: "https://scholar.google.com",
    linkedIn: "https://www.linkedin.com",
    youtube: "https://www.youtube.com"
  },
  education: [
    {
      degree: "Ed.D.",
      institution: "Texas Tech University",
      major: "Instructional Technology",
      minor: "Business Management",
      period: "1/2012 – 12/2016"
    },
    {
      degree: "M.A.",
      institution: "Murray State University",
      major: "Teaching English to Speakers of Other Languages",
      period: "1/2010 – 12/2011"
    },
    {
      degree: "B.A.",
      institution: "Ho Chi Minh City University of Education, Vietnam",
      major: "English Language Teaching",
      minor: "Chinese",
      period: "8/2004 – 8/2008"
    }
  ],
  researchInterests: [
    "AI literacy",
    "Artificial intelligence in education",
    "Multimedia learning",
    "Digital health and well-being in education"
  ],
  publications: {
    journals: [
      {
        authors: "Phan, V. T.",
        year: 2023,
        title: "Effects of background music in instructional videos on learners’ retention",
        source: "The Journal of Educators Online, 20(3)",
        url: "https://doi.org/10.9743/JEO.2023.20.3.4"
      },
      {
        authors: "Back, S. M., Tseng, W., Li, J., Wang, Y., Phan, V. T., & Yeter, I. H.",
        year: 2015,
        title: "Training neighborhood residents to conduct a survey",
        source: "Journal of Higher Education Outreach and Engagement, 19(2), 175-194",
        url: "https://files.eric.ed.gov/fulltext/EJ1067023.pdf"
      },
      {
        authors: "Phan, V. T., & Hoover, J. D.",
        year: 2014,
        title: "The distance MBA: A need for guiding philosophy and theories",
        source: "Development in Business Simulation and Experiential Learning, 41, 361-370",
        award: "Best Paper Award, Innovation and Future Direction for Education Track",
        url: "https://absel-ojs-ttu.tdl.org/absel/article/view/2140"
      }
    ],
    conferences: [
      {
        authors: "Phan, V. T., & Hoang, Q. B.",
        year: 2025,
        title: "Generative AI for English for Specific Purposes: Examining the effects of GenAI types and response complexity on student acceptance",
        source: "Intl Conference on Future Language Learning, Beijing"
      },
      {
        authors: "Do, T. N., Phan, V. T., & Phan, T. T. N.",
        year: 2025,
        title: "Effects of Wordwall on third graders’ vocabulary learning and perceptions",
        source: "Intl Conference on Future Language Learning, Beijing"
      },
      {
        authors: "Vu, H. D. et al.",
        year: 2021,
        title: "Research on learning and training methods based on information technology (eLearning) in higher education",
        source: "National Agency for Science and Technology Information, Vietnam"
      }
    ]
  },
  presentations: [
    {
      authors: "Phan, V. T. & Vo, H. K. N.",
      year: 2024,
      title: "Impacts of generative artificial intelligence chatbots and prompt types on students’ writing engagement",
      source: "GloCALL 2024"
    },
    {
      authors: "Phan, V. T. & Vo, H. K. N.",
      year: 2024,
      title: "Impacts of generative artificial intelligence chatbots and prompt types on Students’ Acceptance",
      source: "VietTESOL International Conference 2024"
    }
  ],
  projects: [
    {
      title: "Research on Building Models and Technology Application Solutions in Student Support Services",
      role: "Co-investigator",
      fundingSource: "Ministry of Education and Training, Vietnam",
      amount: "$14,500",
      years: "2024-2025"
    },
    {
      title: "Effects of Background Music in Instructional Videos on Learners’ Retention",
      role: "Principal investigator",
      fundingSource: "University of Economics Ho Chi Minh City",
      amount: "$3,000",
      years: "2022"
    },
    {
      title: "eLearning and MOOCs Research in Vietnam",
      role: "Co-investigator",
      fundingSource: "Ministry of Education and Training, Vietnam",
      amount: "$100,000",
      years: "2019-2021"
    }
  ],
  experience: [
    {
      period: "2017 – Present",
      institution: "University of Economics, Ho Chi Minh City",
      role: "Lecturer & Researcher",
      details: [
        "Delivering lectures in Research Methodology, Tech and Language Education.",
        "Mentoring theses and internship reports.",
        "Managing SKY English Center (Moodle-based hybrid learning)."
      ]
    },
    {
      period: "2014 – 2016",
      institution: "Texas Tech University",
      role: "Instructional Designer / GA",
      details: [
        "Designed and managed online courses using Blackboard.",
        "Consulted on instructional system design theories.",
        "Produced accessible learning materials."
      ]
    }
  ],
  skills: [
    { area: "Data Analytics & Statistics", level: "Advanced", note: "Proficient in SPSS" },
    { area: "LMS", level: "Advanced", note: "Moodle, Canvas, Blackboard" },
    { area: "Instructional Design Tools", level: "Advanced", note: "Articulate Storyline, Captivate, H5P" },
    { area: "Media Production", level: "Advanced", note: "DSLR, Adobe Premiere, Audacity" },
    { area: "AI & Learning Analytics", level: "Intermediate", note: "Generative AI for Instruction" }
  ],
  awards: [
    { title: "Excellent Lecturer Awards (2019, 2020, 2022)", institution: "UEH" },
    { title: "ABSEL Best Paper Award (2014)", institution: "ABSEL" },
    { title: "Silver Medal, Vietnam National Table Tennis Championship for Students (2005)" }
  ]
};
