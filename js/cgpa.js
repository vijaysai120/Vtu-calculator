function calculate_cgpa() {
  str_one = document.cgpa_form.one.value;
  str_one_arr = str_one.split(" ");
  if (str_one_arr[0] == 0) {
    credit_one = 0;
    summation_one = 0;
  } else {
    summation_one = parseInt(str_one_arr[0]);
    credit_one = str_one_arr[1];
  }

  str_two = document.cgpa_form.two.value;
  str_two_arr = str_two.split(" ");
  if (str_two_arr[0] == 0) {
    credit_two = 0;
    summation_two = 0;
  } else {
    summation_two = parseInt(str_two_arr[0]);
    credit_two = str_two_arr[1];
  }

  str_three = document.cgpa_form.three.value;
  str_three_arr = str_three.split(" ");
  if (str_three_arr[0] == 0) {
    credit_three = 0;
    summation_three = 0;
  } else {
    summation_three = parseInt(str_three_arr[0]);
    credit_three = str_three_arr[1];
  }

  str_four = document.cgpa_form.four.value;
  str_four_arr = str_four.split(" ");
  if (str_four_arr[0] == 0) {
    credit_four = 0;
    summation_four = 0;
  } else {
    summation_four = parseInt(str_four_arr[0]);
    credit_four = str_four_arr[1];
  }

  str_five = document.cgpa_form.five.value;
  str_five_arr = str_five.split(" ");
  if (str_five_arr[0] == 0) {
    credit_five = 0;
    summation_five = 0;
  } else {
    summation_five = parseInt(str_five_arr[0]);
    credit_five = str_five_arr[1];
  }

  str_six = document.cgpa_form.six.value;
  str_six_arr = str_six.split(" ");
  if (str_six_arr[0] == 0) {
    credit_six = 0;
    summation_six = 0;
  } else {
    summation_six = parseInt(str_six_arr[0]);
    credit_six = str_six_arr[1];
  }

  str_seven = document.cgpa_form.seven.value;
  str_seven_arr = str_seven.split(" ");
  if (str_seven_arr[0] == 0) {
    credit_seven = 0;
    summation_seven = 0;
  } else {
    summation_seven = parseInt(str_seven_arr[0]);
    credit_seven = str_seven_arr[1];
  }

  str_eight = document.cgpa_form.eight.value;
  str_eight_arr = str_eight.split(" ");
  if (str_eight_arr[0] == 0) {
    credit_eight = 0;
    summation_eight = 0;
  } else {
    summation_eight = parseInt(str_eight_arr[0]);
    credit_eight = str_eight_arr[1];
  }

  str_nine = document.cgpa_form.nine.value;
  str_nine_arr = str_nine.split(" ");
  if (str_nine_arr[0] == 0) {
    credit_nine = 0;
    summation_nine = 0;
  } else {
    summation_nine = parseInt(str_nine_arr[0]);
    credit_nine = str_nine_arr[1];
  }

  str_ten = document.cgpa_form.ten.value;
  str_ten_arr = str_ten.split(" ");
  if (str_ten_arr[0] == 0) {
    credit_ten = 0;
    summation_ten = 0;
  } else {
    summation_ten = parseInt(str_ten_arr[0]);
    credit_ten = str_ten_arr[1];
  }

  summations_sum =
    summation_one +
    summation_two +
    summation_three +
    summation_four +
    summation_five +
    summation_six +
    summation_seven +
    summation_eight +
    summation_nine +
    summation_ten;

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

  cgpa = summations_sum / credits_sum;
  final_cgpa = Math.round((cgpa + Number.EPSILON) * 100) / 100;
  if (isNaN(final_cgpa)) {
    document.getElementById("result").innerHTML =
      "<span id='error'>Please provide correct input!</span>";
  } else {
    document.getElementById("result").innerHTML =
      "CGPA scored by you: <span id='res-mod'>" + final_cgpa + "</span>";
  }
}
