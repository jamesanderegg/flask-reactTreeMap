import React from "react";
import "./tags.css";
const Tags = ({ tags, tagsCount, registerTag }) => {
  return (
    <>
      <h6 className="tag-title">Click to sort the projects!</h6>
      <ul className="tags-ul">
        {tags.sort().map((tag) => (
          <li key={tag} className="tag" onClick={registerTag}>
            <div className="tags-button" id={tag}>
              {tag} <span className="badge badge-light">{tagsCount[tag]}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tags;
