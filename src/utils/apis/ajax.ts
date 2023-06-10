import axios, { Method } from 'axios';


// eslint-disable-next-line max-params
export default function ajax(baseURL: string, url: string, data = {}, method: Method = 'get') {
  if (method === 'get') {
    return axios({
      baseURL,
      url,
      method,
      params: data
    });
  } else {
    return axios({
      baseURL,
      url,
      method,
      data
    });
  }
}
