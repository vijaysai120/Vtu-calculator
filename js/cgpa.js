function calculate_cgpa() {
  str_one = document.cgpa_form.one.value;
  str_one_arr = str_one.split(" ");
  if (str_one_arr[0] == 0) {
    credit_one = 0;
    product_one = 0;
  } else {
    sgpa_one = str_one_arr[0];
    credit_one = str_one_arr[1];
    product_one = sgpa_one * credit_one;
  }

  str_two = document.cgpa_form.two.value;
  str_two_arr = str_two.split(" ");
  if (str_two_arr[0] == 0) {
    credit_two = 0;
    product_two = 0;
  } else {
    sgpa_two = str_two_arr[0];
    credit_two = str_two_arr[1];
    product_two = sgpa_two * credit_two;
  }

  str_three = document.cgpa_form.three.value;
  str_three_arr = str_three.split(" ");
  if (str_three_arr[0] == 0) {
    credit_three = 0;
    product_three = 0;
  } else {
    sgpa_three = str_three_arr[0];
    credit_three = str_three_arr[1];
    product_three = sgpa_three * credit_three;
  }

  str_four = document.cgpa_form.four.value;
  str_four_arr = str_four.split(" ");
  if (str_four_arr[0] == 0) {
    credit_four = 0;
    product_four = 0;
  } else {
    sgpa_four = str_four_arr[0];
    credit_four = str_four_arr[1];
    product_four = sgpa_four * credit_four;
  }

  str_five = document.cgpa_form.five.value;
  str_five_arr = str_five.split(" ");
  if (str_five_arr[0] == 0) {
    credit_five = 0;
    product_five = 0;
  } else {
    sgpa_five = str_five_arr[0];
    credit_five = str_five_arr[1];
    product_five = sgpa_five * credit_five;
  }

  str_six = document.cgpa_form.six.value;
  str_six_arr = str_six.split(" ");
  if (str_six_arr[0] == 0) {
    credit_six = 0;
    product_six = 0;
  } else {
    sgpa_six = str_six_arr[0];
    credit_six = str_six_arr[1];
    product_six = sgpa_six * credit_six;
  }

  str_seven = document.cgpa_form.seven.value;
  str_seven_arr = str_seven.split(" ");
  if (str_seven_arr[0] == 0) {
    credit_seven = 0;
    product_seven = 0;
  } else {
    sgpa_seven = str_seven_arr[0];
    credit_seven = str_seven_arr[1];
    product_seven = sgpa_seven * credit_seven;
  }

  str_eight = document.cgpa_form.eight.value;
  str_eight_arr = str_eight.split(" ");
  if (str_eight_arr[0] == 0) {
    credit_eight = 0;
    product_eight = 0;
  } else {
    sgpa_eight = str_eight_arr[0];
    credit_eight = str_eight_arr[1];
    product_eight = sgpa_eight * credit_eight;
  }

  str_nine = document.cgpa_form.nine.value;
  str_nine_arr = str_nine.split(" ");
  if (str_nine_arr[0] == 0) {
    credit_nine = 0;
    product_nine = 0;
  } else {
    sgpa_nine = str_nine_arr[0];
    credit_nine = str_nine_arr[1];
    product_nine = sgpa_nine * credit_nine;
  }

  str_ten = document.cgpa_form.ten.value;
  str_ten_arr = str_ten.split(" ");
  if (str_ten_arr[0] == 0) {
    credit_ten = 0;
    product_ten = 0;
  } else {
    sgpa_ten = str_ten_arr[0];
    credit_ten = str_ten_arr[1];
    product_ten = sgpa_ten * credit_ten;
  }

  products_sum =
    product_one +
    product_two +
    product_three +
    product_four +
    product_five +
    product_six +
    product_seven +
    product_eight +
    product_nine +
    product_ten;

  credits_sum =
    parseInt(credit_one) +
    parseInt(credit_two) +
    parseInt(credit_three) +
    parseInt(credit_four) +
    parseInt(credit_five) +
    parseInt(credit_six) +
    parseInt(credit_seven) +
    parseInt(credit_eight) +
    parseInt(credit_nine) +
    parseInt(credit_ten);

  cgpa = products_sum / credits_sum;
  final_cgpa = Math.round((cgpa + Number.EPSILON) * 100) / 100;
  document.getElementById("cgpa-result").innerHTML =
    "CGPA scored by you: <span id='res-color'>" + final_cgpa + "</span>";
}
