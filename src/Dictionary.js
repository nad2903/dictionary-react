import React, { useState }from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {

  let [searchedWord, setSearchedWord] = useState(null);
  let [searchResult, setSearchResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(response) {
    setSearchResult(response.data[0]);
  }

  function pexelsSearch(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchedWord}`;
    axios.get(apiUrl).then(search);

    let pexelsApiKey = "563492ad6f91700001000001f32e8e83944840f59facfd8d1fb927c5";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchedWord}&per_page=2`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, {headers: headers}).then(pexelsSearch);
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
          <span className="search-results">
            <Results searchData={searchResult}/>
            <Photos photoData={photos} />
          </span>
        </div>
      </div>
    );
}