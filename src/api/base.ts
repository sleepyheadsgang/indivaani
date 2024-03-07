import axios from "axios";

const backend = axios.create({
  baseURL: '/api'
});


export default backend