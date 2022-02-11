const basePath = 'https://api.themoviedb.org/3';

export const urls = {
    movie: '/movie',
    genre: '/genre',
    popular: '/popular',
    list: '/list',
    nowPlaying: '/now_playing',
    topRated: '/top_rated',
    discover: '/discover',
    sortPopularityDesc: '&sort_by=popularity.desc&include_adult=false&include_video=false',
    page:'&page=',
    certainGenre: '&with_genres=',
    key: '?api_key=a7285a18a3f5531cd02d397b99ea983c&page=1',
    img92: 'https://image.tmdb.org/t/p/w92',
    img185: 'https://image.tmdb.org/t/p/w185',
    img342: 'https://image.tmdb.org/t/p/w342',
    img1280: 'https://image.tmdb.org/t/p/w1280'
}

export default basePath;