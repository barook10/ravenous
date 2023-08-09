import React from "react";
import styles from "./Business.module.css"

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
const Business = () => {
    return (
      <div className={styles.Business}>
        <div className={styles.imageContainer}>
          <img src={business.src} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className={styles.BusinessInformation}>
          <div className={styles.BusinessAddress}>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div className={styles.BusinessReviews}>
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  };
  


export default Business