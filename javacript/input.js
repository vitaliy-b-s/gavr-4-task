import { Film } from "./film.js";
import { addMovie } from "./data.js";
import { getFilms } from "./data.js";
import { show } from "./data.js";

let counter = 3;

function createFilm() {
  let name = document.forms.mainForm.title.value;
  let description = document.forms.mainForm.description.value;
  let note = document.forms.mainForm.note.value;
  let image = document.forms.mainForm.image.value;

  let film = new Film(name, description, note, image, counter);
  counter++;

  addMovie(film);

  let form = document.getElementById("addForm");
  form.style.display = "none";

  let li = document.createElement("li");
  li.className = "film-in-list";
  li.textContent = name;
  document.body.querySelector(".items-list").appendChild(li);
}

function createList() {
  getFilms().forEach((item) => {
    const li = document.createElement("li");
    li.className = "film-in-list";
    li.id = item.id;
    li.textContent = item.name;
    document.body.querySelector(".items-list").appendChild(li);
  });
}

function renderFilm(e) {
  let currentFilm = e.target;
  for (let i = 0; i < getFilms().length; i++) {}
}

document.getElementById("create-film").addEventListener("click", createFilm);
document.addEventListener("DOMContentLoaded", createList);
document.getElementById("delete-film").addEventListener("click", show);
document.body
  .querySelector(".items-list")
  .addEventListener("click", renderFilm);
