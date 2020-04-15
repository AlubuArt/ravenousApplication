const apiKey = 'tC0OnUuQ2r2HebXCqcE1IuIgLLoTsDjy5JX1xwH1UWHPoU1Cb233rn17S401XRHLNMtSh2PKuHNyh0R0BVVaZ9UniHRVwcd52LLuvOCHDVW2f_C3ebnCbS9KRfDTXXYx';


//this object will store the functionality needed to interact woth the yelp api.
const Yelp = {


    searchYelp (term, location, sortBy) {
        return fetch (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
        }).then(response => {
            return response.json();
        }).then ((jsonResponse) => {
            if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(((business) => {
                console.log(business);
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
             }));
            }
    })
  }
};   

export default Yelp;