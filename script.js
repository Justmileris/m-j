var input = "";
var timeoutId = 0;

function theMostImportantMainFunction() {
	console.log('Hello, World!');
}

function letsHaveSomeFun() {
	document.onkeypress = function(e) {
		
	clearTimeout(timeoutId);
    timeoutId = setTimeout(resetInput, 700);
		
		e = e || window.event;
		var magic = (typeof e.which == "number") ? e.which : e.keyCode;
		
		if (magic) {
			input += String.fromCharCode(magic);	
			document.getElementById('text').style.color=input;
			document.body.style.background=input;
		}
	};
}

function resetInput() {
	input = "";
}

theMostImportantMainFunction();
letsHaveSomeFun();