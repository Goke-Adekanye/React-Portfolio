import React from "react";
import {
  Twitter,
  LinkedIn,
  GitHub,
  Code,
  FindReplace,
  WebOutlined,
  Devices,
  Language,
  Assignment,
  BrightnessMedium,
} from "@material-ui/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Goke Adekanye",
  title: "Front End Developer",
  email: "Example@gmail.com",
  location: "Lagos, NG",
  phone: "+234 80683 *****",

  socials: {
    linkedIn: {
      link: "https://linkedin.com/in/goke-adekanye-ab5a7b139",
      text: "Goke Adekanye",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://github.com/Goke-Adekanye",
      text: "Goke Adekanye",
      icon: <GitHub />,
    },
    Twitter: {
      link: "https://twitter.com/Jvstblvck",
      text: "Jvstblvck",
      icon: <Twitter />,
    },
    Medium: {
      link: "https://gokeadekanye.medium.com",
      text: "Jvstblvck",
      icon: <Assignment />,
    },
  },

  about: [
    {
      icon: <BrightnessMedium />,
      title: "Define",
      description:
        "I conduct user research and brainstorm potential design solutions to the identified problem.",
      step: <i className=" step fa fa-arrow-right"></i>,
    },
    {
      icon: <FindReplace />,
      title: "Blueprint",
      description:
        "I devise high-fidelity designs and explore the technology needed best to get the job done.",
      step: <i className=" step fa fa-arrow-right"></i>,
    },
    {
      icon: <Code />,
      title: "Implement",
      description:
        "I develop creative solutions that solve the problem while also meeting the client's expectations.",
    },
  ],

  services: [
    {
      icon: <WebOutlined />,
      title1: "Web",
      title2: "Development",
      description:
        "As a professional Web Developer,I tend to employ the use of latest/various web technologies such as HTML, CSS, JavaScript, React and Node to build attractive websites or develop web apps which portrays the exact functionalities specified by the client.",
    },
    {
      icon: <Devices />,
      title1: "Responsive",
      title2: "Design",
      description:
        "With the number of people accessing the internet through mobile devices increases every day, prioritizing user experience became a necessity. I build fully responsive cross-browser websites/web apps that automatically adjust on different screen sizes and viewports.",
    },
    {
      icon: <Language />,
      title1: "Testing &",
      title2: "Hosting",
      description:
        "During and after implementation, I use testing libraries such as React testing library to test the site for usability and fixing any bugs. I also make websites/web apps accessible worldwide through hosting, ensuring they are safe and secure with SSL verification.",
    },
  ],

  faqs: [
    {
      id: 1,
      header: "A website proves your brand credibility",
      body: "Over 30% don’t even consider a business if it doesn’t have any website. So, if you want people to think your business is credible, contact Me.",
    },
    {
      id: 2,
      header: "Brands with a website are easily accessible",
      body: "Whenever it comes to engaging with a business, over 63% of customers use a company’s official website. ",
    },
    {
      id: 3,
      header: "Showcase your products/services the best way possible",
      body: "A website provides an avenue for you to showcase your expertise in the best way possible",
    },
    {
      id: 4,
      header: "A website makes your brand more visible",
      body: "Online presence creates a wide demography which significantly boost sales by helping brands to quickly acquire more customers.",
    },
  ],
};
