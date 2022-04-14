import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../googlecontext/StateProvider";
import { actionTypes } from "../googlecontext/reducer";


function Search({ hideButtons = false }) {
  const [state, dispatch]= useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    history.push("/search");
    dispatch({type: actionTypes.SET_SEARCH_TERM,
    term: input})
  };
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          value={input}
          onChange={inputChangeHandler}
          placeholder="Search Google or type URL"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Felling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button className="searchButtonHidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
            <Button className="searchButtonHidden" variant="outlined">I'm Felling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
