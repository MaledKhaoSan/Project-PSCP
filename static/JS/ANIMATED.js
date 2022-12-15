
$("#enter_site_introl").mousemove(function(_) {
	parallaxIt(_, ".element1, .element3, .element4, .element5, .element6, .element7, .element8", +30);
	parallaxIt(_, ".element_background1", +43);
	parallaxIt(_, ".element_background2", +65);
	parallaxIt(_, ".element2, .enter_heading", +25);
  });
  function parallaxIt(_, target, movement) {
	var $this = $("#enter_site_introl");
	var relX = _.pageX + $this.offset().left;
	var relY = _.pageY + $this.offset().top;
  
	TweenMax.to(target, 1.8, {
	  x: (relX + $this.width() / 2) / $this.width() * movement,
	  y: (relY + $this.height() / 1) / $this.height() * movement
	});
  }


  $("#Enter_site_canvas").mousemove(function(_) {
	parallaxIt(_, ".enter_site_element2, .enter_site_element3, .enter_site_element4, .enter_site_element5, .enter_site_element6", -50);
	parallaxIt(_, ".enter_site_element1", +30);
	parallaxIt(_, ".enter_site_element7", -10);
  });
  function parallaxIt(_, target, movement) {
	var $this = $("#Enter_site_canvas");
	var relX = _.pageX - $this.offset().left;
	var relY = _.pageY - $this.offset().top;
  
	TweenMax.to(target, 1.7, {
	  x: (relX - $this.width() / 2.2) / $this.width() * movement,
	  y: (relY - $this.height() / 3) / $this.height() * movement
	});
  }



// $("#RANDOM_ENTER_SITE").mousemove(function(bouquet_site) {
//   parallaxIt(bouquet_site, ".random_element1, .random_element2, .random_element3", +20);
// });

// function parallaxIt(bouquet_site, target, movement) {
//   var $this = $("#RANDOM_ENTER_SITE");
//   var relX = bouquet_site.pageX + $this.offset().left;
//   var relY = bouquet_site.pageY + $this.offset().top;

//   bouquet_site.to(target, 2, {
//     x: (relX + $this.width() / 2) / $this.width() * movement,
//     y: (relY + $this.height() / 2) / $this.height() * movement
//   });
// }
  
  
  
//   $("#TweetMaxx").mousemove(function(e) {
//       parallaxIt(e, ".slide", -50);
//       parallaxIt(e, ".two", -100);
//       parallaxIt(e, ".three", -150);
//     });
    
//     function parallaxIt(e, target, movement) {
//       var $this = $("#TweetMaxx");
//       var relX = e.pageX - $this.offset().left;
//       var relY = e.pageY - $this.offset().top;
    
//       TweenMax.to(target, 0.7, {
//         x: (relX - $this.width() / 2) / $this.width() * movement,
//         y: (relY - $this.height() / 2) / $this.height() * movement
//       });
//     }
    