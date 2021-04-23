import axios from 'axios'

const Api = () => {
    axios.defaults.baseURL = 'http://localhost:8081'
    return axios;
}

export default Api;