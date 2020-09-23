(function($) {
    $.fn.dragX = function() {

        return this.on("mousedown", function(e) {
            var $drag = $(this).addClass('draggable'),
				z_idx = $drag.css('z-index'),
                drg_w = $drag.outerWidth(),
                pos_x = $drag.offset().left + drg_w - e.pageX,
				pageXi = e.pageX - drg_w - $drag.css('left').killpx();
				
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
				var posL = e.pageX + pos_x - drg_w;
				
				if(posL < pageXi + pos_x) {
					posL = pageXi + pos_x;
					$(this).unbind("mousemove");
					if($('#socialSwitcher .socialSwitcher-img').hasClass('r'))
						toggleSocialSwitcher();
				}
				else if (posL > pageXi + pos_x + 34) {
					posL = pageXi + pos_x + 34;
					$(this).unbind("mousemove");
					if(!$('#socialSwitcher .socialSwitcher-img').hasClass('r'))
						toggleSocialSwitcher();
					
				} else {
					$drag.offset({left: posL});
				}
			
            });
            e.preventDefault(); // disable selection
			
        }).on("mouseup", function() {
			$(this).parents().unbind("mousemove");
			$(this).parents().unbind("mouseup");
			
			var posL = $(this).css('left').killpx();
			if(posL < 17)
				posL = 0
			else
				posL = 34;
							
			$(this).css('left', posL+'px');
            $(this).removeClass('draggable');
			
			if( ($('#socialSwitcher .socialSwitcher-img').hasClass('r') && posL == 0) || (!$('#socialSwitcher .socialSwitcher-img').hasClass('r') && posL == 34) )
					toggleSocialSwitcher();
			
        });
    }
})(jQuery);


if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}
if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    }
}
String.prototype.killpx = function() {
    return this.replace('px', '')*1; 
}



function createPopup(data) {
	
	$('#ppOpaco').remove();
	$('#pp').remove();
	$('body').append('<div id="ppOpaco"></div>');
	$('body').append('<div id="pp"><div class="ppHead"></div><div class="ppContent"></div></div>');

	var ppTitle = data.find('h1').text();
	
	$('#pp .ppHead').append('<h1>' + ppTitle + '</h1><span class="close"></span>');
	
	$('#pp .ppContent').append('<div>'+data.html()+'</div>');
	$('#pp .ppContent').css({'overflow-y':'auto'});
	//$('#pp .ppContent').height($(window).height() - 200);

	$('#pp').css('margin-left', (-1 * ($('#pp').width()) / 2  - 10) + 'px');
	$('#pp').css('margin-top', (-1 * ($('#pp').height()) / 2  - 10) + 'px');

	$('body').on('click', '#ppOpaco, #pp .close', function() {
		$('#ppOpaco').remove();
		$('#pp').remove();
	});
}


/* PREVIEW POPUP */
$(document).on('click', '.docs .item', function(){
	if($(this).find('a.preview').attr('href').split('.').pop().toLowerCase() == 'jpg' || $(this).find('a.preview').attr('href').split('.').pop().toLowerCase() == 'jpeg' || $(this).find('a.preview').attr('href').split('.').pop().toLowerCase() == 'png') {
		createPP($(this));
		return false;
	}
});
$(document).on('click', '.descriptionItem a[name="preview"]', function(){
	createPP($(this), true);
});
$(document).on('click', 'a[name="ppFullImage"]', function(){
	createPP($(this), false, true);
});

$(document).on('click', '#ppO', function(){
	removePP();
});
function createPP($c, isDirectPreview, isFullImage){
	if(typeof(isDirectPreview) == "undefined")
		isDirectPreview = false;
	if(typeof(isFullImage) == "undefined")
		isDirectPreview = false;
	
	removePP();
	var $statusbar = $("<div class='statusbar'></div>");
	
	if(isDirectPreview) {
		$statusbar.append("<div class='title'>"+ $c.siblings('.title').text() +"</div>");
	} else if(isFullImage) {
		$statusbar.append("<div class='title'>"+ $c.find('.title').text() +"</div>");
	} else {
		$statusbar.append("<div class='title'>"+ $c.find('.info a span').text() +"</div>");
		$statusbar.append("<div class='download'><a target='_blank' href='"+$c.find('a.preview').attr('href')+"'>Скачать оригинал</a>&nbsp;&nbsp;&ndash;&nbsp;&nbsp;"+$c.find('.filesize').text()+"</div>");
	}
	
	$c = $c.find("img.fullimage");
		
	$('body').append('<div id="ppO"></div>').append('<div id="ppW"></div>');
	$('#ppW').append('<div id="ppC"></div>');
	$('#ppC').append('<a id="close" onclick="removePP()"></a>')
		.append($c.clone())
		.append($statusbar);
		
	if(isFullImage || isDirectPreview) {
		$('#ppW').addClass('nodownload');
	}
		
	
	var 	$img = $('#ppC').find('img');
	
	if ($img.height() > $(window).height() - 140) $img.height($(window).height() - 140)
	else $img.height('auto');
	
	$img.width('auto');
	if ($img.width() > $(window).width() - 100) $img.width($(window).width() - 100);
	
	$('#ppW').css({
		"margin-left": -$('#ppC').width()/2 + 'px',
		"margin-top": (-$('#ppC').height()/2 - 12) + 'px'
	});
	
	$('#ppO').css('opacity',0).fadeTo(350, 0.3);
	$('#ppC').css('opacity',0).delay(100).fadeTo(350, 1);
}
function removePP(){
	$('#ppC').fadeTo(350, 0);
	$('#ppO').delay(200).fadeTo(300, 0, function(){
		$('#ppO, #ppW').remove();
	});
}
$(window).smartresize(function(){
	if ($('#ppW').length > 0) {
		var $img = $('#ppC').find('img');
		
		$img.height('auto');
		$img.width('auto');
		
		if ($img.height() > $(window).height() - 140) $img.height($(window).height() - 140)
		else $img.height('auto');
	
		$img.width('auto');
		if ($img.width() > $(window).width() - 100) $img.width($(window).width() - 100);
	}
	
	$('#ppW').css({
		"margin-left": -$('#ppC').width()/2 + 'px',
		"margin-top": (-$('#ppC').height()/2 - 12) + 'px'
	});
});
/* end *//* PREVIEW POPUP */





/* GLOW POPUP */
$(document).on('click', '#ppGlowO', function(){
	removeGlowPP();
});
function createGlowPP($c){
	var $content = $c.html();
	
	removeGlowPP();
	
	$('body').append('<div id="ppGlowO"></div>').append('<div id="ppGlowW"></div>');
	$('#ppGlowW').append('<div id="ppGlowC"></div>');
	$('#ppGlowC').append($content);
		
	$('#ppGlowW').css({
		"margin-left": -$('#ppGlowC').width()/2 + 'px',
		"margin-top": (-$('#ppGlowC').height()/2 - 12) + 'px'
	});
	
	$('#ppGlowO').css('opacity',0).fadeTo(350, 0.8);
	$('#ppGlowC').css('opacity',0).delay(100).fadeTo(350, 1);
}
function removeGlowPP(){
	$('#ppGlowC').fadeTo(350, 0);
	$('#ppGlowO').delay(200).fadeTo(300, 0, function(){
		$('#ppGlowO, #ppGlowW').remove();
	});
}
$(window).smartresize(function(){
	$('#ppGlowW').css({
		"margin-left": -$('#ppGlowC').width()/2 + 'px',
		"margin-top": (-$('#ppGlowC').height()/2 - 12) + 'px'
	});
});
/* end *//* GLOW POPUP */










function toggleSocialSwitcher(){
	$('#socialSwitcher > a').toggleClass('s');
	$('#socialSwitcher .socialSwitcher-img').toggleClass('r');
	
	if($('#socialSwitcher .socialSwitcher-img').hasClass('r')) {
		$('#socialSwitcher .socialSwitcher-img a').css('left', '34px');
	} else {
		$('#socialSwitcher .socialSwitcher-img a').css('left', '0');
	}
	
	$('#socialBlocks > div').toggleClass('s');
	$('#socialBlocks > div.s').stop().css('opacity', 0).fadeTo(400, 1, 'easeInSine');
	
	if ($('#socialSwitcher .socialSwitcher-img').hasClass('r'))
		$('#socialLink').attr('href', 'https://www.facebook.com/medknijka')
	else
		$('#socialLink').attr('href', 'https://vk.com/club19541355');
}
$(document).on('click', '#socialSwitcher > a', function(){
	if (!$(this).hasClass('s')) {
		toggleSocialSwitcher();
	}
});
$(document).ready(function(){
	$('#socialSwitcher .socialSwitcher-img a').dragX();
});





$(document).on('mouseenter', '.offices .cb.area .offices a', function(){
	$(this).siblings('.pimg').addClass('hover');
}).on('mouseleave ', '.offices .cb.area .offices a', function(){
	$(this).siblings('.pimg').removeClass('hover');
});


$(document).on('click', '#licenses > a', function(){
	var	$curItem = $('#licenses .item.s'),
		$newItem;
	
	if($(this).hasClass('l')) {
		$newItem = $curItem.prev();
		if($newItem.length == 0)
			$newItem = $('#licenses .item').last();
		
	} else {
		$newItem = $curItem.next();
		if($newItem.length == 0)
			$newItem = $('#licenses .item').first();
	}
	
	$curItem.fadeTo(150, 0, 'easeInSine', function(){
		$curItem.removeClass('s');
		$newItem.css('opacity',0).addClass('s').fadeTo(300, 1, 'easeInSine');
	});
});



function contentPhotoSliderInit($s){
	var 	$f = $s.find('.cpsImage'),
		$i = $s.find('.cpsThumbs .item').first();
	
	$s.find('.cpsThumbs .s .displayImg').clone().prependTo($s.find('.cpsImage'));
	$f.find('.count').text(($i.index()+1) +"/"+ $s.find('.cpsThumbs .item').length);
	$f.find('.title').text($i.find('.desc').text());
}
function contentPhotoSliderSwitch($s, $i){
	var $f = $s.find('.cpsImage');
	$i.siblings('.item.s').removeClass('s');
	$i.addClass('s');
	
	$s.find('.cpsImage a').removeClass('off');
	if($i.index() == 0){
		$s.find('.cpsImage a[name="prev"]').addClass('off');
	}else if($i.index() == $s.find('.cpsThumbs .item').length -1){
		$s.find('.cpsImage a[name="next"]').addClass('off');
	}		
	
	$f.find('.displayImg').remove();
	$i.find('.displayImg').clone().prependTo($f).fadeTo(0,.1).fadeTo(400, 1, 'easeInSine');
	$f.find('.count').text(($i.index()+1) +"/"+ $s.find('.cpsThumbs .item').length);
	$f.find('.title').text($i.find('.desc').text());
}
$(document).on('click', '.contentPhotoSlider .cpsImage a', function(){
	if(!$(this).hasClass('off')) {
		var $item;
		
		if($(this).attr('name') == 'next'){
			$item = $(this).parents('.contentPhotoSlider').find('.cpsThumbs .item.s').next();
		} else {
			$item = $(this).parents('.contentPhotoSlider').find('.cpsThumbs .item.s').prev();
		}
		
		contentPhotoSliderSwitch($(this).parents('.contentPhotoSlider'), $item);
	}
});
$(document).on('click', '.contentPhotoSlider .cpsThumbs .item a', function(){
	if(!$(this).parent('.item').hasClass('s'))
		contentPhotoSliderSwitch($(this).parents('.contentPhotoSlider'), $(this).parent('.item'));
});




// Site Selector
$(document).on("click", "#siteSelector a[name='siteSelector']", function(){
	$("#siteSelector").addClass("active");
});
$(document).on("click", "#siteSelector a[name='siteCurrent'], #siteSelector .opaco", function(){
	$("#siteSelector").removeClass("active");
});




$(document).on('click', '#menuServices a[name="dropDown"]', function(e){
	if(!$('#menuServices').hasClass('s')) {
		$('#menuServices').addClass('s');
		$('#menuServicesOpaco').remove();
		$('#menuServices').after('<div id="menuServicesOpaco"></div>');
		$('#menuServicesOpaco').css('opacity',0).fadeTo(600, 0.2);
		$('#menuServices .menuItems').stop().fadeTo(300, 1);
	
	} else {
		$('#menuServices').removeClass('s');
		$('#menuServicesOpaco').stop().fadeTo(400, 0, function(){ $(this).remove(); });
		$('#menuServices .menuItems').stop().fadeTo(200, 0).hide(0);
	
	}
});
$(document).on('click touchstart', '#menuServicesOpaco', function(){
		$('#menuServices').removeClass('s');
		$('#menuServicesOpaco').stop().fadeTo(400, 0, function(){ $(this).remove(); });
		$('#menuServices .menuItems').stop().fadeTo(200, 0).hide(0);
});



$(document).ready(function(){
	
	if($('#bx-panel').length > 0) {
		$('#header').css('top', $('#bx-panel').height());
	}
	
	if($('#floatingPanel').length > 0) {
		if( ($(window).scrollTop() + $('#floatingPanel').height()) >= $('#floatingPanel').parent().height() )
			$('#floatingPanel').addClass('atBottom')
		else
			$('#floatingPanel').removeClass('atBottom');
		
		$(window).on('scroll', function(){
			if( ($(window).scrollTop() + $('#floatingPanel').height()) >= $('#floatingPanel').parent().height() )
				$('#floatingPanel').addClass('atBottom')
			else
				$('#floatingPanel').removeClass('atBottom');
		});
	}
	
	
	
	if($('.fotorama#pControl').length > 0) {
		$('.fotorama#pControl').on('fotorama:ready', function (e, fotorama) {
			$('.fotorama#pControl .fotorama__stage').remove();
			
			var	$si = $('#pImg > div');
			
			$('.fotorama#pControl .fotorama__nav__frame').on('click', function(){
				var 	$img = $('#pImg img').eq($(this).index() - 1),
						l = $img.position().left - ($('#pImg').width() - $img.width())/2,
						dt = 700;
				
				
				if(l < 0) {
					l = 0;
					dt = 0;
					
				} else if(l > $si.width() - $('#pImg').width()) {
					l = $si.width() - $('#pImg').width();
					dt = 0;
				}
					
					
				$img.stop().delay(dt).fadeTo(300, .9).fadeTo(200, 1);
				
				$si.stop().animate({
					left: -l
				}, 800);
			});
			
			
			$('#pImg img').on('click', function(){
				var 	$img = $(this),
						l = $img.position().left - ($('#pImg').width() - $img.width())/2,
						dt = 700;
				
				if(l < 0) {
					l = 0;
					dt = 0;
					
				} else if(l > $si.width() - $('#pImg').width()) {
					l = $si.width() - $('#pImg').width();
					dt = 0;
				}
					
					
				$img.stop().delay(dt).fadeTo(300, .9).fadeTo(200, 1);
				
				$si.stop().animate({
					left: -l
				}, 800);
			});
			
		});
	}
	
	
	/* offices detail paralax */
	/*if($('body').hasClass('delismedia') || $('body').hasClass('tagankamed') || $('body').hasClass('mobilmed')) {
		$('#headerSpacer, #header').css('margin-top', -$('#headerSpacer').height());

		$(document).on('click', '.offices #wrapper .cb.head .c a[name="godown"]', function(){
			$('html,body').stop().animate({scrollTop: 700}, 1200);
			$('.offices #wrapper .cb.head .c a[name="godown"]').animate({
				'margin-top': -60,
				opacity: 0
			}, 1200, function(){$(this).css('z-index','-1');});
			
		});

		$(window).on('scroll', function(){
			if($(window).scrollTop() <= 1320) {
				$('.offices #wrapper .cb.head').height(1320 - $(window).scrollTop()/2);
			}

			if($(window).scrollTop() + $(window).height() >= $('.offices #wrapper .cb.head').height() + $('#headerSpacer').height() + $('#headerSpacer').css('margin-top').killpx()) {
				$('.offices #wrapper .cb.head > .c').addClass('absolute');
			} else {
				$('.offices #wrapper .cb.head > .c').removeClass('absolute');
			}
			
			if($(window).scrollTop()/1 <= $('#headerSpacer').height()) {
				$('#headerSpacer, #header').css('margin-top', $(window).scrollTop()/1-$('#headerSpacer').height());
			} else {
				$('#headerSpacer, #header').css('margin-top', 0);
			}
		});
	}*/


	$(".sup-li").on("click", function(event) {
		var $id = this.id.replace("div-", "");
		event.preventDefault();
		console.log(11);

		$('html,body').animate(
			{
				scrollTop: $("#item-" + $id).offset().top-$("#header").height()-10
			}
			,'slow'
		);
	});


	$(".sup-p").on("click", function(event) {
		var $id = this.id.replace("item-", "");
		event.preventDefault();
		console.log(11);

		$('html,body').animate(
			{
				scrollTop: $("#div-" + $id).offset().top-$("#header").height()-10
			}
			,'slow'
		);
	});
});