console.log("Form validation");

const formParent = document.querySelector("#form-parent");
const para = document.querySelector("#err");
const paraContainer = document.querySelector("#errorMessage");

// const errorPara = document.querySelectorAll(".error-para");
const names = document.querySelector("#username");
const phone = document.querySelector("#phone_no");
const email = document.querySelector("#email1");
const date = document.querySelector("#date");

async function fetching() {
  const fetchData = await fetch("/api/user_informatiom");
  const responce = fetchData.json();

  return responce;
}

function validateIndianPhoneNumber(phoneNumber) {
  // Regular expression for Indian phone numbers
  const indianPhoneNumberRegex = /^[789]\d{9}$/;

  // Check if the phone number matches the regex pattern
  return indianPhoneNumberRegex.test(phoneNumber);
}

function validateDate(dateString) {
  // Regular expression for date validation in the format YYYY-MM-DD
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Check if the date string matches the regex pattern
  return dateRegex.test(dateString);
}

function validateEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const data = [];
const responce = fetching();
responce.then((ele) => {
  ele.forEach((element) => data.push(element));
});

names.addEventListener("change", (e) => {
  data.forEach((ele) => {
    if (
      names.value === undefined ||
      names.value === null ||
      names.value.trim() == ""
    ) {
      para.innerHTML = "usename is required";
      names.style.border = "3px solid red";
      names.style.borderRadius = "5px";
      return;
    }

    console.log(ele.uname);
    if (e.target.value == ele.uname) {
      para.innerHTML = "";
      names.style.border = "3px solid green";
      names.style.borderRadius = "5px";
      return;
    } else {
      para.innerHTML = "The username could not be found";
      names.style.border = "3px solid red";
      names.style.borderRadius = "5px";
      return;
    }
  });
});

phone.addEventListener("change", (e) => {
  if (validateIndianPhoneNumber(e.target.value)) {
    para.innerHTML = "";
    phone.style.border = "3px solid green";
    phone.style.borderRadius = "5px";
    return;
  } else {
    para.innerHTML = "That's not a phone number.";
    phone.style.border = "3px solid red";
    phone.style.borderRadius = "5px";
    return;
  }
});

email.addEventListener("change", (e) => {
  if (validateEmail(e.target.value)) {
    para.innerHTML = "";
    email.style.border = "3px solid green";
    email.style.borderRadius = "5px";
    return;
  } else {
    para.innerHTML = "That's not an email";
    email.style.border = "3px solid red";
    email.style.borderRadius = "5px";
    return;
  }
});

date.addEventListener("change", (e) => {
  const reqDateParse = Date.parse(e.target.value);
  const reqDate = new Date(reqDateParse);
  const newDate = new Date();

  console.log(reqDate, typeof reqDate);
  console.log(reqDate.getMonth());
  //   console.log(e.target.value);
  if (
    reqDate.getMonth() < newDate.getMonth() ||
    reqDate.getFullYear() < newDate.getFullYear() ||
    (reqDate.getMonth() == newDate.getMonth() &&
      reqDate.getDate() < newDate.getDate())
  ) {
    para.innerHTML = "You cannot book for a previous day";
    date.style.border = "3px solid red";
    date.style.borderRadius = "5px";
    return;
  }
  if (validateDate(e.target.value.trim())) {
    para.innerHTML = "";
    date.style.border = "3px solid green";
    date.style.borderRadius = "5px";
    return;
  } else {
    para.innerHTML = "Please input the date in the format MM-DD-YYYY.";
    date.style.border = "3px solid red";
    date.style.borderRadius = "5px";
    return;
  }
});
const book1 = document.querySelector("#book1");
book1.addEventListener("click", () => {
  console.log("book1");
  document.querySelector("#form-parent").submit();
});

function handleSubmit(id) {
  validBooking(id, date.value);
  return false;
}

async function validBooking(id, date) {
  const body = {
    id: id,
    date: date,
  };
  const reqestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    const responce = await fetch("/api/BookingDate", reqestOption);
    const confirm = document.querySelector(".confirm");
    const terminate = document.querySelector(".terminate");
    if (!responce.ok) {
      console.log("Booking found");
      confirm.classList.remove("confirm-appear");
      // terminate.classList.add("terminate-appear");
      terminate.style.zIndex = 99;
      document.querySelector("#cancelBtn2").addEventListener("click", () => {
        terminate.style.zIndex = -1;
      });
      return;
    }

    const data = responce.json();
    console.log(data);
    console.log("Booking not found");
    terminate.style.zIndex = -1;
    confirm.classList.add("confirm-appear");
    confirm.style.transition = "width 1.5s ease-in-out";
  } catch (error) {
    console.log(error);
  }
}

//close-open model

const cancelBtn1 = document.querySelector("#cancelBtn1");

const closeBtn1 = document.querySelector("#close");

cancelBtn1.addEventListener("click", () => {
  const confirm = document.querySelector(".confirm");
  confirm.classList.remove("confirm-appear");
});
closeBtn1.addEventListener("click", () => {
  const confirm = document.querySelector(".confirm");
  confirm.classList.remove("confirm-appear");
});

book1.addEventListener("click", () => {});
