import axios from "axios";

const BASE_ENDPOINT = 'https://api.themoviedb.org/3/movie';
export const getMovies = () => {
    return axios
        .get(
        `$(BASE_ENDPOINT})/popular? api_key=a2df3d1a611194432bdfifc80`
    )
        .then((response) => response.data)
        .catch((error)  => console.log(error));
};