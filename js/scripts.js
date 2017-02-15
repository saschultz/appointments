$(document).ready(function() {
  $("#formOne").submit(function(event) {



    var name = $("input#name").val();
    var service = $("input#service").val();
    var date = $("input#date").val();
    var start = $("input#start").val();
    var end = $("input#end").val();
    // function validate() {
    //   if (start == null) {
    //   alert("Time must be filled out");
    //     // return false;
    //   }}
    $(".name").text(name);
    $(".service").text(service);
    $(".date").text(date);
    $(".start").text(start);
    $(".end").text(end);
    $("#review").show();

    event.preventDefault();
  });
});
