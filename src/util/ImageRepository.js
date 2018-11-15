import axios from 'axios'

export default function(folder) {
    const requestUrl =
    `https://bader-server.herokuapp.com/image-list?folder=${folder}`;
    return axios.get(requestUrl)
}