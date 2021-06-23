import React from "react";
import {
  Twitter,
  LinkedIn,
  GitHub,
  Code,
  FindReplace,
  AccountBalanceWallet,
  SignalCellularAlt,
  School,
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
      icon: <AccountBalanceWallet />,
      title1: "Financial",
      title2: "Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
    {
      icon: <SignalCellularAlt />,
      title1: "Reliable",
      title2: "Signal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
    {
      icon: <School />,
      title1: "Training",
      title2: "Satisfaction",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
  ],

  faqs: [
    {
      id: 1,
      header: "What is Forex?",
      body: "ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
    {
      id: 2,
      header: "What are Signals?",
      body: "ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
    {
      id: 3,
      header: "Any criteria for learning Forex?",
      body: "ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
    {
      id: 4,
      header: "How do I get started?",
      body: "ipsum dolor sit amet consectetur adipisicing elit. Magni velit fuga nam! Libero id perferendis voluptates recusandae laborum, ab totam tenetur consectetur! Provident, sit ipsam!",
    },
  ],
};
