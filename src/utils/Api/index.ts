import axios from "axios";

const Api = axios.create({

  baseURL: `https://karkenzie.onrender.com`,

});

export default Api;
