window.onload = function(e) {
	console.log("window loaded");

	$('#pagepiling').pagepiling({
		anchors: ['home', 'about', 'portfolio', 'contact'],
		menu: '.the-main-navbar',
		navigation: false,
		scrollingSpeed: 500
	});

}