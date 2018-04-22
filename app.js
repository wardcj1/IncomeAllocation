$(document).ready(function(){
	$("#incomeTable").hide();
	$("#lumpSumTable").hide();

    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });

    $("#submitBtn").click(function(){
        $("#incomeTable").slideToggle();
    });

    $("#proceedBtn").click(function(){
        $("#lumpSumTable").slideToggle();
    });
});