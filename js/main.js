$(function () { 							//function declared
	$('li').on("click", function(e) {		// event listener for li whrn clicked
		$('li span').remove();				//remove any span inside of li on click
		var date = new Date();				// new date set into a variable
		date.setTime(e.timeStamp);			//date being set
		var clicked = date.toDateString(); //variable that declares the date only.
		$(this).append('<span>' + clicked + ' ' + e.type + '</span>') // li that is clicked will have date appended as a span whecn clicked.
	});
});