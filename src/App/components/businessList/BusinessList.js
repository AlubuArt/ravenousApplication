import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
//import BusinessList from './BusinessList/BusinessList';


class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
        this.props.businesses.map((businesses) => {

          return <Business  key={businesses.id} business={businesses} />;

        })
      }
      </div>
    );
  }
}

// Default export for the componenet, So it can be used by other components in the app.
export default BusinessList;
