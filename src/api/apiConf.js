import axios from 'axios';
//get url and init api connection
const instance = axios.create({
    baseURL: 'http://192.168.1.13/api.php/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
export default instance;  