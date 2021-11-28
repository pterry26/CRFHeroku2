import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const baseUrl = 'races' 

const getRaces = filter => {
    console.log(filter);
    let url = baseUrl + '?distance=5k';
    const request = axios.get(url);
    return request.then(response => response.data)
}

export default { getRaces }