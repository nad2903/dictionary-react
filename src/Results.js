import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.searchData) {
    return (
      <div className="Results">
        <h2>{props.searchData.word}</h2>
        {props.searchData.phonetics[0].text}
        {" "}<a href={props.searchData.phonetics[0].audio} target="_blank" rel="noreferrer" className="adio-link">
          🔉
        </a>
        {props.searchData.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}