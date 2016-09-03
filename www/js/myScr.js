
var progWidth;

var init = function(){
	progWidth = document.getElementById("tabbedMenu").offsetWidth/2;
}

var scrollTimer = -1;

    function bodyScroll() {
        document.body.style.backgroundColor = "white";

        if (scrollTimer != -1)
            clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout("scrollFinished()", 300);
    }

    function scrollFinished() {
			centerFragment();
    }

var centerFragment = function() 
{
	progWidth = document.getElementById("tabbedMenu").offsetWidth /2;
	console.log(progWidth, document.body.scrollLeft);
	var currPos = document.body.scrollLeft;
	if(currPos < progWidth/3){
		document.body.scrollLeft = 0;
	}
	else if(currPos > progWidth/3 && currPos < progWidth){
		document.body.scrollLeft = progWidth*2/3;
	}
	else{
		document.body.scrollLeft = progWidth*3/2;
	}
}

function gotopage(){
	
	var selObj = document.getElementById("imageAmount").value;
	var temp = {'selectedAmount':selObj};
	sessionStorage.setItem('obj', JSON.stringify(temp));
	window.location = "vote_creator.html";
}



















