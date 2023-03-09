
const apiKey = '';

const Yelp = {

}

search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&${location}=LOCATION&sort_by=${sortBy}`);
}