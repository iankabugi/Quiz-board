$(document).ready(function() {
  $("button#Submit").click(function() {
    //event.preventDefault();
    var questOne = $("input:radio[name=answerOne]:checked").val();
    var questTwo = $("input:radio[name=answerTwo]:checked").val();
    var questThree = $("input:radio[name=answerThree]:checked").val();
    var questFour = $("input:radio[name=answerFour]:checked").val();
    var questFive = $("input:radio[name=answerFive]:checked").val();
