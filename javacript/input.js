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

function addToSidebar() {
  getFilms().forEach((item) => {
    const img = document.createElement("img");
    const button = document.createElement("button");
    const li = document.createElement("li");
    const rateNameDiv = document.createElement("div");
    const rateDiv = document.createElement("div");
    const nameDiv = document.createElement("div");
    const buttonDiv = document.createElement("div");
    const delButton = document.createElement("button");
    const editButton = document.createElement("button");

    li.className = "film-in-list";
    let listOfFilm = document.getElementById("main-list");
    li.setAttribute("data-id", `${item.id}`);
    li.addEventListener("click", renderCartFilm);
    listOfFilm.appendChild(li);

    img.className = "image-in-list";
    img.setAttribute("data-id", `${item.id}`);
    li.appendChild(img);

    rateNameDiv.className = "rate-name-div";
    rateNameDiv.setAttribute("data-id", `${item.id}`);
    li.appendChild(rateNameDiv);

    nameDiv.className = "name-div";
    nameDiv.setAttribute("data-id", `${item.id}`);
    rateNameDiv.appendChild(nameDiv);

    rateDiv.className = "rate-div";
    rateDiv.setAttribute("data-id", `${item.id}`);
    rateNameDiv.appendChild(rateDiv);

    buttonDiv.className = "button-div";
    buttonDiv.setAttribute("data-id", `${item.id}`);
    li.appendChild(buttonDiv);

    delButton.className = "delete-button";
    delButton.setAttribute("data-id", `${item.id}`);
    buttonDiv.appendChild(delButton);

    editButton.className = "edit-button";
    editButton.setAttribute("data-id", `${item.id}`);
    buttonDiv.appendChild(editButton);

    img.src = item.image;
    nameDiv.innerHTML = item.name;
  });
}

function renderCartFilm(e) {
  let chosenFilm = getFilms().find((item) => item.id == e.target.dataset.id);
  document.body.querySelector(".film-title").innerHTML = chosenFilm.name;
  document.body.querySelector(".film-description").innerHTML =
    chosenFilm.description;
  document.body.querySelector(".film-note").innerHTML = chosenFilm.note;
  document.body.querySelector(".film-image").src = chosenFilm.image;
}

function deleteFilmFromList(e) {
  let move = getFilms().find;
}

document.addEventListener("DOMContentLoaded", addToSidebar);
