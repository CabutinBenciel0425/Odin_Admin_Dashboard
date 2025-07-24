
document.addEventListener("DOMContentLoaded", () => {
  const searchImg = document.getElementById("searchImg");
  const inputBar = document.getElementById("inputBar");

  searchImg.addEventListener("click", () => {
    inputBar.focus();
  });
});


