import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jafari Mahdi',
  subtitle: 'JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'jafari-Mahdi.pdf', // if no resume, the button will not show up
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'irancukrazda.png',
    title: 'Iran Cukrazda',
    info: 'this website created for the a persian pastry, located in Budapest, and it was part of the business plan',
    info2: 'Dependencies been used in this project: google-maps-react, node-sass (scss), react-dom, react-geocode, react-google-autocomplete, react-google-maps, react-player, react-router-dom ',
    url: 'https://irancukrazda.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/irancukrazda', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kalunba.png',
    title: 'Kalunba Non Profit',
    info: 'This website as made it for an NGO, they located in Budapest and working with refugees and migrants.',
    info2: 'Dependencies been used in this project: react-dom, lodash-es, hookForm/resolver, aos( scroll animation), Bootstrap, Emailjs-com, react-hook-form, yup(Form validation)',
    url: 'https://kalunba.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/kalunba', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
