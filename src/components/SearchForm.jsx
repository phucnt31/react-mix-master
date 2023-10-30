import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = () => {
  return (
    <Wrapper>
      <form className="form">
        <input
          type="text"
          name="search"
          className="form-input"
          defaultValue="vodka"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
