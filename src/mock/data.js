import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mahdi Jafari', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mahdi',
  subtitle: 'A Junior, JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I have a junior level of Problem-Solving, Data Structure, and database management Knowledge, while I learned to pay attention to detail and be open to learn new Tech and Design attitudes',
  paragraphTwo: ' I have experience using HTML5, CSS3, Javascript, Typescript, Bootstrap, SCSS and MySql, Git, GitHub, Trello and had more Focus to learn creating efficient and user-friendly interfaces for websites and web applications; also some experience on architectural design area.',
  paragraphThree: 'Also hands-on: React.js, Next.js, Rest API and Node.js, Python, while working with multiple Operating Systems: Mac, Windows, Linux: { Ubuntu, Mint }.',
  // resume: './jafari-Mahdi.pdf', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kalunba.png',
    title: 'Kalunba Non Profit',
    info: 'This website as made it for an NGO, they located in Budapest and working with refugees and migrants. Dependencies been used in this project:',
    info2: ' react-dom, react-hook-form, lodash-es, hookForm/resolver, aos( scroll animation), Emailjs-com, yup(Form validation), Bootstrap',
    url: 'https://kalunba.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/kalunba', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'irancukrazda.png',
    title: 'Iran Cukrazda',
    info: `This website created for the a persian pastry, located in Budapest. Dependencies been used in this project:`,
    info2: ['react-router-dom, ',' node-sass (scss), ',' react-geocode, ',' react-google-autocomplete, ',' react-google-maps, ', ' react-player'],
    url: 'https://irancukrazda.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/irancukrazda', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'adventure.png',
    title: 'Adventure',
    info: 'A simple React project for practicing the React Router and multi page apps.',
    info2: ' react-dom, react-hook-form, lodash-es, hookForm/resolver, aos( scroll animation), Bootstrap',
    url: 'https://mahdijafari.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/web-site', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mahdijafarii.mj@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jafarimahdi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jafarimahdi',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Mj05172463',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
