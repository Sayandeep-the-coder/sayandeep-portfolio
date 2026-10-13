export interface Certificate {
  file: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
}

export const certificates: Certificate[] = [
  {
    file: '/certificates/stellar-journey-to-mastery.jpg',
    title: 'Stellar Journey to Mastery: Monthly Builder Challenges Certificate',
    issuer: 'Rise In & Stellar',
    date: '2026-06-30',
    credentialUrl: 'https://www.risein.com/certificates/3UX9zFuk',
    credentialId: '3UX9zFuk',
  },
  {
    file: '/certificates/graphrag-inference-hackathon.png',
    title: 'GraphRAG Inference Hackathon by TigerGraph',
    issuer: 'TigerGraph (Unstop)',
    date: '2026-02-15',
  },
  {
    file: '/certificates/into-the-midnight-bootcamp.jpg',
    title: 'INTO the MIDNIGHT Bootcamp - Kolkata',
    issuer: 'Rise In & Midnight',
    date: '2026-02-15',
    credentialUrl: 'https://www.risein.com/certificates/NRcwQBFE',
    credentialId: 'NRcwQBFE',
  },
  {
    file: '/certificates/sheryians-job-ready-cohort.png',
    title: 'Sheryians Coding School - Job Ready Cohort',
    issuer: 'Sheryians Coding School',
    date: '2025-12-18',
    credentialId: '93761aa3',
  },
];

const achievementsConfig = {
  certificates,
};

export default achievementsConfig;
