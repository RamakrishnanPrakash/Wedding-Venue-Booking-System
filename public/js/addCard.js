// console.log("Welcome my Page");

const parents = document.getElementById("parent");

async function getAllData() {
  const allData = await fetch("/api/user");
  const data = await allData.json();
  return data;
}

async function printTemplate() {
  const data = await getAllData();
  let template = ``;
  data.forEach((data, index) => {
    let date = data.BOOKING_DATE + ""; //2024-03-22T18:30:00.000Z
    date = date.slice(0, 10);
    template += `<div class="contents" id="contents-${index}"  onclick='slideCard(${index})'>
    <table>
        <tr>
            <td><img src='${data.mahalimage}'
                    alt="no" width="100px" height="100px"></td>
            <td id="par">
                <h6>${data.mahalname}</h6>
                <p>${data.distic}</p>
                <p>${data.city}</p>
                <p>${data.indoor} people</p>
            </td>
            <td>
                <h6>Booking Date</h6>
                <p>${date}</p>
            </td>
            <td>
                <h6>Amount</h6>
                <p>Rs ${data.amount}</p>
            </td>
        </tr>
    </table>
</div>`;
    slideCard(0);
  });
  //   console.log(template);
  parents.innerHTML = template;
}
async function slideCard(index) {
  let card = document.getElementById("card-container");
  const data = await getAllData();
  var template = ` <div class="image-card">
  <img src="${data[index].mahalimage}" alt="">
  </div>
<div class="card-details text-start">
  <h6>${data[index].mahalname}</h6>
  <p>${data[index].city}</p>
  <p>${data[index].distic}</p>
  <p>Amount: Rs.${[data[index].amount]}</p>
  <button id="btn1">Pay</button>
  <button id="btn2">Delete</button>
</div>    
            `;
  card.style.transition = "2s ease-in-out;";
  card.innerHTML = template;
}
printTemplate();
