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
  paragraphOne: 'Self-starter with FrontEnd programming experience in HTML, CSS, JavaScript, Typescript, Bootstrap and Git, mySql.',
  paragraphTwo: 'I had more Focus to learn creating efficient and user-friendly interfaces for websites and web applications; also some experience on design areas include photography and architectural design.',
  paragraphThree: 'Also I touched some latest tools in FrontEnd Like: ReactJs, NextJs , SCSS, and BackEnd language like Node.js and Python',
  resume: './jafari-Mahdi.pdf', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'irancukrazda.png',
    title: 'Iran Cukrazda',
    info: 'This website created for the a persian pastry, located in Budapest.',
    info2: 'Dependencies been used in this project: react-router-dom, node-sass (scss), react-geocode, react-google-autocomplete, react-google-maps, react-player ',
    url: 'https://irancukrazda.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/irancukrazda', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kalunba.png',
    title: 'Kalunba Non Profit',
    info: 'This website as made it for an NGO, they located in Budapest and working with refugees and migrants.',
    info2: 'Dependencies been used in this project: react-dom, react-hook-form, lodash-es, hookForm/resolver, aos( scroll animation), Emailjs-com, yup(Form validation), Bootstrap',
    url: 'https://kalunba.netlify.app/',
    repo: 'https://github.com/jafarimahdi/ReactJs/tree/main/kalunba', // if no repo, the button will not show up
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
