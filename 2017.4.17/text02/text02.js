/**
 * Created by 201605181 on 2017/4/17.
 */
$(function () {
    $('.title').mousedown(function () {
        var dataName=$(this).attr('data-name');
        $('.title').find('.icon-xiangshangjiantou').toggleClass('icon-xiangxiajiantou');
        $('.title').not(this).find('.iconfont').attr('class','icon iconfont icon-xiangshangjiantou');
        function shuju(dataName) {
            var shuju1
            if(dataName=='area'){
                shuju1={
                    "江苏":['泰州','徐州','宿迁'],
                    "河南":['郑州','安阳','南阳'],
                    "福建":['泉州','厦门','福州']
                };
                neirong();
            }else if(dataName=='range'){
                shuju1={
                    "0-200m":['新意','慢慢','将就'],
                    "200m-400m":['变脸','篱笆','岸边'],
                    "大于400m":['所得','细化','梦雨']
                };
                neirong()
            }else if(dataName=='delicious'){
                shuju1={
                    "西餐":['葡萄酒','拉菲','咖喱'],
                    "中国":['浏阳河','五粮液','茅台'],
                };
                neirong()
            }
            function neirong() {
                var ss="";
                var city="";
                var qq="";
                var province="" +
                    "<ul class='con_ul' data-name='area'>"+
                        '|ss|'+
                    "</ul>"
                for(i in shuju1){
                    ulstr="" +
                        "<li class='con_li'>" +
                        "<p class='con_p'>" +
                        i +
                        "</p>"+
                        "<ul class='con_li_ul'>" +
                        "|city|" +
                        "</ul>"+
                        "</li>";
                    var city="";
                    for(k in shuju1[i]){
                        city+="" +
                            "<li class='con_li_li'>" +
                                shuju1[i][k] +
                            "</li>"

                    };
                    ss+=ulstr.replace('|city|',city)
                };
                qq=province.replace('|ss|',ss)
                $('.content').html(qq)
            }

        }
        shuju(dataName)
        $('.area').css('display','block');
    });
    $(document).ready(function () {

    })
        $('.con_p').on('click',function () {
            $('.con_p').css('background-color','#ebd1cf');
            $('.con_li_ul').css('display','none');
            $(this).css('background-color','salmon').next().css('display','block').ready(function () {
                $('.con_li_li').click(function () {
                    $(this).siblings().css('background-color','#00b3ee');
                    $(this).css('background-color','#eb6348')
                })
            });
        })






})