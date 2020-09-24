let listOfMovies = [];

function addMovie(film) {
  listOfMovies.push(film);
}

function deleteMovie(movie) {
  listOfMovies.pop(movie);
}

export { addMovie };
