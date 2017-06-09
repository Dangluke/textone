/**
 * Created by Administrator on 2017/3/25.
 */

    (function ($) {
        $.fn.move=function (options) {
            var star={
                left:0,
                top:500,
                text:'我要移动'
            };
            var ops=$.extend(star,options);
            var _this=$(this);

            _this.css({'top':star.top,'left':star.left}).text(star.text);
            var thisoffleft=_this.offset().left;
            myscroll()
            function myscroll() {
                $(window).scroll(function () {
                    var scroT=$(window).scrollTop();
                    if(scroT<=400 && scroT>=200){
                        console.log(scroT);
                        $('.move').animate({
                            top:500,
                            left:200
                        },800);
                        _this.text('移动好');
                    }else {
                        $('.move').animate({
                            top:500,
                            left:0
                        },800);
                        console.log('aa');
                        _this.css({'top':star.top,'left':star.left}).text(star.text);

                    }
                })
            };


        }
    })(jQuery);


