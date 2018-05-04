$().ready(function(){
		slide("#a1","#home");
		slide("#a2","#about");
		slide("#a3","#experience");
		slide("#a4","#quotes");
		slide("#a5","#contact");
		slide(".a2","#footer");
		function slide(el,targetel){
			$(el).click(function(){
				$("html,body").animate({
					scrollTop:$(targetel).offset().top
				},1000);
				return false;
			})
		}
		function tap(el01,el02,el03,el04,el05){
				$(el01).css("color","#E3AE57");
				$(el02).css("color","#666");
				$(el03).css("color","#666");
				$(el04).css("color","#666");
				$(el05).css("color","#666");
			}
		$(window).scroll(function() {
			var top = $(document).scrollTop();
			if(top > 0){
				$(".navbar").css("background-color","#fff");
			}else{
				$(".navbar").css("background","none");
			}
			if(top >= 0&&top<862){
				console.log("home");
				tap("#a1","#a2","#a3","#a4","#a5");
			}else if(top >= 862&&top<1539){
				console.log("about");
				tap("#a2","#a1","#a3","#a4","#a5");
			}
			else if(top > 1539&&top<2229){
				console.log("service");
				tap("#a3","#a2","#a1","#a4","#a5");
			}
			else if(top >= 2229&&top<2819){
				console.log("experience");
				tap("#a4","#a2","#a3","#a1","#a5");
			}else if(top >= 2819){
				console.log("education");
				tap("#a5","#a2","#a3","#a4","#a1");
			}
		})
	});
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
