export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
  image: string;
  website?: string;
}

export const educations: EducationItem[] = [
  {
    institution: 'Kalyani Government Engineering College (KGEC)',
    degree: 'B.Tech in Computer Science & Engineering',
    period: 'Jul 2024 - Jun 2028',
    location: 'Kalyani, West Bengal',
    details: 'CGPA: 8.23. Coursework: Web Dev, DSA, OOP, DBMS, Web 3.',
    image: '/company/kgec.png',
    website: 'https://kgec.edu.in',
  },
  {
    institution: 'Santipur Muslim High School',
    degree: 'Higher Secondary (Science Stream, WBCHSE)',
    period: 'Jul 2022 - Jun 2024',
    location: 'Santipur, West Bengal',
    details: 'Coursework: Mathematics, Physics, Chemistry, Computer Science.',
    image: '/company/santipur-muslim-high-school.png',
  },
];
