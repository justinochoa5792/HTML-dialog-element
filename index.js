let btn = document.querySelector(".btn");
let modal = document.getElementById("myModal");
let close = document.querySelector(".close");

btn.addEventListener("click", () => {
  //modal.style.display = "block";
  modal.showModal();
});

close.addEventListener("click", () => {
  //modal.style.display = "none";
  modal.close();
});
