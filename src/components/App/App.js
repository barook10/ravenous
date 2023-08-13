import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  src: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Pizza',
  address: 'NY',
  city: 'NY',
  state: 'NY', 
  zipcode : '540', 
  category: 'pizza', 
  rating: '4.0', 
  reviewCount: '20'
}

const businesses = [business, business, business, business, business, business]

const App = () => {

  const searchYelp = (term , location, sortBy) => {
  console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
}

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
