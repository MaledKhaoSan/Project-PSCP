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
		tl.to(".element_background2", 3,{width:"160%", top: "45%", left: "46%", rotation:"30"},"<")
		tl.to(".element_background1", 3,{width:"330%", top: "55%", left: "48%", rotation:"0"},"<")
        tl.to(".element1", 2.0,{width:"22.5%", top: "14%", left: "8%", rotation:"10"},"<+0.3")
		tl.to(".element2", 2.5,{width:"33%", top: "87%", left: "65%", rotation:"16"},"<")
		tl.to(".element3", 2.3,{width:"31%", top: "78%", left: "95%", rotation:"-18"},"<")
		tl.to(".element4", 2.2,{width:"26.7%", top: "83%", left: "5%", rotation:"-3"},"<")
		tl.to(".element6", 2.0,{width:"35%", top: "104%", left: "36%", rotation:"11"},"<")
		tl.to(".element7", 2.2,{width:"25%", top: "-12%", left: "42%", rotation:"24"},"<")
		tl.to(".element8", 2.3,{width:"20%", top: "20%", left: "88%", rotation:"0"},"<")

		tl.from('.enter_heading', 2, {scale: 0,  opacity: 0, ease: Power2.easeOut },"<");
		tl.to(".element_background3", 2.0, {opacity: 0.67},"<+1.3");
		tl.to(".element_background4", 2.3, {opacity: 0.6},"<");
		// tl.from("#enter_site_animate", 1,{display: 'none'},">");
    }
})



function enter_site_start() {
	var tl = gsap.timeline();
		tl.set("#enter_site_introl", {display: 'none'},">");
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
