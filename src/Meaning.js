import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>
        {props.meaning.partOfSpeech}
      </h4>
      {props.meaning.definitions[0].definition}
      <p className="example">
        <em>Example: {props.meaning.definitions[0].example}</em>
      </p>
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}