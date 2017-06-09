/**
 * Created by 201605181 on 2017/5/10.
 */
var DBind1 = new DBind( 1 );
var DBind2 = new DBind( 2 );//前面是变量，括号里面的是html那里填的数字
DBind1.set( "peopleName", '第一个' );
DBind2.set( "killName", '第二个' );//第一个是刚才html格式那里的变量名，第二个方框是赋值

function DataBinder( object_id ) {
    // 创建一个简单的pubSub对象
    var pubSub = {
            callbacks: {},

            on: function( msg, callback ) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                this.callbacks[ msg ].push( callback );
            },
            publish: function( msg ) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                for ( var i = 0, len = this.callbacks[ msg ].length; i < len; i++ ) {
                    this.callbacks[ msg ][ i ].apply( this, arguments );
                }
            }
        },
        data_attr = "data-bind-" + object_id,
        message = object_id + ":input",
        timeIn;

    changeHandler = function( evt ) {
        var target = evt.target || evt.srcElement, //  IE8兼容
            prop_name = target.getAttribute( data_attr );

        if ( prop_name && prop_name !== "" ) {
            clearTimeout(timeIn);
            timeIn = setTimeout(function(){
                pubSub.publish( message, prop_name, target.value );
            },50);

        }
    };

    // 监听事件变化，并代理到pubSub
    if ( document.addEventListener ) {
        document.addEventListener( "input", changeHandler, false );
    } else {
        // IE8使用attachEvent而不是addEventListenter
        document.attachEvent( "oninput", changeHandler );
    }

    // pubSub将变化传播到所有绑定元素
    pubSub.on( message, function( evt, prop_name, new_val ) {
        var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"),
            tag_name;

        for ( var i = 0, len = elements.length; i < len; i++ ) {
            tag_name = elements[ i ].tagName.toLowerCase();

            if ( tag_name === "input" || tag_name === "textarea" || tag_name === "select" ) {
                elements[ i ].value = new_val;
            } else {
                elements[ i ].innerHTML = new_val;
            }
        }
    });

    return pubSub;
}
function DBind( uid ) {
    var binder = new DataBinder( uid ),

        user = {
            // 属性设置器使用数据绑定器pubSub来发布
            attributes: {},
            set: function( attr_name, val ) {
                this.attributes[ attr_name ] = val;
                // Use the `publish` method
                binder.publish( uid + ":input", attr_name, val, this );
            },
            get: function( attr_name ) {
                return this.attributes[ attr_name ];
            },

            _binder: binder
        };

    // Subscribe to the PubSub
    binder.on( uid + ":input", function( evt, attr_name, new_val, initiator ) {
        if ( initiator !== user ) {
            user.set( attr_name, new_val );
        }
    });

    return user;
};
function randomGroup() {
    var oGroup=[];//存放所有词汇的词组、
    for(var i=0;i<20;i++){
        oGroup[i]={};//设置数组中的每个元素都是一个对象
    }
    //一个一个定义他们状态的字符串，然后在下面赋值
    oGroup[0].people="降龙十八掌";
    oGroup[0].killer="九阴白骨爪";
    oGroup[1].people="快乐大本营";
    oGroup[1].killer="天天向上";
    oGroup[2].people="零花钱";
    oGroup[2].killer="生活费";
    oGroup[3].people="爷爷";
    oGroup[3].killer="姥爷";
    oGroup[4].people="同学";
    oGroup[4].killer="同桌";
    oGroup[5].people="小沈阳";
    oGroup[5].killer="宋小宝";
    oGroup[6].people="成吉思汗";
    oGroup[6].killer="努尔哈赤";
    oGroup[7].people="谢娜张杰";
    oGroup[7].killer="邓超孙俪";
    oGroup[8].people="新年";
    oGroup[8].killer="跨年";
    oGroup[9].people="保安";
    oGroup[9].killer="保镖";
    oGroup[10].people="眉毛";
    oGroup[10].killer="胡须";
    oGroup[11].people="端午节";
    oGroup[11].killer="中秋节";
    oGroup[12].people="摩托车";
    oGroup[12].killer="电动车";
    oGroup[13].people="高跟鞋";
    oGroup[13].killer="增高鞋";
    oGroup[14].people="汉堡包";
    oGroup[14].killer="肉夹馍";
    oGroup[15].people="牛奶";
    oGroup[15].killer="豆浆";
    oGroup[16].people="唇膏";
    oGroup[16].killer="口红";
    oGroup[17].people="公交";
    oGroup[17].killer="地铁";
    oGroup[18].people="结婚";
    oGroup[18].killer="订婚";
    oGroup[19].people="面包";
    oGroup[19].killer="蛋糕";
    //词汇出自——————谁是卧底的词汇大全
    var oGroupNum=Math.floor(Math.random()*20);//抽取一个随机数，随机数范围跟上面数组的长度是一致的
    oPeople=oGroup[oGroupNum].people;
    okiller=oGroup[oGroupNum].killer;//随机数的对应下标的状态字符串赋值给这个变量。
    console.log(oPeople,okiller);
    DBind1.set( "peopleName", oPeople );//将上面的状态字符串赋值给input框，。这一步将在界面中直接显示出来
    DBind2.set( "killName", okiller );
}