const files = require("../../utils/files");

let movies;

files.loadMovies(moviesData => movies = moviesData);

function getMovie(movieId) {
    return movies.find(movie => movie.id === movieId);   
}

function getMovies(){
    return movies;
}

function newMovie(movie, callback) {
    
    
}