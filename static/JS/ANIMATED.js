
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