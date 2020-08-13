import Landing from "../Components/Landing/Landing";
import Resume from "../Components/Resume/Resume";

import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects"
// import About from "./components/About"
import React from "react";

const pageData = [
  {
    name: "Portfolio",
    children: [
      {
        name: "DataFluent",
        id: "datafluent",
        displayText: "A cover page.",
        component: Landing,
        children: [
          {
            name: "ABOUT ME",
            displayText: null,
            id: "aboutMap",
            component: <About />,
            children: [
              { name: "About me", value: "what is this", id: "about" },
            ],
          },
          {
            name: "MY WORK",
            id: "projectsMap",
            component: <Projects />,
            children: [
              {
                name: "My Work",
                value: "cgi-1.jpg",
                id: "projects",
                
              },
            ],
          },
          {
            name: "Resume",
            id: "resumeMap",
            children: [
              {
                name: "Contact Me",
                value: "cgi-1.jpg",
                id: "resume",
                component: <Resume />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default pageData;
