/**
 * Created by 201605181 on 2017/3/28.
 */
(function ($) {
    'user strict';
    var moveDIV=new Array();
    var scroTop=0;
    $(window).scroll(function () {
        scroTop=$(window).scrollTop();
        console.log(scroTop);
        for(var i=0;i<moveDIV.length;i++){
            move(moveDIV[i]);
        }
    });
    var move=function (options) {
        var newBeginX=options.divBegin.x;
        var newBeginY=options.divBegin.y;
        var newEndX=options.divEnd.x;
        var newEndY=options.divEnd.y;
        var newStartBeg=options.start.begin;
        var newStartEnd=options.start.end;

        var chazhiY=scroTop-options.start.begin;

        var scrollchazhi=newStartEnd-newStartBeg;//定义的scrolltop差值

        var movechazhiX=newEndX-newBeginX;//div的x差值
        var movechazhiY=newEndY-newBeginY;//div的y差值

        var biX=movechazhiX / scrollchazhi;
        var biY=movechazhiY / scrollchazhi;


        if(chazhiY>=0&&scroTop<=newStartEnd){//如果scrolltop差值大于0 并且 小于定义的值
            $(options.obj).css({'left':chazhiY*biX+newBeginX,'top':chazhiY*biY+newBeginY});
            console.log(1)
        }else if(scroTop>newStartEnd){
            $(options.obj).css({'left':newEndX,'top':newEndY});
            console.log(2)
        }
    }
    var check=function (options) {

        var newBeginX=options.divBegin.x;
        var newBeginY=options.divBegin.y;

        $(options.obj).parent().css('position','relative');
        $(options.obj).css('position','absolute');
        $(options.obj).css({'left':newBeginX,'top':newBeginY});

        moveDIV.push(options);


    };
    var init=function (options) {
        check(options)
    };
    $.fn.smove=function (options) {
        init(options);
    };
})(jQuery)