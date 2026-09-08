export const siteConfig = {
  name: "Md Fahim Faysal",
  tagline: "Bioinformatics Researcher · Full-Stack Developer · Competitive Programmer",
  shortBio:
    "CSE graduate from RUET and Research Assistant in a bioinformatics lab, building algorithms, R packages, and web platforms for drug and vaccine discovery through integrative OMICS analysis. I also ship production software and have a strong background in competitive programming.",
  email: "fahimfaysal.cse.ruet@gmail.com",
  phone: "+8801625188403",
  location: "Rajshahi, Bangladesh",
  github: "https://github.com/faysalfahim",
  linkedin: "https://www.linkedin.com/in/fahim-faysal-a9750019b/",
  researchGate: "https://www.researchgate.net/profile/Md-Fahim-Faysal-2",
  resumeUrl: "/Fahim_Resume.pdf",
};

export type PublicationStatus =
  | "published"
  | "conference"
  | "under-review"
  | "submitted"
  | "preprint";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  doi?: string;
  link?: string;
  pages?: string;
}

export const publications: Publication[] = [
  // ───────── Published (journal) ─────────
  {
    title:
      "In-silico identification of SNPs associated with breast cancer for disclosing pathogenetic processes and therapeutic candidates",
    authors: "Ali, M., ..., Faysal, M. F. F., et al.",
    venue: "Discover Oncology",
    year: 2026,
    status: "published",
    doi: "10.1007/s12672-026-05809-0",
    link: "https://doi.org/10.1007/s12672-026-05809-0",
  },
  {
    title:
      "In-Silico discovery of Pediatric Acute-Myeloid-Leukemia (pAML) causing druggable molecular signatures through single-cell RNA-Seq profile analysis",
    authors: "Ahmed, M. F., ..., Faysal, M. F. F., et al.",
    venue: "PLOS ONE, 20(10), e0335410",
    year: 2025,
    status: "published",
    doi: "10.1371/journal.pone.0335410",
    link: "https://doi.org/10.1371/journal.pone.0335410",
  },
  {
    title:
      "Multi-Transcriptome-Informed Network Pharmacology Reveals Novel Biomarkers and Therapeutic Candidates for Parkinson's Disease",
    authors: "Pappu, M.A.A., ..., Faysal, M. F., et al.",
    venue: "Genes, 16(12), 1459",
    year: 2025,
    status: "published",
    doi: "10.3390/genes16121459",
    link: "https://doi.org/10.3390/genes16121459",
  },
  {
    title:
      "In-silico identification of genetic variants associated with chronic lymphocytic leukemia for diagnostic and therapeutic applications",
    authors: "Islam, M. S., Mollah, M. H., Ahsan, M. A., ..., Faysal, M. F., et al.", // TODO: verify author order/inclusion
    venue: "Scientific Reports, 16, 14545",
    year: 2026,
    status: "published",
    doi: "10.1038/s41598-026-45456-7",
    link: "https://doi.org/10.1038/s41598-026-45456-7",
  },
  {
    title:
      "Discovery of shared molecular signatures and their functions associated with type-2 diabetes and myocardial infarction, and repurposing common drugs",
    authors: "Ahmed, R., Antu, U. H., Noor, T., Faysal, M. F., Akter, M. T., Nesa, M., & Mollah, M. N. H.",
    venue: "Computational Biology and Chemistry",
    year: 2026,
    status: "published",
    doi: "10.1016/j.compbiolchem.2026.109036",
    link: "https://doi.org/10.1016/j.compbiolchem.2026.109036",
  },
  {
    title: "Genetic underpinnings of type-2 diabetes (T2D) with colorectal cancer (CRC): In-silico discovery of common molecular signatures, pathogenetic processes and therapeutic candidates", // could not be resolved via search
    authors: "Ahmmed, R., ..., Faysal, M. F. et al.", // TODO: confirm
    venue: "Journal of Genetic Engineering and Biotechnology",
    year: 2026,
    status: "published",
    doi: "10.1016/j.jgeb.2026.100667",
    link: "https://doi.org/10.1016/j.jgeb.2026.100667",
  },

  // ───────── Conference ─────────
  {
    title:
      "In-Silico Identification of Shared Hub-Genes Between Idiopathic Pulmonary Fibrosis and Tuberculosis & Drug Repurposing",
    authors: "Faysal, M. F., Afroge, S., & Noor, T.",
    venue: "IEEE BECITHCON 2024",
    year: 2024,
    status: "conference",
    pages: "67–72",
    doi: "10.1109/BECITHCON64160.2024.10962684",
    link: "https://doi.org/10.1109/BECITHCON64160.2024.10962684",
  },
  {
    title:
      "Discovery of SARS-CoV-2 and Dengue-Virus Co-Infections Causing Shared Host Key-Genes for Diagnosis and Therapies",
    authors: "Noor, T., Faysal, M. F., Sadad, N. U., & Mondal, M. N. I.",
    venue: "ICRSDS4IR 2024, Rajshahi",
    year: 2024,
    status: "conference",
  },

  // ───────── Under review ─────────
  {
    title:
      "Identification of Shared Host Key-Genes (shKGs) Linking idiopathic pulmonary fibrosis (IPF) to Tuberculosis (TB) through RNA-Seq Profile Analysis for Dual-Targeted Diagnostic and Therapeutic Applications",
    authors: "Faysal, M. F. et al.",
    venue: "BioMedinformatics",
    year: 2026,
    status: "under-review",
  },
  {
    title:
      "Computational identification of shared host key-genes and their mechanisms linking type-2 diabetes to tuberculosis, followed by dual-targeted drug repurposing",
    authors: "Faysal, M. F. et al.",
    venue: "Infection, Genetics and Evolution",
    year: 2026,
    status: "under-review",
  },
  {
    title:
      "Identification of shared host key-genes and molecular mechanisms associated with Dengue-SARS-CoV-2 coinfection through integrated RNA-seq profile analysis for prioritizing therapeutic candidates",
    authors: "Tasfia Noor, Faysal, M. F. et al.",
    venue: "Viruses",
    year: 2026,
    status: "under-review",
  },

  // ───────── Submitted ─────────

  // ───────── Preprints (verify status — these DOIs look like self-archived/preprint records) ─────────
  {
    title: "FlexAutoDock: A Flexible Platform for Automated Molecular Docking and Virtual Screening of Natural and Synthetic Compounds", // could not be resolved via search
    authors: "Ahmed, M.F, Faysal, M.F, et al.", // TODO: confirm
    venue: "bioRxiv",
    year: 2026,
    status: "preprint",
    doi: "10.64898/2026.08.11.744098",
    link: "https://doi.org/10.64898/2026.08.11.744098",
  },
  {
    title: "In silico transcriptomic analysis reveals shared molecular signatures and immune-associated pathways between Hashimoto’s thyroiditis and type 2 diabetes with exploratory drug repurposing", // could not be resolved via search
    authors: "Sharma, Ovi,.., Faysal, M.F, et al.", // TODO: confirm
    venue: "bioRxiv",
    year: 2026,
    status: "preprint",
    doi: "10.64898/2026.02.16.706089",
    link: "https://doi.org/10.64898/2026.02.16.706089",
  },
];

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: "Research Assistant",
    organization: "Bioinformatics Lab (Dry), Dept. of Statistics, Rajshahi University",
    location: "Rajshahi, Bangladesh",
    period: "Feb 2024 – Present",
    description:
      "Designing and implementing bioinformatics algorithms, R packages, and web platforms for drug and vaccine discovery via integrative analysis of molecular OMICS data — genomics, transcriptomics, proteomics, and metagenomics.",
    tags: ["R", "Bioinformatics", "Drug Discovery", "OMICS", "Algorithm Design"],
  },
  {
    role: "Software Developer",
    organization: "RemoteIntegrity LLC",
    location: "Clearwater, Florida, USA (Remote)",
    period: "Jan 2025 – Jul 2025",
    description:
      "Built a custom CRM with Node.js, MySQL, and React.js; integrated third-party APIs (Apploye, YouTube); developed a scalable job-application and course-management platform serving 1000+ daily users.",
    tags: ["Node.js", "React.js", "MySQL", "CRM", "REST APIs"],
  },
];

export interface Project {
  name: string;
  description: string;
  language: string;
  repoUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "Exam-Scheduler",
    description:
      "A scheduling tool that generates conflict-free exam timetables using constraint-based algorithms.",
    language: "TypeScript",
    repoUrl: "https://github.com/faysalfahim/Exam-Scheduler",
    tags: ["TypeScript", "Scheduling", "Algorithms"],
  },
  {
    name: "FlexAutoDock",
    description:"FlexAutoDock eases the hassle of non-tech researchers to explore the molecular docking analysis with just a few clicks.",
    language: "Python",
    repoUrl: "https://github.com/faysalfahim/FlexAutodock",
    tags: ["Python","TypeScript", "Docking Platform"],
  },
  {
    name: "FootyLive",
    description:"Trying to accumulate the whole football world in a place to easily track down all the info.",
    language: "TypeScript",
    repoUrl: "https://github.com/faysalfahim/FootyLive",
    tags: ["TypeScript", "Live Scores", "Transfer Updates"],
  },
  
];

export interface CPStat {
  platform: string;
  handle?: string;
  rating?: string;
  maxRating?: string;
  problems?: string;
  highlight: string;
}

export const cpStats: CPStat[] = [
  {
    platform: "Codeforces",
    rating: "Expert",
    maxRating: "1686",
    problems: "650+",
    highlight: "Expert · Max 1686",
  },
  {
    platform: "CodeChef",
    maxRating: "1744",
    highlight: "Max Rating 1744",
  },
  {
    platform: "AtCoder / HackerEarth / LightOJ / LeetCode",
    problems: "200+",
    highlight: "200+ problems solved",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Scripting",
    skills: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "Node.js",
      "React.js",
      "Angular.js",
      "Python",
      "R",
      "HTML",
      "CSS",
      "SQL",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "OpenCV",
      "Scikit-learn",
      "Random Forest",
    ],
  },
  {
    category: "Bioinformatics",
    skills: [
      "LIMMA",
      "DESeq2",
      "WGCNA",
      "PPI Network Analysis",
      "ggplot2",
      "ComplexHeatmap",
      "Plotly",
      "Biomarker Discovery",
      "Molecular Docking",
      "ADMET Analysis",
    ],
  },
  {
    category: "Cheminformatics & Structural Biology",
    skills: ["RDKit", "Open Babel", "PyMOL", "Discovery Studio Visualizer"],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
}

export const education: EducationEntry[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    location: "Rajshahi, Bangladesh",
    period: "2019 – 2024",
    result: "CGPA 3.31 / 4.00 (Last 4 semesters AVG 3.50/4.00 )",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Adamjee Cantonment College",
    location: "Dhaka, Bangladesh",
    period: "2017 – 2019",
    result: "GPA 5.00 / 5.00",
  },
];

export interface Award {
  title: string;
  organization: string;
  period?: string;
  description?: string;
}

export const awards: Award[] = [
  {
    title: "Leadership Award",
    organization: "RUET CSE Department",
    description: "Recognised for outstanding leadership and contribution to departmental activities.",
  },
  {
    title: "Class Representative",
    organization: "RUET CSE Department",
    period: "2019 – 2021",
    description: "Elected class representative, bridging communication between students and faculty.",
  },
];
