import { Film } from "./film.js";
import { addMovie } from "./data.js";

function createFilm() {
  let name = document.forms.mainForm.title.value;
  let description = document.forms.mainForm.description.value;
  let note = document.forms.mainForm.note.value;
  let image = document.forms.mainForm.image.value;

  let film = new Film(name, description, note, image);

  addMovie(film);

  let form = document.getElementById("addForm");
  form.style.display = "none";

  let li = document.createElement("li");
  li.className = "film-in-list";
  li.innerHTML = name;
  document.body.querySelector(".items-list").appendChild(li);
}

document.getElementById("bn").addEventListener("click", createFilm);
