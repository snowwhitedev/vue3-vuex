import axios from 'axios';

const customHeaders = {
    // Accept: 'application/json',
    // /* Authorization: authorization_prefix + token || undefined*/
    authorization: `Bearer arc_00009UhD4odlPfyV1qV5rk`,
    "content-type": 'application/json'
};


const instance = axios.create({
  // baseURL: 'https://trainee-api.pleiads.fr'
//   baseURL: 'https://devapi.apiferry.io/v1',
  baseURL: `${process.env.VUE_APP_SERVER_PROTOCOL}://${process.env.VUE_APP_API_URL_LOCALHOST}/v1/` , 
  headers:customHeaders
});

export default instance;
