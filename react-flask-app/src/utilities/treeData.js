import Landing from "../Components/Landing/Landing";
import Resume from "../Components/Resume/Resume";
// import About from "./components/About"

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
            name: "About me",
            displayText: null,
            id: "aboutMap",
            component: "About",
            children: [
              { name: "About me", value: "what is this", id: "about" },
            ],
          },
          {
            name: "Projects",
            id: "projectsMap",
            displayText: null,
            children: [
              { name: "My Projects", value: "cgi-1.jpg", id: "projects" },
            ],
          },
          {
            name: "Contact-Resume",
            id: "resumeMap",
            children: [
              {
                name: "Contact Me",
                value: "cgi-1.jpg",
                id: "resume",
                component: Resume,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default pageData;
