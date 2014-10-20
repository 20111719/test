/**
 * myslide by bike_z
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($){
	//各种属性参数
	var defaults = {
		width: 400,
		height: 200,
		direction:'left',
		imgs:[{
			src:'p0.jpg',
			link:'http://www.cnblogs.com/bikeway'
		},{
			src:'p1.jpg',
			link:'http://www.cnblogs.com/bikeway'
		},{
			src:'p2.jpg',
			link:'http://www.cnblogs.com/bikeway'
		}]
	}

	$.fn.slideImg = function(options){
		options = $.extend({},defaults,options);
		return this.each(function(){
			init($(this),options);
		})
	};
			
	function init(obj,options){
		var imgs = "<div class='imgBox'>",
			tips = "<div class='tipBox'>",
			len = options.imgs.length;
		for(var i = 0; i < len; i++){
			if(options.imgs[i].link){
				imgs += "<a href='"+options.imgs[i].link+"'>";
				imgs += "<img src='"+options.imgs[i].src+"'/>"; 
				imgs += "</a>";
			}else{
				imgs += "<img src='"+options.imgs[i].src+"'/>"; 
			}
			tips += "<a href='javascript:void(0)'></a>"
		}
		imgs += "</div>";
		tips += "</div>";
		$(obj).append(imgs).append(tips);
		$('.tipBox a').eq(0).addClass('current');

		 $(obj).css({
		 	'width':options.width,
		 	'height':options.height
		});

		 $('.imgBox a').css({
		 	'width':options.width,
		 	'height':options.height
		 });

		 $('.imgBox img').css({
		 	'width':options.width,
		 	'height':options.height
		 });

		$('.tipBox').css({
			'left':(options.width - 11 * len - 10) / 2
		})

		if(options.direction == 'top' || options.direction == 'bottom'){
			$('.imgBox a').css({
				'display':'block'
			})
			$('.imgBox').css({
				'width':'100%',
			 	'height':options.height * len
			})
		}else{
			$('.imgBox').css({
				'width':options.width * len,
				'height':'100%'
			})
		}


		var dir = options.direction;
		switch(dir){
			case 'top':{
				setInterval(function(){autoSlideTop(options)},3000);
				break;
			}
			case 'right':{
				setInterval(function(){autoSlideRight(options)},3000);
				break;
			}
			case 'bottom':{
				setInterval(function(){autoSlideBottom(options)},3000);
				break;
			}
			case 'left':{
				setInterval(function(){autoSlideLeft(options)},3000);
				break;	
			}
		}
	}

	var index = 0;

	function autoSlideTop(options){
		if($('.imgBox').position().top == -options.height * (options.imgs.length - 1)){
			index = 0;
			$('.imgBox').animate({top: 0},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');
				}else{
					$(this).removeClass('current');	
				}
			})
		}else{
			index++;
			$('.imgBox').animate({top: "-="+options.height,},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');	
				}else{
					$(this).removeClass('current');	
				}
			})
		}
	}

	function autoSlideRight(options){
		if($('.imgBox').position().left == 0){
			index = options.imgs.length-1;
			$('.imgBox').animate({right: options.width * (options.imgs.length - 1)},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');	
				}else{
					$(this).removeClass('current');	
				}
			})
		}else{
			index--;
			$('.imgBox').animate({right: "-="+options.width,},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');
				}else{
					$(this).removeClass('current');
				}
			})
		}
	}

	function autoSlideBottom(options){
		if($('.imgBox').position().top == 0){
			index = options.imgs.length-1;
			$('.imgBox').animate({bottom: options.height * (options.imgs.length - 1)},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');	
				}else{
					$(this).removeClass('current');		
				}
			})
		}else{
			index--;
			$('.imgBox').animate({bottom: "-="+options.height,},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');
				}else{
					$(this).removeClass('current');	
				}
			})
		}
	}

	function autoSlideLeft(options){ 
		if($('.imgBox').position().left == -options.width * (options.imgs.length - 1)){
			index = 0;
			$('.imgBox').animate({left: '0'},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');
				}else{
					$(this).removeClass('current');		
				}
			})
		}else{
			index++;
			$('.imgBox').animate({left: "-="+options.width,},1000);
			$('.tipBox a').each(function(i){
				if (index == i) {
					$(this).addClass('current');	
				}else{
					$(this).removeClass('current');	
				}
			})
		}
	}
})(jQuery);