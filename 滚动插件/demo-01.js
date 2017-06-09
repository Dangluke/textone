/**
 * Created by Administrator on 2017/3/25.
 */
    (function($) {
        $.fn.userCp = function(options) { //定义插件的名称，这里为userCp
            var dft = {
                //以下为该插件的属性及其默认值
                cpBy: "dafi", //版权所有者
                url: "http://www.dafi.cn", //所有者链接
                size: "12px", //版权文字大小
                align: "left" //版权文字位置，left || center || right
            };
            var ops = $.extend(dft,options);
            var style = 'style="font-size:' + ops.size + ';text-align:' + ops.align + ';"'; //调用默认的样式
            var cpTxt = '<p' + ' ' + style + '>此文章版权归<a target="_blank" href="' + ops.url + '">' + ops.cpBy + '</a>所有</p>'; //生成版权文字的代码

            $(this).append(cpTxt); //把版权文字加入到想显示的div

        }
    })(jQuery);
    (function ($) {
        $.fn.move=function (options) {
            var star={
                left:0,
                top:500,
                text:'我要移动'
            };
            var ops=$.extend(star,options);
            var _this=$(this)
            _this.css({'top':star.top,'left':star.left}).text('我要移动');
            mscroll()
            function mscroll() {
                $(window).scroll(function () {
                    var scroT=$(window).scrollTop();
                    if(scroT<=400 && scroT>=200){
                        console.log(scroT);
                        $('.move').animate({
                            top:500,
                            left:200
                        },800);
                    }else {
                        console.log('aa');
                        $('.move').animate({
                            top:500,
                            left:0
                        },800);
                    }
                    // console.log(scroT)
                })
            }




        }
    })(jQuery)