$().ready(function(){
		slide("#a1","#home");
		slide("#a2","#about");
		slide("#a3","#experience");
		slide("#a4","#education");
		slide("#a5","#contact");
		slide(".a2","#about");
		function slide(el,targetel){
			$(el).click(function(){
				$("html,body").animate({
					scrollTop:$(targetel).offset().top
				},1000);
				return false;
			})
		}
	});
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
