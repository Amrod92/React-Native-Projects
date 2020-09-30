import axios from 'axios';

export default axios.create({
  // This will change every 8 hours
  baseURL: 'http://e44aceb819ac.ngrok.io'
});
