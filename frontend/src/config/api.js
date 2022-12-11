import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["x-access-token"] = `${localStorage.getItem('x-access-token')}`;

export default axios;
