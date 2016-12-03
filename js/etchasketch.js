function makeGrid(){
	for (x = 0; x < blockcount; x++){
		$wrapper.append("<div class='block'></div>")
	}
}

function draw(){
	$block.on("mouseover", function(){
		$(this).addClass("drawn");
	});
}

function checkNumber(){
	while (Math.sqrt(blockcount) > 45){
			alert("That number is not between 1 and 45.");
			blockcount = Math.pow(prompt("Please select a number between 1 and 45."), 2);
	} 
}

$(document).ready(function(){
	$wrapper = $(".wrapper");
	blockcount = 256;
	makeGrid();
	$block = $(".block");
	draw();
	$reset = $("#reset");
	$reset.click(function(){		
//Some boxcount math -- Math.pow(prompt("How many squares per side?"), 2);
		blockcount = Math.pow(prompt("How many squares per side? (1-45)"), 2);
		checkNumber();
		var blocksize = 600 / Math.sqrt(blockcount);
		$wrapper.empty();
		makeGrid();
		$block = $(".block");
		$block.width(blocksize);
		$block.height(blocksize);
		draw();
	});
});

