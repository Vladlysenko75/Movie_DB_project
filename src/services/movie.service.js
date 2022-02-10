import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const movieService = {
    getPopularMovies: () => axiosService.get(urls.movie.concat(urls.popular, urls.key)).then(value => value.data),
    getMoviesPlayingNow: () => axiosService.get(urls.movie.concat(urls.nowPlaying, urls.key)).then(value => value.data),
    getTopRatedMovies: () => axiosService.get(urls.movie.concat(urls.topRated,urls.key)).then(value => value.data),
    getGenres: () => axiosService.get(urls.genre.concat(urls.movie, urls.list, urls.key)).then(value => value.data),
    getMovie: (id) => axiosService.get(`${urls.movie}/${id}${urls.key}`).then(value => value.data)
}