$(document).ready(function() {
  $("#form").submit(function(event) {

    var gender = $("#gender").val();
    var color = $("#color").val();
    var setting = $("#setting").val();

    if (gender === "male" && color === "red" && (setting === "mountain"||"city")){
      $(".tina").show();
    } else if (gender === "male" && color === "blue" && (setting === "mountain"||"city")){
        $(".amy").show();
    }
    if (gender === "female" && color === "red" && (setting === "mountain"||"city")){
      $(".ray").show();
    } else if (gender === "female" && color === "blue" && (setting === "mountain"||"city")){
        $(".adam").show();
    }

    event.preventDefault()

  });
});
