$('document').ready(function() {	
	var videos = ['ybZINoDv8I8'];
	var randomIndex = Math.floor(Math.random() * videos.length);
	var options = { videoId: videos[randomIndex], start: 3, mute: false, 
				 	repeat: false };
	$('#wrapper').tubular(options);
});