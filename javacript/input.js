import { Film } from "./film.js";
import { addMovie } from "./data.js";
import { getFilms } from "./data.js";

let counter = 3;

function createFilm() {
  let name = document.forms.mainForm.title.value;
  let description = document.forms.mainForm.description.value;
  let note = document.forms.mainForm.note.value;
  let image = document.forms.mainForm.image.value;
  let id = counter;

  let film = new Film(id, name, description, note, image);

  addMovie(film);

  let form = document.getElementById("addForm");
  form.style.display = "none";

  counter++;
}

function createList() {}

function renderFilm(e) {}
