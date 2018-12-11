$(document).ready(function() {
  $("#submit").click(function() {

    var attemptOne = $("input:radio[name=answerOne]:checked").val();
    var attemptTwo = $("input:radio[name=answerTwo]:checked").val();
    var attemptThree = $("input:radio[name=answerThree]:checked").val();
    var attemptFour = $("input:radio[name=answerFour]:checked").val();
    var attemptFive = $("input:radio[name=answerFive]:checked").val();

var totalScore =parseInt(attemptOne)+ parseInt(attemptTwo) + parseInt(attemptThree) + parseInt(attemptFour) + parseInt(attemptFive)
var percentageScore= (totalScore/100)*100
var percentageScore=percentageScore.toString() + "%"
$("#submit").text(percentageScore);
$(".container").hide(function(event){
    alert(percentageScore);
  });
  });
});
