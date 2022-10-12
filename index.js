$(document).ready(function(){
   //$("#btnHeading").
      $(".heading").submit(function(event){
         

         event.preventDefault();
         var heading = $("input[name='heading']",this).val();
         $("main").append("<section><h1>"+heading+"</h1></section");
         $('#exampleModal1').modal('toggle');
     
         $('#drpHeadig').children().remove().end()
            .append('<option selected value="0">--Select Heading--</option>') ;
            $('#formHeading').children().remove().end()
            .append('<option selected value="0">--Select Heading--</option>') ;

         $("main section h1").each(function (index){
           var indx= index+1;
           var txtval = $(this).text();
          // $('<option>').val(indx).text(txtval).appendTo('#drpHeadig');
          $("#drpHeadig").append(new Option(txtval,indx));
          $("#formHeading").append(new Option(txtval,indx));

         })
         
      });

   //sub heading modal related

      $(".formSubHeading").submit(function(event){
         event.preventDefault();
         var n = $("#drpHeadig").val();
         var heading11 = $("input[name='inputsub']",this).val();

         $('#drpSubHeading').children().remove().end()
            .append('<option selected value="0">--Select Heading--</option>') ;

            $("main section h3").each(function(index){
               var sbindex=index+101;
               var subtxtval=$(this).text();
               console.log(sbindex);
               console.log(subtxtval);
//$("#drpSubHeading").append(new Option(subtxtval,sbindex));

            })

            //

         $("main section:nth-child("+n+")").append("<div><h3>"+heading11+"</h3></div>");
         $('#exampleModal2').modal('toggle');
    
      });



      
  
  

   
   
} )