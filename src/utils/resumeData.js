import React from "react";
import {
  Twitter,
  LinkedIn,
  GitHub,
  Person,
  InsertChart,
  VerifiedUser,
  AccountBalanceWallet,
  SignalCellularAlt,
  School,
  Assignment,
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
      icon: <Person />,
      title: "Register",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quae doloremque?",
      step: <i className=" step fa fa-arrow-right"></i>,
    },
    {
      icon: <InsertChart />,
      title: "Start Class",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quae doloremque?",
      step: <i className=" step fa fa-arrow-right"></i>,
    },
    {
      icon: <VerifiedUser />,
      title: "Get Certified",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quae doloremque?",
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
