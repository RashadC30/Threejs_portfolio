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
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  freeaudio,
  freewdev,
  thirdwheel,
  meta,
  weatherapp,
  tripguide,
  robofriends,
  threejs,
  csharp,
  osarumen,
  rohan,
  adrian,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "JavaScript Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Self",
    icon: freewdev,
    iconBg: "#383E56",
    date: "Aug 2021 - Present",
    points: [
      "Use HTML, CSS, and JS to design and edit websites.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Write gaming tools with C++ and C# using Unity and Unreal Engine.",
      "Edit and create APIs for data that can add information when needed.",
    ],
  },
  {
    title: "Freelance Audio Engineer",
    company_name: "Self",
    icon: freeaudio,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Present",
    points: [
      "Mixing and producing sounds in post production .",
      "Installing and setting up audio equipment for live events and recordings.",
      "Recording sounds in-studio and on location.",
      "Creating sound effect to be used to replace dead spots.",
    ],
  },
  {
    title: "Podcast Engineer/Producer",
    company_name: "Third Wheel Podcast Studio",
    icon: thirdwheel,
    iconBg: "#383E56",
    date: "Jul 2020 - Jul 2021",
    points: [
      "Tape and record client's podcast.",
      "Give direction on where the conversation should be steered.",
      "Modify camera angles and lighting.",
      "Edit podcast by adding intros, outros, sound effects and removing or adding sections.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Rashad is a web developer with a passion for learning and innovation. He's continuously striving for optimization and adhering to best practices while maintaining a signature level of personalization in every project. He'd be an irreplaceable asset to any company.",
    name: "Rohan Simmonds",
    designation: "Android Developer",
    company: "Globant LLC",
    image: rohan,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rashad does. His ability to deliver ideal work with minimal direction or information is priceless",
    name: "Osarumen",
    designation: "Entrepreneur",
    company: "MVSTERPIECE",
    image: osarumen,
  },
  {
    testimonial:
      "With Rashad I know I am going to get the best and most reliable work someone can ask for. I can also count on him being available whenever I need his assistance or his input on the direction I should take my podcast",
    name: "Adrian Davis",
    designation: "Entrepreneur",
    company: "Commas",
    image: adrian,
  },
];

const projects = [
  {
    name: "Mr. Weather",
    description:
      "Created with React some JSX and a little bit of CSS, this app has the capability of giving the user an exact reading of the forecast of any city on the planet. All weather information was obtained a from openweather.org, which is a very reliable weather API. With react i was able to give the user the option to search for temperature reading, wind direction and speed, humidity amoung other things in either fahrenheit or celsius.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/RashadC30/Mr.-Weather_React",
  },
  {
    name: "Robo-Friends",
    description:
      "When you have a need to give you email list a little jazzing up this React project helps you keep each person's name, email and whatever else you need togther. Also gives them a entertaining robot head from an api known as robohash.org. The search box give you the freedom to find each robot quickly if you don't have the time to scroll.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
    ],
    image: robofriends,
    source_code_link: "https://github.com/RashadC30/Robo-Friends",
    live_demo_link: "rashadc30.github.io/robo-friends/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
