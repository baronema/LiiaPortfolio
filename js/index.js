
var slideshow = {
	p1: [
			"Bringing S.T.E.A.M.(STEM plus Art) lessons to life!", 
			"My students don’t just learn about academic concepts, they explore them through play as well! Here they are exploring primary and secondary colors by creating various shades of water in a sensory tub.", 
			"In addition to teacher directed lessons, students are encouraged to explore concepts in a variety of mediums including sensory activities such as the one pictured here. Students are pouring water into a variety of containers as they continue exploring a math concept during our unit on “capacity”.",
			"The dramatic play center during the week that coincided with a “capacity” unit was turned into an ice cream shop where students benefitted from engaging in social settings which fostered vocabulary integration as they communicated with one another about ordering containers by size and comparing how many scoops would fit into each size.",
			"That week’s sight words were incorporated as well, as students ordered “one” “two” or “three scoops” when it was their turn to play the role of customer.",
			"During a thematic unit on the Winter Olympics, I utilized math centers to allow students to build number sense and fine motor skills as they counted and strung beads onto numbered pipe cleaners with flags representing other countries around the World.",
			"After watching several exciting media clips of Winter Olympians in action, students used halved pool noodles and blocks to engineer “ice luges” for their lego figurines to race down!",
			"Students also explored the differences between snowboarding and cross country skiing in a sensory center with fake snow as the lessons of the Winter Olympics came to life for them!",
			"After learning about the many sporting events that would be held during the 2018 Winter Olympics, learning the history and traditions of the games and about many of the countries that would be represented, students completed entries in their writing journals about a sport or activity they like to do in the Winter.",
			"Another math center during this week provided additional opportunities to build number sense while incorporating some of the symbols we had learned about pertaining to the Olympic Games.",
			"One of the independent literacy centers during this thematic unit encouraged students to search the classroom for sight words written on Olympic torches. They recorded each of the sight words using a template of the Olympic Rings."
		],
	p2: [
			"Students in my classroom learn that they have the power to affect how others feel. Discussions about some of the many emotions we can experience are incorporated into all aspects of our school day and students are encouraged regularly to talk about their feelings as they learn to be self-aware as to what causes us to feel certain ways.", 
			"Over time, my students begin seeking opportunities to change someone’s day for the better. They regularly participate in cutting and collecting a classroom supply of “happy hearts” so that we always have them on hand when we notice a friend in need.", 
			"If they find an opportunity when someone is sad, angry, hurt, discouraged, etc, they know to go to our “happy hearts” bin and bring that person a special note as a way of offering encouragement and reminding the friend that we care about how they are feeling.",
			"Each child knows that the rest of us are here to help in any way we can, and can feel safe to experience and overcome challenges with the support of a comforting, inclusive, classroom culture. I’ve even had students bring ME a happy heart on a particularly trying day.",
			"I have personally seen and felt the power of these tiny construction paper hearts. I am very proud of the kindness and empathy my students learn to show one another and know that they take this kindness out into the World with them when they leave my classroom."
		],
	p3: [
			"My students learn and practice very clear expectations of their behavior through carefully designed routines, and ongoing encouragement throughout the day. You won’t find traditional clothespin “clipping” or “card flipping” systems in my classroom. Instead, you’ll find me tossing out “great choice sticks” left and right which students earn throughout the day and tally as part of our afternoon meeting routine. Instead of being rewarded with extrinsic rewards like “treasure box” or candy, these “great choice sticks” simply act as an instant tangible representation of the recognition they are receiving for making a positive choice in the classroom. Over time, I have found that this allows students to seek the intrinsic reward of pride and the sense of confidence they develop as they become more capable of self-management skills. It also provides a platform from which students can begin to participate in meaningful self-assessments and set measurable goals for improvement. My students are empowered by having so many opportunities for positive feedback and clear and achievable examples of specific choices they can make in order to thrive.", 
			"We begin our mornings with a brief reminder of the promises we make to one another. These promises encourage students to bring their best attitudes to school with them, to try hard, to have fun, and to be mindful of being kind and respectful to one another. It provides an opportunity at the start of every day for us to address any recent examples of such character traits in action or any relevant topics that can help address a need for improvement in any of these areas. Perhaps most importantly however, this brief moment in our morning reminds us that kindness should be in the forefront of our minds as we embark on our school day.", 
			"I provide ongoing training to faculty members on effective classroom management procedures by means of conducting classroom observations and providing feedback, as well as presenting mini lessons during school-wide professional development sessions."
		],
	p4: [
			"This particular student is quick to guess before looking at all possible answers. The smiley face on his finger reminds him to make sure his finger takes a good look at every possibility before choosing one as his answer.", 
			"Some students benefit from using '3 point' pencil grips as they develop grip strength and fine motor skills necessary to hold a writing utensil effectively.", 
			"Even after students have learned basic writing conventions and word spacing, some students still need assistance in determining how much space to leave between words. Jumbo craft sticks are the perfect tool for this job!", 
			"For other students still working on determining where spaces belong as they write short sentences, transposing from sticky notes with spaces in between each word can help provide visual representations as to when one word ends and a new one begins.",
			"Other students may have mastered the concepts of word spacing, but lack the fine motor skills in order to write letters and words efficiently/legibly without additional support. This particular student is working to write his letters and words smaller. The boxes in yellow help him gage how big his letters should be so that each word fits entirely within the box.",
			"While most students are able to use a combination of sight words and inventive spelling to write simple sentences, some students occasionally find it helpful to have a sentence strip with the alphabet handy in order to determine which letter sound they have isolated within a given word.",
			"This particular student is not quite ready to write phonetically. Instead, she transposes her responses and we use this as an opportunity to reinforce the letters in each word and their sounds."
		],
	p6: [
			"My class now participates in a music therapy class with residents at a local assisted living facility every Wednesday.",
	 		"Through music, students make genuine connections with our “Grandfriends” and facilitate a sense of community through the intergenerational friendships they form.", 
	 		"During the month of November, I have my students earn money doing simple chores for friends and family members at home, in order to raise money for a field trip we take at the end of the month to PUBLIX as part of our school’s canned food drive initiative.",
	 		"Students earn, count, track, and then get to spend the money in order to help feed families in need within our community.",
	 		"This year we raised over $300 and filled 4 shopping carts with non-perishable food items!",
	 		"After the severe weather many communities across our country endured this year, I proposed a bake sale with our afterschool students in order to raise money for hurricane relief.",
	 		"We do our part to help save Mother Earth as well! During a thematic unit on “Reducing, Reusing and Recycling” students collect, sort, repurpose, and learn ways to reduce the amount of waste we create. We also take a field trip to the recycling center to see for ourselves that we can all be part of the recycling process and make a pledge to do our part in taking care of our environment.",
	 		"I also reach out to local business with several other colleagues, in order to acquire sponsorships and donations which help fund special events like our Annual Fun Run and Spring fling fundraisers benefiting a wonderful Atlanta charity called Camp Sunshine."
	 	]
};

var fileExt = ".png",
	image_href,
	dispImg,
	name,
	text;

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 200);
    return false;
});


$('.lightbox_trigger').click(function(e) {
	//prevent default action (hyperlink)
	e.preventDefault();

	var count = 0;		//Tracks iteration through current slideshow
	
	//Get the clicked link href
	image_href = $(this).attr("href");
	
	max = findMax(image_href);

	/* 	
	If the lightbox window HTML already exists in document, 
	change the img src to to match the href of whatever link was clicked
	*/
	if ($('#lightbox').length > 0) { // #lightbox exists
		$('#lightbox').show('fast');
		name = image_href;
		text = slideshow[name];
		showPic(name, text, count);	
	}
	/*
	Else the lightbox window HTML doesn't exists, create it and insert it.
	(This will only happen the first time around)
	*/
	else { 
		//create HTML markup for lightbox window
		var lightbox = 
		'<div id="lightbox">' +
			'<div id="lbContainer">' +
				'<div class=" btn btn-outline btn-sm glyphicon glyphicon-remove-sign" id="close"> Close</div>' +
				'<div class="row1">' +
					'<div class="col-md-12 col-sm-12 col-xs-12" id="content">' + //insert clicked link's href into img src
						'<div class="col-md-3 col-sm-3 col-xs-3"><div class="btn btn-outline btn-sm glyphicon glyphicon-circle-arrow-left" id="back"></div></div>' +
							'<div class="col-md-6 col-sm-6 col-xs-6" id="image"><img src=""></div> ' +
						'<div class="col-md-3 col-sm-3 col-xs-3"><div class="btn btn-outline btn-sm glyphicon glyphicon-circle-arrow-right" id="forward"></div></div>' +
					'</div>' +
				'</div>' +
				'<div class="row2">' +	
					'<div class="col-md-1 col-sm-1 col-xs-1"></div>' +
					'<div class="col-md-10 col-sm-10 col-xs-10" id="text"></div>' +
					'<div class="col-md-1 col-sm-1 col-xs-1"></div>' +
				'</div>' +
			'</div>' +
		'</div>';
			
		var name = image_href;
		//insert lightbox HTML into page
		$('body').append(lightbox);
		
		// $('#image img').attr("href", dispImg);
		text = slideshow[name];
		showPic(name, text, count);
	}

	$('#forward').click(function() {
		if(count < max){
			count += 1;
			showPic(name, text, count);
		}
	});

	$('#back').click(function() {
		if(count > 0){
			count -= 1;
			showPic(name, text, count);
		}
	});

	//Close lightbox
	$('#close').on('click', function() { 
		count = 0;
		delete max;
		$('#lightbox').hide();
	});
	
});

function showPic(imgName, text, count) {
	$('#image img').attr("src", "css/images/"  + imgName + "_" + count + fileExt);
	$('#text').text(text[count]);
}

function findMax(tempImg) {
	var x;
	switch(tempImg) {
		case 'p1': x = 10;
			break;
		case 'p2': x = 4;
			break;
		case 'p3': x = 2;
			break;
		case 'p4': x = 6;
			break;
		case 'p6': x = 7;
			break;
		default: x = 0;
	};
	return x;
};



