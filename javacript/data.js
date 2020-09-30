import { Film } from "./film.js";

let listOfMovies = [
  new Film(
    "1",
    "Властелин колец",
    "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет.",
    "Смотреть обязательно",
    "./picturedatabase/lotr.jpg"
  ),
  new Film(
    "2",
    "Гарри Поттер",
    "Серия фильмов, основанных на книгах о Гарри Поттере английской писательницы Дж. К. Роулинг.",
    "Хорошее кино",
    "./picturedatabase/gp.jpg"
  ),
];

function addMovie(film) {
  listOfMovies.push(film);
}

function deleteMovie(movie) {
  listOfMovies.pop(movie);
}

function getFilms() {
  return listOfMovies.slice();
}

export { addMovie, deleteMovie, getFilms };
