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
        $("#submitBtn").hide();
        $("#getStarted").hide();      
    });

    $("#proceedBtn1").click(function(){
        $("#budget").slideToggle();
        $("#proceedBtn1").hide();
    });

    $("#proceedBtn2").click(function(){
        $("#lumpSumTable").slideToggle();
        $("#proceedBtn2").hide();
    });
});

function displayVals() {
  var paySchedule = $( "#paySchedule" ).val();
  var netIncome = $( "#netIncome").val();
  var working = $( "#working:checked" ).val() || "";
  var retired = $( "#retired:checked" ).val() || "";
  
  $( "#t1A3" ).html( "<b>Pay Schedule:</b> " + "<br>" + paySchedule);
  $( "#t1B3" ).html( "<b>Income Amount:</b> " + "<br>" + "$ " + netIncome );
  $( "#t1C3" ).html( "<b>Status:</b> " + "<br>" + working + "<br>" + retired);

  // Income Allocation Table - Row 4 
  $( "#t1A4" ).html( "<b>Bank Checking Account:</b> " + "<br>" + "$ " + (netIncome * 0.8) );
  $( "#t1B4" ).html( "<b>Bank Savings Account:</b> " + "<br>" + "$ " + (netIncome * 0.05) );
  $( "#t1C4" ).html( "<b>Individual Retirement Account:</b> " + "<br>" + "$ " + (netIncome * 0.05) );
  $( "#t1D4" ).html( "<b>Brokerage Account:</b> " + "<br>" + "$ " + (netIncome * 0.10) );

  // Budget Table - Row 1
  $( "#t2A1" ).html( "<b>Starting Balance:</b> " + "<br>" + "$ " + (netIncome * 0.8) );
}
 
$( "input" ).change( displayVals ); 
$( "select" ).change( displayVals );
displayVals();