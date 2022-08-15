var currentDay = document.querySelector("#currentDay")

currentDay.textContent = moment().format("dddd, MMMM Do")

var amButton7 = document.getElementById("7ab")
var amButton8 = document.getElementById("8ab")
var amButton9 = document.getElementById("9ab")
var amButton10 = document.getElementById("10ab")
var amButton11 = document.getElementById("11ab")
var pmButton12 = document.getElementById("12pb")
var pmButton1 = document.getElementById("1pb")
var pmButton2 = document.getElementById("2pb")
var pmButton3 = document.getElementById("3pb")
var pmButton4 = document.getElementById("4pb")
var pmButton5 = document.getElementById("5pb")
var pmButton6 = document.getElementById("6pb")
var pmButton7 = document.getElementById("7pb")
var pmButton8 = document.getElementById("8pb")
var pmButton9 = document.getElementById("9pb")
var pmButton10 = document.getElementById("10pb")

var amButton7class = document.getElementById("7a")
var amButton8class = document.getElementById("8a")
var amButton9class = document.getElementById("9a")
var amButton10class = document.getElementById("10a")
var amButton11class = document.getElementById("11a")
var pmButton12class = document.getElementById("12p")
var pmButton1class = document.getElementById("1p")
var pmButton2class = document.getElementById("2p")
var pmButton3class = document.getElementById("3p")
var pmButton4class = document.getElementById("4p")
var pmButton5class = document.getElementById("5p")
var pmButton6class = document.getElementById("6p")
var pmButton7class = document.getElementById("7p")
var pmButton8class = document.getElementById("8p")
var pmButton9class = document.getElementById("9p")
var pmButton10class = document.getElementById("10p")



var classes = [amButton7class, amButton8class, amButton9class, amButton10class, amButton11class, pmButton12class, pmButton1class, pmButton2class, pmButton3class, pmButton4class, 
  pmButton5class, pmButton6class, pmButton7class, pmButton8class, pmButton9class, pmButton10class]

var saveBtns = [amButton7, amButton8, amButton9, amButton10, amButton11, pmButton12, pmButton1, pmButton2, pmButton3, pmButton4, 
  pmButton5, pmButton6, pmButton7, pmButton8, pmButton9, pmButton10]
  

for (i = 0; i < 16; i++) {
  if (moment().format('H') > (i+6) && moment().format('H') < (i+8)){
    classes[i].classList.add("present")
  } else if (moment().format('H') > (i+7))  {
    classes[i].classList.add("past")
  } else if (moment().format('H') < (i+7)) {
    classes[i].classList.add("future") }
  }

  

  
amButton7.addEventListener("click", function() {
  var am7local = amButton7class.value;
  localStorage.setItem("7am Text", am7local)});  
amButton8.addEventListener("click", function() {
  var am8local = amButton8class.value;
  localStorage.setItem("8am Text", am8local)});
amButton9.addEventListener("click", function() {
  var am9local = amButton9class.value;
  localStorage.setItem("9am Text", am9local)});  
amButton10.addEventListener("click", function() {
  var am10local = amButton10class.value;
  localStorage.setItem("10am Text", am10local)});
amButton11.addEventListener("click", function() {
  var am11local = amButton11class.value;
  localStorage.setItem("11am Text", am11local)});  
pmButton12.addEventListener("click", function() {
  var pm12local = pmButton12class.value;
  localStorage.setItem("12pm Text", pm12local)});
pmButton1.addEventListener("click", function() {
  var pm1local = pmButton1class.value;
  localStorage.setItem("1pm Text", pm1local)});
pmButton2.addEventListener("click", function() {
  var pm2local = pmButton2class.value;
  localStorage.setItem("2pm Text", pm2local)});
pmButton3.addEventListener("click", function() {
  var pm3local = pmButton3class.value;
  localStorage.setItem("3pm Text", pm3local)});
pmButton4.addEventListener("click", function() {
  var pm4local = pmButton4class.value;
  localStorage.setItem("4pm Text", pm4local)});
pmButton5.addEventListener("click", function() {
  var pm5local = pmButton5class.value;
  localStorage.setItem("5pm Text", pm5local)});
pmButton6.addEventListener("click", function() {
  var pm6local = pmButton6class.value;
  localStorage.setItem("6pm Text", pm6local)});
pmButton7.addEventListener("click", function() {
  var pm7local = pmButton7class.value;
  localStorage.setItem("7pm Text", pm7local)});
pmButton8.addEventListener("click", function() {
  var pm8local = pmButton8class.value;
  localStorage.setItem("8pm Text", pm8local)});
pmButton9.addEventListener("click", function() {
  var pm9local = pmButton9class.value;
  localStorage.setItem("9pm Text", pm9local)});
pmButton10.addEventListener("click", function() {
  var pm10local = pmButton10class.value;
  localStorage.setItem("10pm Text", pm10local)});




function displayTexts() {
  
  document.getElementById("7a").textContent = localStorage.getItem("7am Text");
  document.getElementById("8a").textContent = localStorage.getItem("8am Text");
  document.getElementById("9a").textContent = localStorage.getItem("9am Text");
  document.getElementById("10a").textContent = localStorage.getItem("10am Text");
  document.getElementById("11a").textContent = localStorage.getItem("11am Text");
  document.getElementById("12p").textContent = localStorage.getItem("12pm Text");
  document.getElementById("1p").textContent = localStorage.getItem("1pm Text");
  document.getElementById("2p").textContent = localStorage.getItem("2pm Text");
  document.getElementById("3p").textContent = localStorage.getItem("3pm Text");
  document.getElementById("4p").textContent = localStorage.getItem("4pm Text");
  document.getElementById("5p").textContent = localStorage.getItem("5pm Text");
  document.getElementById("6p").textContent = localStorage.getItem("6pm Text");
  document.getElementById("7p").textContent = localStorage.getItem("7pm Text");
  document.getElementById("8p").textContent = localStorage.getItem("8pm Text");
  document.getElementById("9p").textContent = localStorage.getItem("9pm Text");
  document.getElementById("10p").textContent = localStorage.getItem("10pm Text");
}

  displayTexts()