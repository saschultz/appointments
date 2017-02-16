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
    $(".map").text( src="https://www.google.com/maps/place/445+SE+39th+Ave,+Portland,+OR+97214/@45.5197872,-122.6252259,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a0ebbe4ae0ed:0x6b29c59b525b3b72!8m2!3d45.5197835!4d-122.6230319" );
    $("#review").show();

    event.preventDefault();
  });
});
