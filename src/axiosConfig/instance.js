import axios from "axios";


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/',
    params:{
        "api_key":"479a2ea26dd1cb4a73232a1287763e38"
    }
    
  });

  export default instance;