import React from "react";
import projects from './projectsMap'
import Tags from './Tags/Tags'

const Projects = ()=>{
    const _ = require('lodash')
    let tags = []
    _.each(projects,edge =>{
        if(_.get(edge, 'tags')){
            tags = tags.concat(edge.tags.split(', '))          
        }     
    })
   
    
    let tagCounts = {}
    tags.forEach(tag =>{
        //conditional if it doesnt exist make it 0 or add 1.
        tagCounts[tag] = (tagCounts[tag] || 0) +1;
    })
    
    tags = _.uniq(tags)
    

    return(
 <div className="container">
     <Tags tags={tags} tagsCount={tagCounts}/>
   
 </div>
)};

export default Projects;
