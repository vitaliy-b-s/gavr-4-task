import { Film } from "./film.js";

let listOfFilms = [
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

function addFilm(film) {
  listOfFilms.push(film);
}

function deleteFilm(film) {
  let indexOfDeletingFilm = listOfFilms.findIndex((item) => item.id == film);
  listOfFilms.splice(indexOfDeletingFilm, 1);
}

function getFilms() {
  return listOfFilms.slice();
}

function replaceFilm(film) {
  let indexOfDeletingFilm = listOfFilms.findIndex((item) => item.id == film.id);
  listOfFilms.splice(indexOfDeletingFilm, 1, film);
}

function searchFilms(title) {
  return listOfFilms.filter((film) =>
    film.name.toLowerCase().includes(title.toLowerCase())
  );
}

export { addFilm, deleteFilm, getFilms, replaceFilm, searchFilms };
