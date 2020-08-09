

//   {
//     name: "",
//     id: "",
//     description: "",
//     component: "",
//     url: "",
//     image: "",
//     text: "",
// }

const projects = [
    {
        name: 'Snake',
        id: 'snake',
        description: "The classic game snake built in React with a game loop.",
        component: "SnakeApp",
        url: '',
        tags: "game, hooks, react, javascript, css, html, tutorial",
        image: '/static/react/images/python.png',
        text: "This was a tutorial I followed by Chigabiga on youtube.  Use the arrows on your keyboard to move the snake.  Eat red apples to grow."
    },
    {
        name: 'My GPS Data',
        id: 'gpsGoogle',
        description: "A Heatmap of my GPS data over the last few years.",
        component: "GoogleGps",
        url: 'https://leafletjs.com/',
        tags: "javascript, data, leaflet, heatmap, d3, map",
        image: '',
        text: "I downloaded my GPS data from google and used Leaflet JS to map it.  I also used a heatmap and loading spinner librarys.  It's pulling over 1 million rows from my database so please give it time to load.  "
    },
    {
        name: '2016 Denver 311 Phone Call Data',
        id: 'denver311',
        description: "A map of Denvers phone information hotline, 311, for the year 2016",
        component: "Denver311",
        url: '',
        tags: "javascript, data, leaflet, heatmap, d3, denver, css, map",
        image: '/static/react/images/denver311.png',
        text: "Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.  I've made the data searchable."
    },
    {
        name: 'World Series On Base Pecentage, Animated',
        id: 'worldSeries',
        description: "A barchart animation, year over year, MLB on base percentage.",
        component: "WorldSeries",
        url: 'https://github.com/jamesanderegg/part3_barchartTransitions',
        tags: "d3, transitions, web scraping, javascript, css, data analysis, baseball",
        image: '',
        text: "I followed Swizecs tutorial on how to build Moores Law with d3 animations and this is my own interpertaion with MLB stats."
    },
    {
        name: 'Tetris with React Hooks',
        id: 'tetris',
        description: "The classic game of tetris built with react hooks, following a freecodecamp tutorial",
        component: "Tetris",
        url: 'https://github.com/jamesanderegg/react_tetris',
        tags: "game, hooks, html, css, tutorial",
        image: '',
        text: "This was a tutorial I followed."
    }
]
export default projects;