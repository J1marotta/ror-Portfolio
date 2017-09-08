window.onload = function(e){
	console.log("window loaded");

	$('#pagepiling').pagepiling({
		anchors: ['home', 'about', 'portfolio', 'contact'],
		menu: '#myNav',
		navigation: false,
		scrollingSpeed: 500,
		afterLoad: function(){console.log('loaded page')}
	});

};


// $(document).on('turbolinks:load', ready );
// var ready = function() {

//  $('#pagepiling').pagepiling({
// 		anchors: ['home', 'about', 'portfolio', 'contact'],
// 		menu: '.the-main-navbar',
// 		navigation: false,
// 		scrollingSpeed: 500
// 	});

// }



// $(document).on('page:load ready', ready);
// $(document).on('turbolinks:load', ready);



// // var ready;
// ready = function() {

//  $('#pagepiling').pagepiling({
// 		anchors: ['home', 'about', 'portfolio', 'contact'],
// 		menu: '.the-main-navbar',
// 		navigation: false,
// 		scrollingSpeed: 500
// 	});

// };
