let listOfMovies = [];

listOfMovies[0] = {
  name: "Властелин колец",
  description: "Героическое фентези",
  note: "Смотреть всем",
  image: "./picturedatabase/lotr.jpg",
  id: 1,
};

listOfMovies[1] = {
  name: "Гарри Поттер",
  description: "Сойдет",
  note: "Смотреть всем",
  image: "./picturedatabase/gp.jpg",
  id: 2,
};

function addMovie(film) {
  listOfMovies.push(film);
}
export { addMovie };

function deleteMovie(movie) {
  listOfMovies.pop(movie);
}

function getFilms() {
  return listOfMovies.slice();
}
export { getFilms };

function show() {
  console.log(listOfMovies);
}
export { show };
