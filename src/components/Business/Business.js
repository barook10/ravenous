import React from "react";

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

function Business() {
    return (
        <div>
            <div>
                <img src={business.src} />
            </div>
            <h2>{business.name}</h2>
            <div>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{`${business.state} ${business.zipcode}`}</p>
                <div>
                    <h3>{business.category}</h3>
                    <p>{business.rating}</p>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Business