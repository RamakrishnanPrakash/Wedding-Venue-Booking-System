const suggestionBox = document.getElementById("suggestion");
const inputBox = document.getElementById("search-input");

inputBox.addEventListener("keyup", fillterSuggestion);

async function fillterSuggestion() {
  try {
    let input = this.value;
    // console.log(this.value);
    const responce = await fetch("../json/data.json");
    const dataArray = await responce.json();
    //console.log(dataArray);
    var suggest = [];
    if (input.length) {
      suggest = dataArray.filter((data) => {
        return data.search.toLowerCase().includes(input.toLowerCase());
      });
      //console.log(suggest);
    }
    suggestionBox.style.display = "none";
    if (!suggest.length) {
      suggestionBox.innerHTML = "";
    }
    display(suggest);
  } catch (error) {
    console.log("File Not Found", error);
  }
}

function display(suggest) {
  if (suggest.length === 0) {
    suggestionBox.style.display = "none";
  }

  var template = suggest.map((data) => {
    return `<li onclick=selectData(this)>${data.search}</li>`;
  });

  suggestionBox.style.display = "block";
  suggestionBox.innerHTML = `<ul>${template.join("")}</ul>`;
}
function selectData(list) {
  inputBox.value = list.innerHTML;
  suggestionBox.style.display = "none";
}
inputBox.addEventListener("click", () => {
  inputBox.select();
});
