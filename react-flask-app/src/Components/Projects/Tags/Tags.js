import React from 'react';
import "./tags.css"
const Tags = ({tags, tagsCount, tagProject}) =>{

    return (
      <>
      
      <h6 className="tag-title">Click to sort the projects!</h6>
      <ul className="tags-ul">
        {tags.map((tag) => (
          <li key={tag} className="tag" onClick={tagProject}>
            <div className="tags-button">
              {tag}{" "}
              
               <span className="badge badge-light">{tagsCount[tag]}</span>
              
            </div>
          </li>
        ))}
      </ul>
      </>
    );

}

export default Tags