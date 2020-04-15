import React from 'react'; //Importing react
import './Business.css'; // Importing the business class



// the Business class component that renders a Business Object.
class Business extends React.Component {
  render() {
    const  { business }  = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
          <h2>{business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.zipCode}</p>
            </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p className="reviewCount">{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );

  }
}
// Default export for the componenet, So it can be used by other components in the app.
export default Business;
