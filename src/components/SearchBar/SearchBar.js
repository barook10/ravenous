import React from "react";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };



function SearchBar() {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
      };
    
    return (
        <div>
        <div>
        <ul>{renderSortByOptions()}</ul>
        </div>
        <div>
            <input type="search-bar" placeholder="search"/>
            <input type="search-bar" placeholder="Where?" />
        </div>
        <div>
            <a> Let's Go </a>
        </div>
        </div>
    )
}

export default SearchBar