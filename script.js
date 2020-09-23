function addFour() {
  document.getElementById("my-input").innerHTML +=
    "<input type='text' class='form-control-lg' placeholder='4 Credits Subject Marks' name='4-sub' /><br /><br />";
}
function addThree() {
  document.getElementById("my-input").innerHTML +=
    "<input type='text' class='form-control-lg' placeholder='3 Credits Subject Marks' name='3-sub' /><br /><br />";
}
function addTwo() {
  document.getElementById("my-input").innerHTML +=
    "<input type='text' class='form-control-lg' placeholder='2 Credits Subject Marks' name='2-sub' /><br /><br />";
}
function addOne() {
  document.getElementById("my-input").innerHTML +=
    "<input type='text' class='form-control-lg' placeholder='1 Credits Subject Marks' name='1-sub' /><br /><br />";
}
function calculate() {
  a = Number(document.form.num3.value);
  b = Number(document.form.num4.value);
  c = a + b;
  document.form1.result1.value = c;
}
