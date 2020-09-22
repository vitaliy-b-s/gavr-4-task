class Film {
  constructor(name, des, note, img) {
    this.name = name;
    this.des = des;
    this.note = note;
    this.img = img;
  }
}

function createFilm() {
  let name = document.forms.mainForm.title.value;
  /*Остальные свойства */

  let film = new Film(`${name}`, `${des}`, `${note}`, `${image}`);
}
