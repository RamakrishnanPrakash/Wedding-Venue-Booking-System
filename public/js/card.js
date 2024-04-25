const card = document.querySelector(".user-card");

document.getElementById("Symbol").addEventListener("click", async () => {
  const responce = await fetch("/api/user_informatiom");
  const data = await responce.json();
  console.log(data);

  const template = `  <div class="user-name">
  <h4>${data[0].uname}</h4>
  <p id="x-mark2"><i class="fa-solid fa-x"></i></p>
</div>

<div class="user-image">
  <img src="../images/user.png" alt="">
</div>

<div class="user-content">
  <p>${data[0].uemail}</p>
  <button><a href="/auth/logout" style=" text-decoration: none; color:#fff " >Logout</a></button>
</div>`;

  card.innerHTML = template;

  setTimeout(() => {
    card.classList.add("user-card-active");
  }, 100);
  //   console.log("Hiii");

  document.getElementById("x-mark2").addEventListener("click", () => {
    card.classList.remove("user-card-active");
  });
});
