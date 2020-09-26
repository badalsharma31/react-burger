import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-d8ea8.firebaseio.com/",
    headers: {'Access-Control-Allow-Origin': '*'}
})

export default instance;
