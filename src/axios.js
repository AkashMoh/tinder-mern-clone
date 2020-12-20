import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mern-tinder-backend-kashmoh.herokuapp.com/'
})

export default instance;