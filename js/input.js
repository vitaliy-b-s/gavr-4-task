import { Film } from "./film.js";
import { addFilm, deleteFilm } from "./data.js";
import { getFilms } from "./data.js";
import { replaceFilm } from "./data.js";
import { searchFilms } from "./data.js";

let counter = 3;

function createFilm() {
  let name = document.forms.mainForm.title.value;
  let description = document.forms.mainForm.description.value;
  let note = document.forms.mainForm.note.value;
  let image = document.forms.mainForm.image.value;
  let id = counter;

  let film = new Film(id, name, description, note, image);

  addFilm(film);

  let form = document.getElementById("addForm");
  form.style.display = "none";

  creatiFilmInList(film);

  document.querySelector(".id-div").innerHTML = film.id;
  document.getElementById("main-form").reset();
  counter++;
}

function addToSidebar() {
  document.getElementById("main-list").innerHTML = "";
  getFilms().forEach((item) => {
    creatiFilmInList(item);
  });
}

function creatiFilmInList(film) {
  const img = document.createElement("img");
  const li = document.createElement("li");
  const rateNameDiv = document.createElement("div");
  const rateDiv = document.createElement("div");
  const nameDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const delButton = document.createElement("button");
  const editButton = document.createElement("button");

  li.className = "film-in-list";
  let listOfFilm = document.getElementById("main-list");
  li.setAttribute("data-id", film.id);
  li.addEventListener("click", renderCartFilm);
  li.style.height = "70px";
  listOfFilm.appendChild(li);

  img.className = "image-in-list";
  img.setAttribute("data-id", film.id);
  img.src = film.image;
  li.appendChild(img);

  rateNameDiv.className = "rate-name-div";
  rateNameDiv.setAttribute("data-id", film.id);
  li.appendChild(rateNameDiv);

  nameDiv.className = "name-div";
  nameDiv.setAttribute("data-id", film.id);
  nameDiv.innerHTML = film.name;
  rateNameDiv.appendChild(nameDiv);

  rateDiv.className = "rate-div";
  rateDiv.setAttribute("data-id", film.id);
  rateNameDiv.appendChild(rateDiv);

  buttonDiv.className = "button-div";
  buttonDiv.setAttribute("data-id", film.id);
  li.appendChild(buttonDiv);

  delButton.className = "delete-button";
  delButton.setAttribute("data-id", film.id);
  buttonDiv.appendChild(delButton);
  delButton.addEventListener("click", deleteFilmFromList);

  editButton.className = "edit-button";
  editButton.setAttribute("data-id", film.id);
  buttonDiv.appendChild(editButton);
  editButton.addEventListener("click", editCart);
}

function renderCartFilm(e) {
  let chosenFilm = getFilms().find((item) => item.id == e.target.dataset.id);
  document.body.querySelector(".film-title").value = chosenFilm.name;
  document.body.querySelector(".film-description").value =
    chosenFilm.description;
  document.body.querySelector(".film-note").value = chosenFilm.note;
  document.body.querySelector(".film-image").src = chosenFilm.image;
}

function deleteFilmFromList(event) {
  event.stopPropagation();
  let film = event.target.dataset.id;
  deleteFilm(film);
  let deletedLi = event.target.parentNode.parentNode;
  document.getElementById("main-list").removeChild(deletedLi);
}

function editCart(event) {
  let chosenFilm = getFilms().find(
    (item) => item.id == event.target.dataset.id
  );

  document.querySelector(".id-div").innerHTML = chosenFilm.id;

  document.querySelector(".new-url").style = "display: block;";
  document.querySelector(".new-url").value = chosenFilm.image;
  document.querySelector(".save-button").style = "display: block;";

  document.body.querySelector(".film-title").removeAttribute("readonly");
  document.body.querySelector(".film-title").classList.add("change-class");

  document.body.querySelector(".film-description").removeAttribute("readonly");
  document.body
    .querySelector(".film-description")
    .classList.add("change-class");

  document.body.querySelector(".film-note").removeAttribute("readonly");
  document.body.querySelector(".film-note").classList.add("change-class");
}

function saveChanges(event) {
  let chosenFilm = getFilms().find(
    (item) => item.id == document.querySelector(".id-div").innerHTML
  );
  chosenFilm.name = document.body.querySelector(".film-title").value;
  chosenFilm.description = document.body.querySelector(
    ".film-description"
  ).value;
  chosenFilm.note = document.body.querySelector(".film-note").value;
  chosenFilm.image = document.body.querySelector(".new-url").value;
  chosenFilm.id = document.querySelector(".id-div").innerHTML;

  replaceFilm(chosenFilm);
  addToSidebar();

  document.querySelector(".new-url").style = "display:none;";
  document.querySelector(".save-button").style = "display:none;";

  document.body.querySelector(".film-title").readOnly = true;
  document.body.querySelector(".film-title").classList.remove("change-class");

  document.body.querySelector(".film-description").readOnly = true;
  document.body
    .querySelector(".film-description")
    .classList.remove("change-class");

  document.body.querySelector(".film-note").readOnly = true;
  document.body.querySelector(".film-note").classList.remove("change-class");
}

function searchItems() {
  document.getElementById("main-list").innerHTML = "";
  let title = document.querySelector(".search-text").value;
  let filterdFilms = searchFilms(title);
  filterdFilms.forEach((item) => {
    creatiFilmInList(item);
  });
}

function clearForm() {
  document.forms.mainForm.title.value = "";
  document.forms.mainForm.description.value = "";
  document.forms.mainForm.note.value = "";
  document.forms.mainForm.image.value = "";
}

document.querySelector(".search-text").addEventListener("input", searchItems);
document.getElementById("clear-form").addEventListener("click", clearForm);
document.getElementById("create-film").addEventListener("click", createFilm);
document.querySelector(".save-button").addEventListener("click", saveChanges);

document.addEventListener("DOMContentLoaded", addToSidebar);
