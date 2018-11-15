import axios from 'axios'

export default function(folder) {
    const requestUrl =
    `http://localhost:3000/image-list?folder=bader/${folder}`;
    return axios.get(requestUrl)
}