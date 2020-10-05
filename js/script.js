function showForm() {
  let form = document.getElementById("addForm");
  form.style.display = "block";
}



function closeForm() {
  let form = document.getElementById("addForm");
  form.style.display = "none";
}

function clearForm() {
  document.querySelector(".search-text").value = "";
}

function fillForm() {
  document.querySelector(".search-text").value = "Поиск...";
}


document.getElementById("close-form").addEventListener("click", closeForm);
