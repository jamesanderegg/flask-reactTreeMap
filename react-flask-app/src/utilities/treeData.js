import Landing from '../Components/Landing/Landing'
// import About from "./components/About"

const pageData = [{
	"name": "Portfolio",
	"children": [
		{
			"name": "DataFluent",
			"id" : "datafluent",
			"displayText": "A cover page.",
			"component": Landing,
			"children": [
				{
					"name": "About me",
					"displayText": null,
					"id" : "aboutMap",
					"component": "About",
					"children": [
						{ "name": "File", "value": "cgi-1.jpg",
						"id" : "about"
					 }
					]
				},
				{
					"name": "Projects",
					"id" : "projectsMap",
					"displayText": null,
					"children": [
						{ "name": "text", "value": "cgi-1.jpg",
						"id" : "projects", }
					]
				},
				{
					"name": "Resume-Contact ",
					"id" : "resumeMap",
					"children": [
						{ "name": "File", "value": "cgi-1.jpg",
						"id" : "resume", }
					]
				}
			]
		}
	]
}]

export default pageData;