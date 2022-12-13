//! $(document).ready(function() {
// 	// Will remove overlay for users cannnot load properly.
// 	setTimeout(function() {
//         $('.Loadercontainer, .loader').css({'display':'none'})
// 	}, 29000);

// 	// Will wait for everything on the page to load.
// 	$(window).bind('load', function() {
//         var LoaderRemover = gsap.timeline();
//             LoaderRemover.to(".Loadercontainer, .loader", 0.9,{opacity: 0},">+2")
//             LoaderRemover.set(".Loadercontainer, .loader",{display: "none"},">")
// 		setTimeout(function() {
			
//             var LoaderRemover = gsap.timeline();
//                 LoaderRemover.to(".Loadercontainer, .loader", 0.9,{opacity: 0},">+2")
//                 LoaderRemover.set(".Loadercontainer, .loader",{display: "none"},">")
// 		}, 29000)
// 	})
// })


// window.onload = function() {
// 	if(!window.location.hash) {
// 		window.location = window.location + '#mytest';
// 		window.location.reload();
// 	}
// }

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
		//Phase3
		tl.to("#enter_site_introl", 0 ,{display: 'none'},">+0.1");

		

}

// ScrollTrigger.matchMedia({
//     //Mobile
//     "(max-width: 480px)": function() {
//     var tl = gsap.timeline();
//         tl.to(".MainText", 1.8,{top: "30%", width:"41%", rotation:"0"},"<")
//         tl.to(".MainStudent_animated0, .MainStudent_animated1", 0, {autoAlpha:0}, ">+2");
//         tl.to(".MainStudent_animated2", 0, {autoAlpha:1}, "<");

//         tl.to(".MainGum", 1, {width: "5%", ease: Power1.easeInOut}, ">+0.1");
//         tl.to(".MainGum", 1, {width: "75%", ease: Power3.easeIn}, ">");

//         tl.set(".main-graph-container",{display: "unset"}, ">");
//         tl.add( function(){ 
//             myChart.config.data.datasets[0].data[0] = 0;
//             myChart.config.data.datasets[0].data[1] = 0;
//             myChart.config.data.datasets[0].data[2] = 0;
//             myChart.config.data.datasets[0].data[3] = 0;
//             myChart.config.data.datasets[0].data[4] = 0;
//             myChart.update();
//         } )

//         tl.to(".main-graph-container", 0.2, {autoAlpha:1}, ">");
//         tl.add( function(){ 
//             myChart.config.data.datasets[0].data[0] = 5;
//             myChart.config.data.datasets[0].data[1] = 7;
//             myChart.config.data.datasets[0].data[2] = 5;
//             myChart.config.data.datasets[0].data[3] = 17;
//             myChart.config.data.datasets[0].data[4] = 7;
//             myChart.update();
//         },"<+0.2" );

//         tl.to(".bubble", 1, {autoAlpha:1, ease: Linear.easeNone}, "<+0.1");

//         tl.to(".Food1", 1.9,{rotation: 60, left:"2%"},"<");
//         tl.from(".Food2", 1.7,{top:"120%", left:"5%"},"<");
//         tl.to(".Food3", 2,{rotation: -1, top:"0%"},"<");
//         tl.to(".Food4", 1.8,{rotation: 30, left:"100%"},"<")
//         tl.to(".Food5", 1.9,{rotation:30, top:"7%", left:"90%"},"<");

//         tl.from(".SettingsNav", 2,{opacity:0, display:"none"},"<");
//         tl.to(".MainStudent, .MainStudent_animated2, .MainText, .MainGum", 1.2, {autoAlpha:0, ease: Power3.easeOut}, "<");




//     var mouth_animated = gsap.timeline({defaults:{},repeat:-1, repeatDelay: 0.11 });
//         mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.1%", top:"45.6%", ease: Linear.easeNone}, ">");
//         mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.2%", top:"45.7%", ease: Linear.easeNone}, ">");
//         mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.1%", top:"45.8%", ease: Linear.easeNone}, ">");
//         mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.0%", top:"45.7%", ease: Linear.easeNone}, ">");



//     }
// })
