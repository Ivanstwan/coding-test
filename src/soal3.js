/*
Soal 3 Point 20

*/

const employees = [
  { name: "John", age: 50 },
  { name: "Anand", age: 43 },
  { name: "Peter", age: 27 },
  { name: "Fatima", age: 33 },
];
// find if any employee is about to retire who is 55 years old

const soal3list = document.getElementById("soal-3--list");
const soal3listOver = document.getElementById("soal-3--list-over");
const soal3inputName = document.getElementById("soal-3--input-name");
const soal3inputAge = document.getElementById("soal-3--input-age");
const soal3add = document.getElementById("soal-3--add");

const listKaryawan = () => {
  soal3listOver.innerHTML = "";
  soal3list.innerHTML = "";

  console.log("%c[SOAL 3]", "color: #ffb600;");

  // list karyawan
  employees.map((item) => {
    soal3list.innerHTML =
      soal3list.innerHTML + `<p>${item.name} - ${item.age}</p>`;
  });

  const filtered = employees.filter((person) => person.age >= 55);

  if (filtered.length < 0) {
    return (soal3listOver.innerHTML = "No one above 55 years old");
  }

  // list karyawan above 55 years
  filtered.map((item) => {
    soal3listOver.innerHTML =
      soal3listOver.innerHTML + `<p>${item.name} - ${item.age}</p>`;
  });
};

soal3add.addEventListener("click", () => {
  if (soal3inputName.value && soal3inputAge.value) {
    employees.push({ name: soal3inputName.value, age: soal3inputAge.value });
    // reset input
    soal3inputName.value = "";
    soal3inputAge.value = "";

    listKaryawan();
  }
});

// init function
listKaryawan();

console.log(employees.filter((item) => item.age >= 55));
