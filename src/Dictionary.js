import React, { useState }from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {

  let [searchedWord, setSearchedWord] = useState(null);

  function search(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchedWord}`;

    axios.get(apiUrl).then(search);

  }

  function updateSearch(event) {
    setSearchedWord(event.target.value);
  }
    return (
      <div className="Dictionary">
        <div className="container">
          <h1>Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
              <input 
                type="text"
                className="input-group mb-3 form-control" 
                placeholder="Search a word..."
                autoComplete="off"
                autoFocus={true}
                onChange = {updateSearch}
              />
              </div>
              <div className="col-3">
              <input
                type="submit"
                value="🔍"
                className="btn"
                id="search-button"
              />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}