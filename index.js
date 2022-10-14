$(document).ready(function () {
   //$("#btnHeading").
   $(".heading").submit(function (event) {


      event.preventDefault();
      var heading = $("input[name='heading']", this).val();
      $("main").append("<section><h1>" + heading + "</h1></section");
      $('#exampleModal1').modal('toggle');

      $('#drpHeadig').children().remove().end()
         .append('<option selected value="0">--Select Heading--</option>');
      $('#formHeading').children().remove().end()
         .append('<option selected value="0">--Select Heading--</option>');

      $("main section h1").each(function (index) {
         var indx = index + 1;
         var txtval = $(this).text();
         // $('<option>').val(indx).text(txtval).appendTo('#drpHeadig');
         $("#drpHeadig").append(new Option(txtval, indx));
         $("#formHeading").append(new Option(txtval, indx));

      })

   });

   //sub heading modal related

   $(".formSubHeading").submit(function (event) {
      event.preventDefault();
      var n = $("#drpHeadig").val();
      var heading11 = $("input[name='inputsub']", this).val();

      $('#drpSubHeading').children().remove().end()
         .append('<option selected value="0">--Select Heading--</option>');

      $("main section:nth-child(" + n + ")").append("<div><h3>" + heading11 + "</h3></div>");
      $('#exampleModal2').modal('toggle');

   });

   $("#formHeading").on('change', function (index) {
      $('#drpSubHeading').children().remove().end()
         .append('<option selected value="0">--Select Heading--</option>');

      var hh = $(this).find(":selected").val();
      var kk = $("main section:nth-child(" + hh + ") div").each(function (index) {
         index1=index+1;
         tt = $(this).text();
         $("#drpSubHeading").append(new Option(tt, index1));

      });
   });
      
      //formInput  --- form 3----

   $(".formInput").submit(function (event) {
        
         event.preventDefault();
         //var fhh=$("#drpSubHeading :selected").text();
         
         //console.log(fhh,"seleellel")
         var drpvalue = $("#inputtype").val();
        
         var inputName = $("#inputName").val();

         var inputLabel=$("#inputLabel").val();
         var inputClass=$("#inputClass").val();
         var inputValue=$("#inputValue").val();
         var inputPlaceholder=$("#inputPlaceholder").val();
        
         var inputReadonly=$("#inputReadonly").val();
         var inputDisabled=$("#inputDisabled").val();
         var required=$("#required").val();
         var formheading=parseInt($("#formHeading :selected").val());
         var formhSubeading=parseInt( $("#drpSubHeading :selected").val());  
         var inputOption=$("#inputOption").val();
                  
         if(drpvalue == "radio"){
            console.log(drpvalue)
         }
         else if(drpvalue == "checkbox"){
            console.log(drpvalue)
         }

         else if(drpvalue == "select"){
            var arroption= inputOption.split(',');
            console.log(arroption);
            var select = $("<select class="+inputClass+" name="+inputName+"></select>");
           
           //$(select).prepend("<p></p>");


            $(arroption).each(function(key,value ){
                  key=key+1;
                  var option = $("<option></option>");
                  option.val(key);
                  option.html(value);
                  $(select).append(option);
            })
          
          //  
           // console.log(select)
          $('<p></p>').appendTo($("main section:nth-child("+formheading+") div:nth-child("+(formhSubeading+1)+")"));
            
          $(select).appendTo($("main section:nth-child("+formheading+") div:nth-child("+(formhSubeading+1)+") p"));
           
         }
         else if(drpvalue == "file"){
            console.log(drpvalue)
         }
         else if(drpvalue == "textarea"){
            $("main section:nth-child("+formheading+") div:nth-child("+(formhSubeading+1)+")").append("<p><label>"+inputLabel+"</label><textarea name="+inputName+" class="+inputClass+" placeholder="+inputPlaceholder+"></textarea></p>"); //add input box
         }
         else{
         
            $("main section:nth-child("+formheading+")  div:nth-child("+(formhSubeading+1)+")").append("<p><label>"+inputLabel+"</label><input type="+drpvalue+" name="+inputName+" class="+inputClass+" value="+inputValue+" placeholder="+inputPlaceholder+"></p>"); //add input box
         }

         

   })


});
