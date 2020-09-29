function showForm() {
  let form = document.getElementById("addForm");
  form.style.display = "block";
}

function clearForm() {
  document.forms.mainForm.title.value = "";
  document.forms.mainForm.description.value = "";
  document.forms.mainForm.note.value = "";
  document.forms.mainForm.image.value = "";
}

function closeForm() {
  let form = document.getElementById("addForm");
  form.style.display = "none";
}

document.getElementById("clear-form").addEventListener("click", clearForm);
document.getElementById("close-form").addEventListener("click", closeForm);
