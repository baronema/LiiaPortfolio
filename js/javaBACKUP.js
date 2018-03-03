$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 200);
    return false;
});

var slideshow = {
	p1: ["p1_1", "p1_2", "p1_3"],
	p2: ["p2_1", "p2_2", "p2_3"],
	p3: ["p3_1", "p3_2", "p3_3"],
	p4: ["p4_1", "p4_2", "p4_3"],
	p5: ["p5_1", "p5_2", "p5_3"],
	p6: ["p6.png", "p6_2", "p6_3"]
};





	
	$('.lightbox_trigger').click(function(e) {
		console.log("here you are");
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			console.log("IF!");
			//place href as img src value
			// $('#content').html('<img src="' + image_href + '" />');
		 //   	$('#back').show();
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			console.log("ELSE!");
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p id="close">Click to close</p>' +
				
				'<div class="col-md-12 col-sm-12 col-xs-12" id="content">' + //insert clicked link's href into img src
					'<div class="col-md-2 col-sm-2 col-xs-2"id="back" class="glyphicon glyphicon-backward">BACK</div>' +
						'<div class="col-md-8 col-sm-8 col-xs-8" id="image"><img src=""></div> ' +
					'<div class="col-md-2 col-sm-2 col-xs-2" id="forward" class="glyphicon glyphicon-forward">NEXT</div>' +
				'</div>' +
					
				'<div id="text">Now its time to tell everyone about some stuff you want to say here.</div>' +
			'</div>';
				
			//insert lightbox HTML into page
			
			var tempImg = image_href;
			console.log(tempImg);
			var dispImg = findPic(tempImg);		

			$('#lightbox').show();
				
			$('#image img').attr("src", "C:/Users/Punisher/Desktop/Liia's Portfolio/css/"  + dispImg);
		}

		$('#forward').click(function() {
			$('#image img').attr("src", "C:/Users/Punisher/Desktop/Liia's Portfolio/css/"  + slideshow.p6[0]);
		});

		$('#back').click(function() {
			$('#image img').attr("src", "C:/Users/Punisher/Desktop/Liia's Portfolio/css/"  + slideshow + "." + image_href);
		});

			//Click anywhere on the page to get rid of lightbox window
		$('#close').on('click', function() { 
			$('#lightbox').hide();
		});
		
	});

	
	
	function findPic(tempImg) {
		console.log(tempImg);
		switch(tempImg) {
			case 'p1':
			case 'p6': console.log("we made it!");
				break;
			default: ("Error finding the picture to display");
		};
	};



