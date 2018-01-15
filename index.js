var age = document.getElementById("age")
var name = document.getElementById("name")
var result = age.value;
var nameresult = name.value;

function myFunction() {
  if (result >= 17) {
    document.getElementById(`demo`).innerHTML = `Anda Sudah Dewasa`
  } else {
    document.getElementById(`demo`).innerHTML = `Anda Belum Dewasa`
  }
  console.log(nameresult);
}