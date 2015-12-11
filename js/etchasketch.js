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



$(document).ready(function(){
	$wrapper = $(".wrapper");
	blockcount = 256;
	makeGrid();
	$block = $(".block");
	draw();
	$reset = $("#reset");
	$reset.click(function(){		
//Some boxcount math -- Math.pow(prompt("How many squares per side?"), 2);
		blockcount = Math.pow(prompt("How many squares per side?"), 2);
		var blocksize = 1200 / blockcount;
		$wrapper.empty();
		makeGrid();
		$block = $(".block");
		$block.width(blocksize);
		$block.height(blocksize);
		draw();
	});
});

