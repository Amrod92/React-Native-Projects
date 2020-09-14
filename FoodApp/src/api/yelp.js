import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer UONRyXldON2anC4LCsN-IwMLn5jVK0cfe4oXnbyyHdRLMzNFWMLp0GPwQUISzpL3Y6Yqfso3uwVtaTtD0z7Q9uAImn8BGqhn8jAJkiphxLjZJjEuUwoW9vAANxVZX3Yx'
  }
});
