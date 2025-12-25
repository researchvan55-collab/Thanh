
export interface Education {
  degree: string;
  institution: string;
  major: string;
  minor?: string;
  period: string;
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  source: string;
  url?: string;
  award?: string;
}

export interface ResearchProject {
  title: string;
  role: string;
  fundingSource: string;
  amount: string;
  years: string;
}

export interface Experience {
  period: string;
  institution: string;
  role: string;
  details: string[];
}

export interface Skill {
  area: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  note: string;
}

export interface Award {
  title: string;
  year?: string;
  institution?: string;
}

export interface CVData {
  name: string;
  address: string;
  email: string;
  socials: {
    googleScholar: string;
    linkedIn: string;
    youtube: string;
  };
  education: Education[];
  researchInterests: string[];
  publications: {
    journals: Publication[];
    conferences: Publication[];
  };
  presentations: Publication[];
  projects: ResearchProject[];
  experience: Experience[];
  skills: Skill[];
  awards: Award[];
}
