$(document).ready(function(){
   //$("#btnHeading").
   $("#heading").submit(function(event){
      
    event.preventDefault();
    var name = $("input[name='heading']",this).val();
    console.log(name);
    $(".main").append("<section><h1>"+name+"</h1></section");
    $('#exampleModal1').modal('toggle');
    $('#drpHeadig').append("<option>"+name+"</option>")
    $('#formHeading').append("<option>"+name+"</option>")
   });

   //sub heading modal

   
   
} )