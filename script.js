let data = null;

function ListOnClick(element) {
  // alert("List On Click");

  if (element.classList.contains("done")) element.classList.remove("done");
  else element.classList.add("done");

  SetItem(element.innerText, element.classList.contains("done"));
}

function SetItem(key, value) {
  if (data === null) LoadData();

  data[key] = value;
  SaveData();
}

function GetItem(key) {
  if (data === null) LoadData();

  return data[key] || false;
}

function SaveData() {
  localStorage.setItem(document.title, JSON.stringify(data));
}

function LoadData() {
  data = JSON.parse(localStorage.getItem(document.title)) || {};
}

document.addEventListener("DOMContentLoaded", () => {
  alert("DOM Loaded");
  LoadData();
});
