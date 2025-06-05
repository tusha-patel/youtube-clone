import axios from "axios";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = "https://youtube138.p.rapidapi.com"
// const BASE_URL = ""



const options = {
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error(error, "Error Fetching api data");
        throw error;
    }
}

