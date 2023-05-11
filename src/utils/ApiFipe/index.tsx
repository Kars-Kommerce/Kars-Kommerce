import axios from "axios";

const ApiFipe = axios.create({

  baseURL: `https://kenzie-kars.herokuapp.com/`,

});

export default ApiFipe;
