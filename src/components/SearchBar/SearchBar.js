import React from "react";
import styles from './SearchBar.module.css'




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
        <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
            <input type="search-bar" placeholder="search"/>
            <input type="search-bar" placeholder="Where?" />
        </div>
        <div className={styles.SearchBarSubmit}>
        <button>Let's Go</button>
      </div>
        </div>
    )
}

export default SearchBar