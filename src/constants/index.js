import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Java,
  QA,
  SwipeRight,
  MealsOnWheels,
  Waves,
  BioLab,
  QAweb,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Engineer',
    icon: web,
  },
  {
    title: 'Technical Consultant',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Java',
    icon: Java,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Accounts Assistant Intern',
    company_name: 'Swipe Right PR',
    icon: SwipeRight,
    iconBg: '#FFFFFF',
    date: 'Aug 2020 - Sep 2020',
    points: [
      'Supported senior account managers in the development and execution of PR campaigns.',
      ' Conducted research and analysis to inform campaign planning and evaluation.',
      'Maintained client files and databases, collaborated on event planning, and provided exceptional customer service.',
      'Built and maintained positive relationships with clients, vendors, and media contacts.',
    ],
  },
  {
    title: 'Technical Consultant (Software Engineer)',
    company_name: 'QA',
    icon: QA,
    iconBg: '#E6DEDD',
    date: 'June 2022 - Dec 2022',
    points: [
      `Successfully completed a 12-week intensive training bootcamp,
      demonstrating proficiency in key technical skills such as Javascript, React,
      and MySQL and MongoDB`,
      `Trained in computer programming, documenting, testing, and bug fixing to create and maintain applications and frameworks.`,
      `Demonstrated a strong commitment to continuous learning and development
      by actively engaging in self-directed study and independent learning (15 hours weekly)`,
      `Contributed to the team's success by collaborating on cross-functional
      projects and initiatives, showcasing strong communication and collaboration skills`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Harvard University needs to inviestigate this man for always delivering perfection.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Area 51 Inc',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Faizaan does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'Pearson Hardman LLP',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Faizaan optimized my ship, our speed increased by 10 knots (50%). We can't thank him enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: 'The Black Pearl',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Meals On Wheels',
    description:
      'A web application for sharing unused ingredients and meals to individuals at home who are unable to purchase or prepare their own meals..',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Spring Boot',
        color: 'green-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'pink-text-gradient',
      },
    ],
    image: MealsOnWheels,
    source_code_link: 'https://github.com/DevFaizaan/MealsOnWheels',
  },
  {
    name: 'QA Cinemas',
    description: `QA Cinemas which is an example of a typical web application for a cinema. 
      It includes listings of current & upcoming movies, booking & payment functionality, 
      information about the cinema, and a search bar to find movies that the cinema shows.`,
    tags: [
      {
        name: 'MERN Stack',
        color: 'blue-text-gradient',
      },
      {
        name: 'Jira/Trello',
        color: 'green-text-gradient',
      },
      {
        name: 'Mocha/Chai',
        color: 'pink-text-gradient',
      },
    ],
    image: QAweb,
    source_code_link: 'https://github.com/DevFaizaan/qa-cinemas',
  },
  {
    name: 'Waves Music Player',
    description: 'A fancy music player app.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'SASS',
        color: 'pink-text-gradient',
      },
    ],
    image: Waves,
    source_code_link: 'https://github.com/DevFaizaan/Music-Player-App',
  },
  {
    name: 'Biolab Breakout',
    description: `2D platformer game that features a thrilling boss battle at the end. The game offers multiple levels, 
      each with diverse enemies, obstacles, and powerups to collect. The player's ultimate goal is to reach 
      the final level and defeat the boss, which provides a satisfying conclusion to the game. With immersive 
      graphics, engaging gameplay, and an epic boss battle, this platformer game provides a challenging and 
      exciting experience for players of all skill levels.`,
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'UI/UX',
        color: 'pink-text-gradient',
      },
    ],
    image: BioLab,
    source_code_link: 'https://github.com/DevFaizaan/BioLab_Breakout',
  },
];

export { services, technologies, experiences, testimonials, projects };
