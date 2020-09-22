import { Film } from './film.js'

function createFilm() {
    let name = document.forms.mainForm.title.value;
    let description = document.forms.mainForm.des.value;
    let note = document.forms.mainForm.note.value;
    let film = new Film(name, description, note);
    console.log(film);
}

document.getElementById("bn").addEventListener('click', createFilm)