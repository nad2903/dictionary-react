import React, { useState }from "react";
import "./Dictionary.css";

export default function Dictionary() {

  let [searchedWord, setSearchedWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(searchedWord);
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
                autoComplete={false}
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