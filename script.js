function openDialog1() {
  var modal = document.getElementById("loginbox");
  var overlay = document.getElementById("overlay");
  modal.style.display = "block";
  overlay.style.filter = "blur(5px)";
}
function openDialog2() {
  var modal = document.getElementById("signinbox");
  var overlay = document.getElementById("overlay");
  modal.style.display = "block";
  overlay.style.filter = "blur(5px)";
}
function closeDialog1() {
  var modal = document.getElementById("loginbox");
  var overlay = document.getElementById("overlay");
  loginbox.style.display = "none";
  overlay.style.filter = "none";
}
function closeDialog2() {
  var modal = document.getElementById("signinbox");
  var overlay = document.getElementById("overlay");
  signinbox.style.display = "none";
  overlay.style.filter = "none";
}
function displayday() {
  var month = document.getElementById("month");
  var select = document.getElementById("day");
  select.innerHTML = " ";

  if (
    month.value === "jan" ||
    month.value === "march" ||
    month.value === "may" ||
    month.value === "jul" ||
    month.value === "aug" ||
    month.value === "oct" ||
    month.value === "dec"
  ) {
    for (var day = 1; day <= 31; day++) {
      var option = document.createElement("option");
      option.text = day;
      option.value = day;
      select.appendChild(option);
    }
  } else if (month.value === "feb") {
    for (var day = 1; day <= 28; day++) {
      var option = document.createElement("option");
      option.text = day;
      option.value = day;
      select.appendChild(option);
    }
  } else {
    for (var day = 1; day <= 30; day++) {
      var option = document.createElement("option");
      option.text = day;
      option.value = day;
      select.appendChild(option);
    }
  }
}
function displayyear() {
  var select = document.getElementById("year");
  var currentYear = new Date().getFullYear();
  if (select.options.length === 0) {
    for (var year = 1950; year <= currentYear; year++) {
      var option = document.createElement("option");
      option.text = year;
      option.value = year;
      select.appendChild(option);
    }
  }
}
