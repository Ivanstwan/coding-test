/*
Point 20
array.forEach(callback) executes the callback function with 3 arguments: 
the current iterated item, the index of the iterated item and the array instance itself.

const colors = ['blue', 'green', 'white'];

ekspectation 
// logs "blue has index 0"
// logs "green has index 1"
// logs "white has index 2"

*/

console.log("%c[SOAL 2]", "color: #ffb600;");

const soal2result = document.getElementById("soal-2");

const colors = ["blue", "green", "white"];

colors.forEach((item, idx, arr) => {
  console.log(`${item} has index ${idx} | from array [${arr}]`);
  soal2result.innerHTML = `${soal2result.innerHTML} <p>${item} has index ${idx}</p>`;
});
