var lineNum = function() {
	for(var i=1; i >= 0; i++) {
		return i;
	}
};

$(document).ready(function(){

	$("button").click(function(){

		//$( ".hello" ).html( "<div>Test</div>" );
		//$( "div" ).insertAfter(".hello");
		$( ".hello" ).append( "<div class='newDiv'>Line # lineNum(i) <button class='one'></button><button class='two'></button></div>" );
			$(".one").click(function(){
				$(".newDiv").css("background-color", "#663399");
			});
			$(".two").click(function(){
				$(".hello").parent().remove();
			});
			
		});

});

/*code for button 1: 
	$("#button1").parent()
       .css(backgroundColor: '#663399');

code for button 2: 
	$("#button2").parent().remove();




*/