import axios from 'axios';

export function getSponsors() {
  return axios.get('http://127.0.0.1:8000/api/v1/sponsors/')
    .then(response => response.data)
}