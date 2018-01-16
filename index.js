var age = document.getElementById("age")
var name = document.getElementById("name")


function myFunction() {
  var result = age.value;
  var nameresult = name.value;
  if (result >= 17) {
    document.getElementById(`demo`).innerHTML = `Anda Sudah Dewasa`
  } else {
    document.getElementById(`demo`).innerHTML = `Anda Belum Dewasa`
  }
  console.log(result);
  console.log(nameresult);
}