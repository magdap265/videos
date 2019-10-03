import axios from 'axios';

const KEY = 'AIzaSyDRKhLFjGUt40T8Fanemj22z5Tv5bMFnfI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})