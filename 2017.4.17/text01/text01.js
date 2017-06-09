/**
 * Created by 201605181 on 2017/4/17.
 */
$(function () {
    $('.title').mousedown(function () {
        var dataName=$(this).attr('data-name');
        $('.title').find('.icon-xiangshangjiantou').toggleClass('icon-xiangxiajiantou');
        $('.title').not(this).find('.iconfont').attr('class','icon iconfont icon-xiangshangjiantou');
        $('.con_ul').each(function () {
            var newdata=$(this).attr('data-name');
            if(dataName==newdata){
                $(this).siblings().css('display','none');
                $(this).css('display','block')
            }
        })
        $('.area').css('display','block');
    });

    $('.con_p').click(function () {
        $(this).siblings().css('background-color','#ebd1cf');
        $('.con_li_ul').css('display','none');
        $(this).css('background-color','salmon').next().css('display','block').ready(function () {
            $('.con_li_li').click(function () {
                $(this).siblings().css('background-color','#00b3ee');
                $(this).css('background-color','#eb6348')
            })
        });
    });


})