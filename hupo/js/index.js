/*c:JakeChiu,20180810*/
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    location.href = 'h5/index.html'
}
$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        autoScrolling:true,
        verticalCentered:true,
        scrollHorizontally: true,
        lazyLoading: true,
        slidesNavigation: true,
        afterLoad: function(origin, destination, direction){
            if(destination.anchor == "page3"){
                $('.page3 .content').animate({right:0},200)
            }
            if(destination.anchor == "page4"){
                $('.page4 .content').animate({right:0},200)
            }
        },
        afterSlideLoad: function( section, origin, destination, direction){
            $('.page2 .fotnav li').removeClass('on').eq(destination.index).addClass('on')
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
    //page2
    $('.page2 .fotnav img').click(function(e){
        $('.page2 .fotnav li').removeClass('on')
        $(this).parent().addClass('on')
        fullpage_api.moveTo(2,$(this).attr('data-index'));
    })
});