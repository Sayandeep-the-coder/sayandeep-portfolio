export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  name: 'Sayandeep Saha',
  logo: {
    src: '/assets/avatar.jpg',
    alt: 'Sayandeep Saha',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Journey',
      href: '/journey',
    },
    {
      label: 'Certificates',
      href: '/journey/certificates',
    },
  ] as NavItem[],
};
