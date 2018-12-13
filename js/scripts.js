$(document).ready(function() {
  $("#submit").click(function() {

    var attemptOne = $("input:radio[name=answerOne]:checked").val();
    var attemptTwo = $("input:radio[name=answerTwo]:checked").val();
    var attemptThree = $("input:radio[name=answerThree]:checked").val();
    var attemptFour = $("input:radio[name=answerFour]:checked").val();
    var attemptFive = $("input:radio[name=answerFive]:checked").val();


    $(".quiz").hide();


    var attemptOne1, attemptOne2, attemptOne3, attemptOne4, attemptOne5;

    if (attemptOne.toString() === "no") {
      attemptOne1 = 20;
    } else {
      attemptOne1 = 0;
    }
    if (attemptTwo.toString() === "A library of  javascript functions") {
      attemptOne2 = 20;
    } else {
      attemptOne2 = 0;
    }
    if (attemptThree.toString() === "Back end web development") {
      attemptOne3 = 20;
    } else {
      attemptOne3 = 0;
    }
    if (attemptFour.toString() === "NaN") {
      attemptOne4 = 20;
    } else {
      attemptOne4 = 0;
    }
    if (attemptFive.toString() === "True") {
      attemptOne5 = 20;
    } else {
      attemptOne5 = 0;
    }

    add(attemptOne1, attemptOne2, attemptOne3, attemptOne4, attemptOne5);
    //$("#.container").hide();
  });
});

var add = function(res1, res2, res3, res4, res5) {
  var result = res1 + res2 + res3 + res4 + res5;
  $("#output").text("You have scored " + result);
};
