function ListOnClick(element) {
  alert("List On Click");

  if (element.classList.contains("done")) element.classList.remove("done");
  else element.classList.add("done");
}
