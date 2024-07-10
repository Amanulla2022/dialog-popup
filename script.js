const dialog = document.getElementById("dialog");
document.querySelector(".open-dialog-btn").addEventListener("click", () => {
  dialog.style.display = "block";
});

document.querySelector(".close-dialog-btn").addEventListener("click", () => {
  dialog.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.style.display = "none";
  }
});
