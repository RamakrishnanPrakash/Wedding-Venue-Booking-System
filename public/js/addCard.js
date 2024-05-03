// console.log("Welcome my Page");

const parents = document.getElementById("parent");

async function getAllData() {
  const allData = await fetch("/api/user");
  const data = await allData.json();
  console.log(data);
  return data;
}

async function printTemplate() {
  const data = await getAllData();
  let template = ``;
  data.forEach((data, index) => {
    // let c = new Date(data.BOOKING_DATE) + 1;
    // c = new Date(c);
    // c = c.toLocaleDateString();
    // let date = c + ""; //2024-03-22T18:30:00.000Z
    // date = date.slice(0, 10);
    template += `<div class="contents" id="contents-${index}"  onclick='slideCard(${index})'>
    <table>
        <tr>
            <td><img src='${data.mahalimage}'
                    alt="no" width="100px" height="100px"></td>
            <td id="par">
                <h6>${data.mahalname}</h6>
                <p>${data.distic}</p>
                <p id="city">${data.city}</p>
                <p>${data.indoor} people</p>
            </td>
            <td>
                <h6>Booking Date</h6>
                <p>${data.date}</p>
            </td>
            <td>
                <h6>Amount</h6>
                <p id="tamount">Rs ${data.amount}</p>
            </td>
        </tr>
    </table>
</div>`;
    slideCard(0);
  });
  //   console.log(template);
  parents.innerHTML = template;

  let tamount = document.querySelectorAll("#tamount");

  // console.log(tamount);
  let total = 0;
  tamount.forEach((ele) => {
    let num = parseInt(ele.innerHTML.slice(3));
    ele.innerHTML = "Rs " + num.toLocaleString("en-US");
    total = total + num;
  });
  total = total.toLocaleString("en-US");
  console.log(total);
  document.querySelector("#tot").innerHTML = total;
}

async function slideCard(index) {
  let card = document.getElementById("card-container");

  const data = await getAllData();
  console.log("data", data);
  if (data.length <= 0) {
    card.innerHTML = "";
    let clas = document.querySelector(".addcontainer");
    console.log("click");
    clas.style.left = "-2000px";
  }

  // let date = data[index].BOOKING_DATE + ""; //2024-03-22T18:30:00.000Z
  // date = date.slice(0, 10);
  if (data.length > 0) {
    var template = ` <div class="image-card">
  <img src="${data[index].mahalimage}" alt="">
  </div>
<div class="card-details text-start">
  <h6 id="mahalname">${data[index].mahalname}</h6>
  <p >${data[index].city}</p>
  <p id="distic">${data[index].distic}</p>
 <span>Booking Date:</span> <a id="bookingDate">${data[index].date}</a>
  <p>Amount: Rs.${[data[index].amount]}</p>
  <button id="btn1">Pay</button>
  <button id="btn2">Delete</button>
</div>    
            `;
    card.style.transition = "2s ease-in-out;";
    card.innerHTML = template;
    document.getElementById("btn1").addEventListener("click", () => {
      window.alert(
        "Payment Gateway coming soon.any doubt query for venuemahal.com"
      );
    });
  }
  deleteItem();
}

let shopBtn = document.querySelector("#shopping");

shopBtn.addEventListener("click", () => {
  printTemplate();
  let clas = document.querySelector(".addcontainer");
  console.log("click");
  clas.style.left = "0";
});

//

let xBtn = document.querySelector("#x-marks");
xBtn.addEventListener("click", () => {
  let clas = document.querySelector(".addcontainer");
  console.log("click");
  clas.style.left = "-2000px";
});

function deleteItem() {
  const deleteBtn = document.querySelector("#btn2");
  deleteBtn.addEventListener("click", () => {
    const model = document.querySelector(".confiremession-model");
    model.style.left = "50%";
    model.style.top = "50%";
    model.style.transform = "translate(-50%,-50%)";

    confirmModel();
    const parent = deleteBtn.parentElement;
    const mahalname = parent.querySelector("#mahalname").innerHTML;
    const distic = parent.querySelector("#distic").innerHTML;
    const bookingDate = parent.querySelector("#bookingDate").innerHTML;

    let Data = {
      mahalname: mahalname,
      distic: distic,
      bookingDate: bookingDate,
    };

    // console.log(Data);
    // console.log(DataJson);
    const okBtn = document.querySelector("#okBtns");
    okBtn.addEventListener("click", () => {
      cancelButton = false;
      okButton = true;
      console.log("Ok Button");
      model.style.top = "0";
      model.style.left = "-2000px";
      deleteRequest(Data);
    });
  });
}

async function deleteRequest(Data) {
  console.log(Data);

  const request = await fetch("/api/cardData", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  });

  const responce = await request.json();

  if (responce) {
    printTemplate();
    slideCard(0);
  }

  console.log(responce);
}

//confirm message model
confirmModel();
let okButton = false;
let cancelButton = false;
function confirmModel() {
  const okBtn = document.querySelector("#okBtns");
  const cancelBtn = document.querySelector("#cancelBtn");
  okBtn.disabled = true;

  const label = document.querySelectorAll("#box");
  label.forEach((ele) => {
    ele.addEventListener("change", (e) => {
      console.log("change");
      if (e.target.checked) {
        console.log("change1");
        okBtn.disabled = false;
      }

      if (!e.target.checked) {
        okBtn.disabled = true;
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    document.querySelector(".confiremession-model").style.left = "-2000px";
    cancelButton = true;
    okButton = false;
  });

  okBtn.addEventListener("click", () => {
    cancelButton = false;
    okButton = true;
    console.log("Ok Button");
  });
}
