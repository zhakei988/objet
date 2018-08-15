
	$(document).ready(function() {
		$('#fullpage').fullpage({
			//options here
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6', 'page7', 'page8', 'page9', 'page10'],
			autoScrolling:true,
			verticalCentered:true,
			scrollHorizontally: true,
			lazyLoading: true,
			slidesNavigation: true,
			afterLoad: function(origin, destination, direction){
				if(destination.anchor == "page8"){
					$('.page8 .content').animate({right:0},200)
				}
				if(destination.anchor == "page9"){
					$('.page9 .content').animate({right:0},200)
				}
			},
			afterSlideLoad: function( section, origin, destination, direction){

			},
			afterRender:function(){
				$('#video').attr('data-autoplay',true)
			}
        });
        //预加载
	var imgarr=['images/logo.png','images/jt.png'],loadcut=0,loadvideo=0;
	function loadend(type){
		if(type==0)
		{
			loadcut=loadcut+1;
		}else if(type==1)
		{
			loadvideo=loadcut+1;
		}
		if(loadcut>=imgarr.length&&loadvideo>0)
		{
			$('#load').animate({'opacity':0},500,function(){
				$('#load').remove();
				setTimeout(function(){
					$('.page1 .content').animate({right:0},200)
				},300)
			})
		}
	}
	document.getElementById("video").addEventListener('canplaythrough', function(){
		loadend(1);
    })
	imgarr.forEach(function(value,index,array){
		var obj = $('<img src="'+value+'" />');
		obj.load(function(){
			loadend(0)
		})
	})
    //page1
    $('.page1 .nav .fr').click(function(){
        if($(this).hasClass('show'))
        {
            $(this).removeClass('show')
        }else
        {
            $(this).addClass('show')
        }
    })
	});