import React from "react";
import "./tags.css";
const Tags = ({ tags, tagsCount, registerTag }) => {

  console.log(tags)
  return (
    <div className="tags-container">
      <h5 className="tag-title">Click to sort the projects!</h5>
      <ul className="tags-ul">
      <li className="tag" onClick={registerTag}>
            <div className="tags-button-all" id="all">
              All Projects <span className="badge badge-light"> 4</span>
            </div>
          </li>
        {tags.sort().map((tag) => (
          <li key={tag} className="tag" onClick={registerTag}>
            <div className="tags-button" id={tag}>
              {tag} <span id={tag} className="badge badge-light">{tagsCount[tag]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
