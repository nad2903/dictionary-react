import React from "react";
import "./Photos.css"

export default function Photos(props) {
  if (props.photoData) {
    return(
      <div className="Photos">
        <div className="row">
        {props.photoData.map(function(photo, index) {
          return(
            <div className="col-6" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} alt="Visual" className="img-fluid"/>
              </a>
            </div>
          );
        })}
        </div>
      </div>
    )
  } else {
    return null;
  }
}