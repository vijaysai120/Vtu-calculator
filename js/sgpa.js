function calculate() {
  str_five = document.sgpa_form.five.value;
  str_five_arr = str_five.split(" ");
  if (str_five_arr[0] == 0) {
    tot_cre_five = 0;
    five_sum = 0;
  } else {
    str_five_arr_len = str_five_arr.length;
    tot_cre_five = str_five_arr_len * 5;
    str_five_count = 0;
    str_five_grade_arr = [];
    for (str_five_i = 0; str_five_i < str_five_arr_len; str_five_i++) {
      str_five_arr_i = str_five_arr[str_five_i];
      str_five_arr_i = parseInt(str_five_arr_i) / 2;
      str_five_arr_i = str_five_arr_i.toString();
      str_five_arr1 = str_five_arr_i.split("");
      str_five_grade_arr[str_five_count] = parseInt(str_five_arr1[0]) + 1;
      str_five_count++;
    }
    for (a = 0; a < str_five_grade_arr.length; a++) {
      str_five_grade_arr[a] *= 5;
    }
    five_sum = str_five_grade_arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  //////////////////////////////////////
  str_four = document.sgpa_form.four.value;
  str_four_arr = str_four.split(" ");
  if (str_four_arr[0] == 0) {
    tot_cre_four = 0;
    four_sum = 0;
  } else {
    str_four_arr_len = str_four_arr.length;
    tot_cre_four = str_four_arr_len * 4;
    str_four_count = 0;
    str_four_grade_arr = [];
    for (str_four_i = 0; str_four_i < str_four_arr_len; str_four_i++) {
      str_four_arr_i = str_four_arr[str_four_i];
      if (parseInt(str_four_arr_i) == 100) {
        str_four_arr_i = "99";
      }
      str_four_arr1 = str_four_arr_i.split("");
      str_four_grade_arr[str_four_count] = parseInt(str_four_arr1[0]) + 1;
      str_four_count++;
    }
    for (a = 0; a < str_four_grade_arr.length; a++) {
      str_four_grade_arr[a] *= 4;
    }
    four_sum = str_four_grade_arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  //////////////////////////////////////
  str_three = document.sgpa_form.three.value;
  str_three_arr = str_three.split(" ");
  if (str_three_arr[0] == 0) {
    tot_cre_three = 0;
    three_sum = 0;
  } else {
    str_three_arr_len = str_three_arr.length;
    tot_cre_three = str_three_arr_len * 3;
    str_three_count = 0;
    str_three_grade_arr = [];
    for (str_three_i = 0; str_three_i < str_three_arr_len; str_three_i++) {
      str_three_arr_i = str_three_arr[str_three_i];
      if (parseInt(str_three_arr_i) == 100) {
        str_three_arr_i = "99";
      }
      str_three_arr1 = str_three_arr_i.split("");
      str_three_grade_arr[str_three_count] = parseInt(str_three_arr1[0]) + 1;
      str_three_count++;
    }
    for (a = 0; a < str_three_grade_arr.length; a++) {
      str_three_grade_arr[a] *= 3;
    }
    three_sum = str_three_grade_arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  //////////////////////////////////////
  str_two = document.sgpa_form.two.value;
  str_two_arr = str_two.split(" ");
  if (str_two_arr[0] == 0) {
    tot_cre_two = 0;
    two_sum = 0;
  } else {
    str_two_arr_len = str_two_arr.length;
    tot_cre_two = str_two_arr_len * 2;
    if (str_two_arr[0] == 0) {
      tot_cre_two = 0;
    }
    str_two_count = 0;
    str_two_grade_arr = [];
    for (str_two_i = 0; str_two_i < str_two_arr_len; str_two_i++) {
      str_two_arr_i = str_two_arr[str_two_i];
      if (parseInt(str_two_arr_i) == 100) {
        str_two_arr_i = "99";
      }
      str_two_arr1 = str_two_arr_i.split("");
      str_two_grade_arr[str_two_count] = parseInt(str_two_arr1[0]) + 1;
      str_two_count++;
    }
    for (a = 0; a < str_two_grade_arr.length; a++) {
      str_two_grade_arr[a] *= 2;
    }
    two_sum = str_two_grade_arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  ///////////////////////////////////////
  str_one = document.sgpa_form.one.value;
  str_one_arr = str_one.split(" ");
  if (str_one_arr[0] == 0) {
    tot_cre_one = 0;
    one_sum = 0;
  } else {
    str_one_arr_len = str_one_arr.length;
    tot_cre_one = str_one_arr_len;
    if (str_one_arr[0] == 0) {
      tot_cre_one = 0;
    }
    str_one_count = 0;
    str_one_grade_arr = [];
    for (str_one_i = 0; str_one_i < str_one_arr_len; str_one_i++) {
      str_one_arr_i = str_one_arr[str_one_i];
      if (parseInt(str_one_arr_i) == 100) {
        str_one_arr_i = "99";
      }
      str_one_arr1 = str_one_arr_i.split("");
      str_one_grade_arr[str_one_count] = parseInt(str_one_arr1[0]) + 1;
      str_one_count++;
    }
    for (a = 0; a < str_one_grade_arr.length; a++) {
      str_one_grade_arr[a] *= 1;
    }
    one_sum = str_one_grade_arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  ////////////////////////////////////////
  final_grade_credit_sum = five_sum + four_sum + three_sum + two_sum + one_sum;
  final_credit_sum =
    tot_cre_five + tot_cre_four + tot_cre_three + tot_cre_two + tot_cre_one;

  sgpa = final_grade_credit_sum / final_credit_sum;
  final_sgpa = Math.round((sgpa + Number.EPSILON) * 100) / 100;
  if (isNaN(final_sgpa)) {
    document.getElementById("result").innerHTML =
      "<span id='error'>Please provide correct input!</span>";
  } else {
    document.getElementById("result").innerHTML =
      "SGPA scored by you: <span id='res-mod'>" + final_sgpa + "</span>";
  }
}
