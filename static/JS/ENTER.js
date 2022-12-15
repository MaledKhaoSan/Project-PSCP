window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Project-PSIT';
		window.location.reload();
	}
}
// Enter-Site-Introl
ScrollTrigger.matchMedia({
    //Laptop
    "(min-width: 1024px)": function() {
    var tl = gsap.timeline();
		tl.to(".element_background0", 2,{width:"116%", top: "50%", left: "50%"},">+0.1")
		tl.to(".element_background2", 3,{width:"160%", top: "-100%", left: "-40%", rotation:"30"},"<")
		tl.to(".element_background1", 3,{width:"330%", top: "-230%", left: "-120%", rotation:"0"},"<")
        tl.to(".element1", 2.0,{width:"22.5%", top: "14%", left: "8%", rotation:"10"},"<+0.3")
		tl.to(".element2", 2.5,{width:"33%", top: "87%", left: "65%", rotation:"16"},"<")
		tl.to(".element3", 2.3,{width:"31%", top: "78%", left: "95%", rotation:"-18"},"<")
		tl.to(".element4", 2.2,{width:"26.7%", top: "83%", left: "5%", rotation:"-3"},"<")
		tl.to(".element6", 2.0,{width:"35%", top: "104%", left: "36%", rotation:"11"},"<")
		tl.to(".element7", 2.2,{width:"25%", top: "-32%", left: "32%", rotation:"24"},"<")
		tl.to(".element8", 2.3,{width:"20%", top: "-10%", left: "76%", rotation:"0"},"<")

		tl.from('.enter_heading', 2, {scale: 0,  opacity: 0, ease: Power2.easeOut },"<");
		tl.to(".element_background3", 0.9, {opacity: 0.67},"<+1.3");
		tl.to(".element_background4", 1.2, {opacity: 0.6},"<");
    }
})



function enter_site_start() {
	var tl = gsap.timeline();
		tl.to(".element1", 1.0,{width:"22.5%", top: "-10%", left: "-20%", rotation:"-10"},"<+0.3")
		tl.to(".element2", 1.5,{width:"33%", top: "130%", left: "65%", rotation:"-16"},"<")
		tl.to(".element3", 1.3,{width:"31%", top: "110%", left: "110%", rotation:"18"},"<")
		tl.to(".element4", 1.2,{width:"26.7%", top: "110%", left: "-20%", rotation:"3"},"<")
		tl.to(".element6", 1.0,{width:"35%", top: "130%", left: "30%", rotation:"-11"},"<")
		tl.to(".element7", 1.2,{width:"25%", top: "-32%", left: "49%", rotation:"-24"},"<")
		tl.to(".element8", 1.3,{width:"20%", top: "-20%", left: "110%", rotation:"10"},"<")
		tl.to(".element_background0", 1.2,{scale:1.3, ease: Power1.easeOut},"<")
		tl.to(".element1,.element2,.element3,.element4,.element5,.element6,.element7,.element8", 0.3,{opacity: 0},"<+0.3")
		tl.to('.enter_heading h2, .enter_heading h3, .enter_heading button', 0.3, {opacity: 0, ease: Power2.easeOut },"<");
		tl.to('.enter_heading h1', 1.3, {scale: 150,  opacity: 1, ease: Power1.easeIn },"<+0.2");
		tl.to('.enter_heading', 1.2, {width:"100%", top: "200%", left: "-40vh", ease: Power1.easeIn },"<");
		tl.to('.element_background3, .element_background4', 0.9, {opacity: 0, ease: Power2.easeOut },"<");



		tl.to(".element_background1", 0.9,{scale:3.5, top: "-155%", left: "-128%", rotation:"-50", ease: Power1.easeIn},"<")
		tl.to(".element_background2", 2.2,{scale:5.5, top: "-40%", left: "-56%", rotation:"70", ease: Power1.easeIn},"<+0.43")
		tl.to(".element_background0", 2.5,{opacity:0},"<+0.1")
		//Phase2
		tl.to(".element_background5", 2.9,{width:"160%", top: "-105%", left: "-37%", rotation:"55"},"<+0.3")
		tl.to(".element_background6", 0.5,{opacity: 1},"<")
		tl.to(".element_background6", 3,{left:"-40%",top:"-115%" , width:"170%", rotation:"-43"},"<")

		tl.to(".element_background5", 3.3,{left:"-160%",top:"-370%" ,scale:3.5, width:"440%",ease: Power1.easeIn},">")
		tl.to(".element_background6", 1.6,{left:"-150%",top:"-299%", scale:1.5, width:"390%",ease: Power1.easeIn},"<")
		tl.to("#enter_site_introl, .element_background6, .element_background5", 1.5,{opacity: 0},"<+1.2")
		// Phase3
		tl.to("#enter_site_introl", 0 ,{display: 'none'},">+0.1");


		tl.to(".enter_site_element1", 1.1,{width: '43.5%', top: '7.3%', left: '29%',ease: Back.easeOut },"<")
		tl.to(".enter_site_element2", 0.9,{width: '9%', top: '54.2%', left: '27.2%',rotation:'-27' ,ease: Back.easeOut},"<+0.2")
		tl.to(".enter_site_element3", 0.9,{width: '12.5%', top: '18.2%', left: '20.2%', rotation:'57',ease: Back.easeOut},"<+0.1")
		tl.to(".enter_site_element4", 0.9,{width: '10.3%', top: '10.2%', left: '64.2%', rotation:'-48',ease: Back.easeOut},"<+0.1.5")
		tl.to(".enter_site_element5", 0.9,{width: '11.56%', top: '44%', left: '68%', rotation:'20',ease: Back.easeOut},"<+0.1.3")
		tl.to(".enter_site_element6", 0.9,{width: '9.48%', top: '64%', left: '50.54%', rotation:'-64',ease: Back.easeOut},"<+0.1.1")
		tl.to(".enter_site_element7", 0.9,{width: '40%', top: '3%', left: '25%', rotation:'-7',ease: Back.easeOut},"<+0.1")
		tl.to(".entersite_heading h1, .entersite_IconWrapper, .entersite_subheading", 1.3,{opacity: 1},"<")
		
		
}

function next_content(id) {
	enter_site_checkSide = id
	gsap.to(window, {duration: 0.55, scrollTo:"#Enter_site_canvas"});
	$("#scroller_random_canvas, #scroller_bouquet_canvas, #scroller_email_canvas").hide();
	if (enter_site_checkSide === 'random_enter_rightside'){
		$('#RANDOM_ENTER_SITE').fadeOut();
		setTimeout(function(){
		  $('#EMAIL_ENTER_SITE').fadeIn("slow");
		},400)
	}
	else if (enter_site_checkSide === 'random_enter_leftside'){
		$('#RANDOM_ENTER_SITE').fadeOut();
		setTimeout(function(){
		  $('#BOUQUET_ENTER_SITE').fadeIn("slow");
		},400)
	}

	else if (enter_site_checkSide === 'bouquet_enter_rightside'){
		$('#BOUQUET_ENTER_SITE').fadeOut();
		setTimeout(function(){
		  $('#RANDOM_ENTER_SITE').fadeIn("slow");
		},400)
	}
	else if (enter_site_checkSide === 'bouquet_enter_leftside'){
		$('#BOUQUET_ENTER_SITE').fadeOut();
		setTimeout(function(){
		  $('#EMAIL_ENTER_SITE').fadeIn("slow");
		},400)
	}

	else if (enter_site_checkSide === 'email_enter_rightside'){
		$('#EMAIL_ENTER_SITE').fadeOut();
		setTimeout(function(){
		  $('#BOUQUET_ENTER_SITE').fadeIn("slow");
		},400)
	}
	else if (enter_site_checkSide === 'email_enter_leftside'){
		$('#EMAIL_ENTER_SITE').fadeOut();
		setTimeout(function(){
		  $('#RANDOM_ENTER_SITE').fadeIn("slow");
		},400)
	}
  }

function content_selector(id) {
	if (id === 'random_content_selected'){
		gsap.to(window, {duration: 0.55, scrollTo:"#scroller_random_canvas"});
		$("#scroller_random_canvas").show();
		$("#scroller_bouquet_canvas, #scroller_email_canvas").hide();
	}
	else if (id === 'bouquet_content_selected'){
		gsap.to(window, {duration: 0.55, scrollTo:"#scroller_bouquet_canvas"});
		$("#scroller_bouquet_canvas").show();
		$("#scroller_random_canvas, #scroller_email_canvas").hide();
	}
	else if (id === 'email_content_selected'){
		gsap.to(window, {duration: 0.55, scrollTo:"#scroller_email_canvas"});
		$("#scroller_email_canvas").show();
		$("#scroller_bouquet_canvas, #scroller_random_canvas").hide();
	}
}