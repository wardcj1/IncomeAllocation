    // $("#btn1").click(function(){
    //     $("#test1").text("Hello world!");
    // });
    
    // $("#btn2").click(function(){
    //     $("#test2").html("<b>Hello world!</b>");
    // });
    
    // $("#btn3").click(function(){
    //     $("#test3").val("Dolly Duck");
    // });

$(document).ready(function(){
	$("#incomeTable").hide();
	$("#budget").hide();
	$("#lumpSumTable").hide();

    $("#submitBtn").click(function(){
        $("#incomeTable").slideToggle();
    });

    $("#proceedBtn1").click(function(){
        $("#budget").slideToggle();
    });

    $("#proceedBtn2").click(function(){
        $("#lumpSumTable").slideToggle();
    });
});

function displayVals() {
  var singleValues = $( "#single" ).val();
  var multipleValues = $( "#multiple" ).val() || [];
  $( "#t1A3" ).html( "<b>Single:</b> " + "<br>" + singleValues + "<br>" +
    " <b>Multiple:</b> " + "<br>" + multipleValues.join( ", " ) );
}
 
$( "select" ).change( displayVals );
displayVals();