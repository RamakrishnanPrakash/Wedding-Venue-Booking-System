//filter card animation effect
const filterCard = document.querySelector(".filter");
const filterBtn = document
  .getElementById("filter-btn")
  .addEventListener("click", () => {
    filterCard.classList.add("filter-active");
  });
const removeBtn = document
  .getElementById("x-mark1")
  .addEventListener("click", () => {
    filterCard.classList.remove("filter-active");
  });

//phone no enter

// document.getElementById('date').addEventListener('keypress',()=>{
//   document.getElementById('date').value='';
//   console.log('hii');
// })
