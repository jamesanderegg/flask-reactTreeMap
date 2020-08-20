// {
//     name: 'The Classic Game: Tetris',
//     id: 'tetris',
//     type: 'game',
//     description: "The classic game, Tetris, built with react hooks, following a freecodecamp tutorial",
//     component: "Tetris",
//     website: null,
//     url: 'https://github.com/jamesanderegg/react_tetris',
//     urlText: 'Github',
//     tags: "game, hooks, tutorial",
//     image: 'https://www.jamesanderegg.com/uploads/images/tetris.png',
//     text: "Use the arrow keys on your keyboard to play."
// },{
//     name: 'The Classic Game: Snake',
//     id: 'snake',
//     type: 'game',
//     description: "Built in React using functional components and hooks. This was a tutorial I followed by Chigabiga on youtube.  ",
//     component: "SnakeApp",
//     website: null,
//     url: 'https://github.com/jamesanderegg/react_snake',
//     urlText: 'Github',
//     tags: "game, react, javascript, tutorial",
//     image: 'https://www.jamesanderegg.com/uploads/images/python.png',
//     text: "Use the arrows on your keyboard to move the snake.  Eat red apples to grow."
// },{
//     name: 'MLB: On Base Percentage',
//     id: 'worldSeries',
//     type: 'animation',
//     description: "A barchart animation, year over year, MLB on base percentage.",
//     component: "WorldSeries",
//     website: null,
//     url: 'https://github.com/jamesanderegg/d3_animatedBarChartContinued',
//     urlText: 'Github',
//     tags: "d3, web scraping, javascript, python, pandas",
//     image: 'https://www.jamesanderegg.com/uploads/images/worldSeries.png',
//     text: "I followed Swizecs tutorial on how to build Moores Law with d3 animations and this is my own interpertaion with MLB stats."
// },
import GoogleGps from './Maps/GoogleGps'
import Denver311 from './Maps/Denver311'
import DenverShooting from './OfficerInvolvedShootings/Shootings'
const projects = [
    
    {
        name: 'Google GPS Data: Heatmap',
        id: 'gpsGoogle',
        type: 'map',
        description: "A Heatmap of my GPS data over the last few years.",
        component: GoogleGps,
        website: null,
        url: 'https://leafletjs.com/',
        urlText: 'Leaflet',
        tags: "javascript, data, heatmap, d3, map",
        image: 'https://www.jamesanderegg.com/uploads/images/heatMap.png',
        text: "I downloaded my GPS data from google and used Leaflet JS to map it.  I also used a heatmap and loading spinner librarys.  It's pulling over 1 million rows from my database so please give it time to load.  "
    },
    {
        name: 'Denver 311: Phone Call Data',
        id: 'denver311',
        type: 'map',
        description: "A map of Denvers phone information hotline for the year 2016.",
        component: Denver311,
        website: null,
        url: 'https://github.com/jamesanderegg/flask-reactTreeMap/tree/master/react-flask-app/src/Components/Projects/Maps/Denver311',
        urlText: 'Github',
        tags: "javascript, data, heatmap, d3, denver, map",
        image: 'https://www.jamesanderegg.com/uploads/images/denver311.png',
        text: "Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.  I've made the data searchable."
    },
    {
        name: 'Gatsby Static Website',
        id: 'snoc',
        type: 'Client Project',
        description: "A website I built for a client in React with Gatsby.",
        component: null,
        website: 'https://snoc.org/',
        url: 'https://github.com/jamesanderegg/schoolofnaturalordercolorado',
        urlText: 'Github',
        tags: "react, gatsby, website, javascript",
        image: 'https://www.jamesanderegg.com/uploads/images/snoc.png',
        text: "A website for the School of the Natural Order of Colorado."
    },
    {
        name: 'Officer-Involved Shootings: Denver',
        id: 'denver-dashboard',
        type: 'dashboard',
        description: "A dashboard of officer involved shootings, built in Power Bi with Data from Denver Open Data Catalog",
        component: DenverShooting,
        website: null,
        url: 'https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings',
        urlText: 'Denver Open Data',
        tags: "power-bi, data-analyst, dashboard, denver",
        image: 'https://www.jamesanderegg.com/uploads/images/treemap-police.png',
        text: "A website for the School of the Natural Order of Coloradoo."
    }
]
export default projects;