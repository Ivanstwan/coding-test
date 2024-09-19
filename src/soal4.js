const arrayLikeColors = {
  0: "blue",
  1: "green",
  2: "white",
  length: 3,
};

//soal 4 Point 20
//Iterate array-like objects
// logs "blue"
// logs "green"
// logs "white"

const soal4list = document.getElementById("soal-4--list");
const soal4inputKey = document.getElementById("soal-4--input-key");
const soal4inputValue = document.getElementById("soal-4--input-value");
const soal4add = document.getElementById("soal-4--add");

const listObject = () => {
  soal4list.innerHTML = "";

  console.log("%c[SOAL 4]", "color: #ffb600;");

  // list object
  Object.keys(arrayLikeColors).map((key) => {
    console.log(arrayLikeColors[key]);

    soal4list.innerHTML =
      soal4list.innerHTML + `<p>{"${key}": "${arrayLikeColors[key]}"}</p>`;
  });
};

soal4add.addEventListener("click", () => {
  if (soal4inputKey.value && soal4inputValue.value) {
    arrayLikeColors[soal4inputKey.value] = soal4inputValue.value;
    // reset input
    soal4inputKey.value = "";
    soal4inputValue.value = "";

    listObject();
  }
});

listObject();
