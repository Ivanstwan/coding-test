/*
Point 20
Soal 1 
In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.

*/

const inputSoal1 = document.getElementById("soal-1");
const resultSoal1 = document.getElementById("soal-1--result");

const changeTextResult = (text = "") => {
  console.log("%c[SOAL 1] " + text, "color: #ffb600;");

  resultSoal1.innerHTML = text;
};

inputSoal1.addEventListener("input", (e) => {
  const value = e.target.value;

  if (value <= 0) return changeTextResult("Input number greater than 0");

  if (value % 400 === 0) return changeTextResult("Leap year - " + value);
  if (value % 4 === 0 && value % 100 === 0)
    return changeTextResult("NOT a Leap year - " + value);
  if (value % 4 === 0) return changeTextResult("Leap year - " + value);
  changeTextResult("NOT a Leap year - " + value);
});

console.log("%c[SOAL 1]", "color: #ffb600;");
