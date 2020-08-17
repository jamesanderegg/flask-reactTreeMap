

//   {
//     name: "",
//     id: "",
//     description: "",
//     component: "",
//     url: "",
//     image: "",
//     text: "",
// }
import GoogleGps from './Maps/GoogleGps'
import Denver311 from './Maps/Denver311'

const projects = [
    {
        name: 'Snake',
        id: 'snake',
        description: "The classic game, Snake, built in React using functional components and hooks.",
        component: "SnakeApp",
        website: null,
        url: 'https://github.com/jamesanderegg/react_snake',
        tags: "game, react, javascript, css, html, tutorial",
        image: 'http://localhost:3000/uploads/images/python.png',
        text: "This was a tutorial I followed by Chigabiga on youtube.  Use the arrows on your keyboard to move the snake.  Eat red apples to grow."
    },
    {
        name: 'A Heatmap of my GPS Data',
        id: 'gpsGoogle',
        description: "A Heatmap of my GPS data over the last few years.",
        component: GoogleGps,
        website: null,
        url: 'https://leafletjs.com/',
        tags: "javascript, data, heatmap, d3, map",
        image: 'http://localhost:3000/uploads/images/heatMap.png',
        text: "I downloaded my GPS data from google and used Leaflet JS to map it.  I also used a heatmap and loading spinner librarys.  It's pulling over 1 million rows from my database so please give it time to load.  "
    },
    {
        name: 'Denver 311: Phone Call Data',
        id: 'denver311',
        description: "A map of Denvers phone information hotline for the year 2016.",
        component: Denver311,
        website: null,
        url: 'https://github.com/jamesanderegg/flask-reactTreeMap/tree/master/react-flask-app/src/Components/Projects/Maps/Denver311',
        tags: "javascript, data, heatmap, d3, denver, css, map",
        image: 'http://localhost:3000/uploads/images/denver311.png',
        text: "Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.  I've made the data searchable."
    },
    {
        name: 'MLB: On base percentage',
        id: 'worldSeries',
        description: "A barchart animation, year over year, MLB on base percentage.",
        component: "WorldSeries",
        website: null,
        url: 'https://github.com/jamesanderegg/part3_barchartTransitions',
        tags: "d3, web scraping, javascript, css, python, pandas",
        image: 'http://localhost:3000/uploads/images/worldSeries.png',
        text: "I followed Swizecs tutorial on how to build Moores Law with d3 animations and this is my own interpertaion with MLB stats."
    },
    {
        name: 'Tetris with React Hooks',
        id: 'tetris',
        description: "The classic game, Tetris, built with react hooks, following a freecodecamp tutorial",
        component: "Tetris",
        website: null,
        url: 'https://github.com/jamesanderegg/react_tetris',
        tags: "game, hooks, html, css, tutorial",
        image: 'http://localhost:3000/uploads/images/tetris.png',
        text: "Use the arrow keys on your keyboard to play."
    },
    {
        name: 'Gatsby Static Website',
        id: 'snoc',
        description: "A website I built for a client in React with Gatsby.",
        component: "SNOC",
        website: 'https://snoc.org/',
        url: 'https://github.com/jamesanderegg/schoolofnaturalordercolorado',
        tags: "react, gatsby, html, css, website, javascript",
        image: 'http://localhost:3000/uploads/images/snoc.png',
        text: "A website for the School of the Natural Order of Coloradoo."
    },
    {
        name: 'Denver Police Officer-Involved Shootings',
        id: 'denver-dashboard',
        description: "A dashboard of officer involved shootings, built in Power Bi with Data from Denver Open Data Catalog",
        component: "SNOC",
        website: 'https://www.denvergov.org/opendata/search?q=Police',
        url: null,
        tags: "python, pandas, power-bi, data-analyst",
        image: null,
        text: "A website for the School of the Natural Order of Coloradoo."
    }
]
export default projects;