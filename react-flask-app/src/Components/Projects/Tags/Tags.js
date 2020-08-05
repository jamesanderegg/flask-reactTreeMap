import React from 'react';
import "./tags.css"
const Tags = ({tags, tagsCount}) =>{
console.log(tags)
    return (
      <ul className="tags-ul">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            <div  className="tags-button">
              {tag}{" "}
              
               <span className="badge badge-light">{tagsCount[tag]}</span>
              
            </div>
          </li>
        ))}
      </ul>
    );

}

export default Tags