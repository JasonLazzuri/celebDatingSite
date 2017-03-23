$(document).ready(function() {
  $("#form").submit(function(event) {

    var gender = $("#gender").val();
    var color = $("#color").val();
    var setting = $("#setting").val();

    if (gender === "male" && color === "red" && setting === "mountain"||"city"){
      $(".tina").show();
    } else if (!gender, color === "red" && setting === "mountain"||"city"); {
      alert('Please enter in the field');
}

    // }else if (gender === "male" && color === "blue" && (setting === "mountain"||"city")){
    //     $(".amy").show();
    // }
    // if (gender === "female" && color === "red" && (setting === "mountain"||"city")){
    //   $(".ray").show();
    // } else if (gender === "female" && color === "blue" && (setting === "mountain"||"city")){
    //     $(".adam ").show();
    // }
    // if (!gender, !color, !setting);
    //   alert('Please enter in the field');
    //

    event.preventDefault()

  });
});
// if ((gender != "male"||"female")||(color != "blue" || "red")||(setting != "city"|| "mountain"));
// alert("please enter the correct input"),
// else{
//   if ((gender != "male"||"female")||(color != "blue" || "red")||(setting != "city"|| "mountain"));
//   alert("please enter the correct input"),
// }
