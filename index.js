const btnTab1 = document.getElementById("first-tab");
const btnTab2 = document.getElementById("second-tab");
const btnTab3 = document.getElementById("third-tab");
const confirmInput = document.getElementById("btn-tab1");
const numberInput = document.getElementById("number-input");
const nextBtn = document.getElementById("next");
const regenerateBtn = document.getElementById("regenerate");
const tab2BtnContainer =
  document.getElementsByClassName("tab2-btn-container")[0];
const tableContainer = document.getElementsByClassName("table-container")[0];
const resultContainer = document.getElementsByClassName("result")[0];
let inputValue = 0;
let numberLists = [];

const findLowestPositiveNumber = () => {
  let clonedNumberLists = [...numberLists];
  clonedNumberLists = clonedNumberLists.filter((x) => x > 0).sort();
  return clonedNumberLists[0] - 1;
};

const generateNumber = () => {
  const ranNum =
    Math.ceil(Math.random() * 1000000) * (Math.round(Math.random()) ? 1 : -1);
  return ranNum;
};

const generateTable = (inputtedNumber) => {
  numberLists = [];

  let tableContent = "<table class='table'>";
  tableContent += "<tbody><tr>";
  for (let i = 1; i <= inputtedNumber; i++) {
    const generateResult = parseInt(generateNumber());
    numberLists.push(generateResult);
    tableContent += `<td>${generateResult}</td>`;

    if (i % 5 == 0 || i == inputtedNumber) {
      tableContent += "</tr>";
    }
  }
  tableContent += "</tbody></table>";

  tableContainer.innerHTML = tableContent;
};

confirmInput.addEventListener("click", function () {
  inputValue = numberInput.value;

  if (inputValue.trim().length == 0) {
    alert("Nilai input tidak boleh kosong");
    return false;
  }

  if (isNaN(inputValue)) {
    alert("Nilai input harus berupa angka");
    return false;
  }

  generateTable(inputValue);

  btnTab2.click();
  btnTab1.classList.add("disabled");
  tab2BtnContainer.classList.add("d-flex");
  tab2BtnContainer.classList.remove("d-none");
});

regenerateBtn.addEventListener("click", function () {
  generateTable(inputValue);
});

nextBtn.addEventListener("click", function () {
  const result = findLowestPositiveNumber();
  resultContainer.innerHTML = result;
  btnTab3.click();
});
