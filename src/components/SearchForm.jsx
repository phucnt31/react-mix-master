import React from "react";

const SearchForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default SearchForm;
