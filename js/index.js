/**
 * Created by Admin on 2017/2/25.
 */


    //顶部开始
    var flag=true;
    $(".close-banner").click(function () {
        $(this).parent().fadeOut(500);
    })
    var num=0;
    var quan=0;
    var wufenLi=$("#wufen li").eq(0).width();
    var timer=null;

    $("#tiaolou li").click(function () {
        clearInterval(timer);
        leader=$(document).scrollTop();
        if($(this).index()==4){
            var target=0;
        }
        else{
            var target=$(this).index()*100;
        }
        timer=setInterval(function () {
            var sped=(target-leader)/10;
            sped=sped>0?Math.ceil(sped):Math.floor(sped);
            leader=leader+sped;
            window.scrollTo(0,leader);
            if(target==leader){
                alert(leader);
                clearInterval(timer);
            }
        },30);
    });




    $("#ten_adnum li").click(function () {
        if(flag){
            flag=false;
            quan=$(this).index();
            num=$(this).index();
            $("#ten_adnum li").removeClass();
            $("#ten_adnum li").eq(quan).addClass("ten-current");
            var json3={left:-num*wufenLi};
            $("#wufen").animate(json3,800, function () {
                flag=true;
            });
        }else{
            return;
        }

    })


    $("#arRblack").click(function () {
        if(flag){
            flag=false;
            num++;
            quan++;
            $("#ten_adnum li").removeClass();
            if(quan>2){
                quan=0;
            }
            $("#ten_adnum li").eq(quan).addClass("ten-current");
            if(num>3){
                $("#wufen").css("left",0);
                num=1;
            }
            var json={left:-num*wufenLi};
            $("#wufen").animate(json,800, function () {
                flag=true;
            });
        }else{
            return;
        }

    })

    $("#arLblack").click(function () {
        if(flag){
            flag=false;
            num--;
            quan--;
            $("#ten_adnum li").removeClass();
            if(quan<0){
                quan=2;
            }
            $("#ten_adnum li").eq(quan).addClass("ten-current");
            if(num<0){
                num=2;
                $("#wufen").css("left",-(num+1)*wufenLi);
            }
            var json={left:-num*wufenLi};
            $("#wufen").animate(json,800, function () {
                flag=true;
            });
        }
        else{
            return;
        }

    })


    $(".ll").parent().mouseover(function () {
        var json1={bottom:-1};
        $(this).children(".ll").stop().animate(json1,300);
    })
    $(".ll").parent().mouseout(function () {
        var json2={bottom:-57};
        $(this).children(".ll").stop().animate(json2,300);
    })
    //顶部结束


    //品牌开始
    var pinBox = document.getElementsByClassName("pinpaibox")[0];
    var pinLiArr = pinBox.children[0].children;

    for (var i = 0; i < pinLiArr.length; i++) {
        pinLiArr[i].onmouseover = function () {
            for (var j = 0; j < pinLiArr.length; j++) {
                animate(pinLiArr[j], {"width": 78});
            }
            animate(this, {"width": 765});
        }

    }
    pinBox.onmouseout = function () {
        for(var j=0;j< pinLiArr.length;j++){
            animate(pinLiArr[j],{"width":220})
        }
    }
    //品牌结束


    //风格开始
    var all = document.getElementById("all");
    var screen = all.firstElementChild || all.firstChild;
    var imgWidth = screen.offsetWidth;
    var ul = screen.children[0];
    var ulLiArr = ul.children;
    var ol = screen.children[1];
    var arr= screen.children[2];
    var left = arr.children[0];
    var right = left.nextElementSibling || left.nextSibling;

    //步骤：
    var ulLi = ulLiArr[0].cloneNode(true);
    ul.appendChild(ulLi);
    for(var i=0;i<ulLiArr.length-1;i++){
        var olLi = document.createElement("li");
        olLi.innerHTML = i+1;
        ol.appendChild(olLi);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].onmouseover = function () {
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "current";
            square = key = this.innerHTML-1;
            animate1(-(this.innerHTML-1)*imgWidth,ul);
        }
    }
    var key = 0;//图片用
    var square = 0;//小方块用
    right.onclick = aotuPlay;
    left.onclick = function () {
        key--;
        if(key == -1){
            key = ulLiArr.length-2;
            ul.style.left = - (ulLiArr.length-1)*imgWidth +"px";
        }
        square--;
        if(square == -1){
            square = olLiArr.length-1;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
        animate1(-key*imgWidth,ul);
    }
    var timer1 = setInterval(aotuPlay,1000);
    all.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer1);
    }
    all.onmouseout = function () {
        arr.style.display = "none";
        timer1 = setInterval(aotuPlay,1000);
    }

    function aotuPlay() {
        key++;
        if(key == ulLiArr.length){
            key = 1;
            ul.style.left = 0;
        }
        square++;
        if(square == olLiArr.length){
            square = 0;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
        animate1(-key*imgWidth,ul);
    }

    $(".fgRinner li").mouseenter(function () {
        $(this).css("opacity",1).siblings("li").css("opacity",0.4);
    });

    $(".fgRinner").mouseleave(function () {
        $(".fgRinner li").css("opacity",1);
    });
    //风格结束

    //特惠开始
    var styleArr = [
        {   //  1
            width:200,
            top:70,
            left:30,
            opacity:0.1,
            "z-index":2
        },
        {  // 2
            width:400,
            top:110,
            left:0,
            opacity:0.3,
            "z-index":3
        },
        {   // 3
            width:600,
            top:140,
            left:280,
            opacity:1,
            "z-index":4
        },
        {  // 4
            width:400,
            top:110,
            left:600,
            opacity:0.3,
            "z-index":3
        },
        {   //5
            width:200,
            top:70,
            left:560,
            opacity:0.1,
            "z-index":2
        }
    ];
    var tehuimainbox=document.getElementById("tehuimainbox");
    var THLiArr=tehuimainbox.getElementsByTagName("li");
    var arrow=tehuimainbox.children[1];
    var prev = arrow.children[0];
    var next = arrow.children[1];
    var hqyouhuibox = document.getElementById("hqyouhuibox");
    var ni = document.getElementById("ni");

    tehuimainbox.onmouseover= function () {
        animate(arrow,{"opacity":1});
    }
    tehuimainbox.onmouseout= function () {
        animate(arrow,{"opacity":0});
    }

    hqyouhuibox.onmouseover = function () {
        animate(ni,{"opacity":1});
    };
    hqyouhuibox.onmouseout = function () {
        animate(ni,{"opacity":0});
    }

    for(var i=0;i<THLiArr.length;i++){
        animate(THLiArr[i],styleArr[i]);
    }
    next.onclick= function () {
        styleArr.push(styleArr.shift());
        for(var i=0;i<styleArr.length;i++){
            animate(THLiArr[i],styleArr[i]);
        }
    }
    prev.onclick= function () {
        styleArr.unshift(styleArr.pop());
        for(var i=0;i<styleArr.length;i++){
            animate(THLiArr[i],styleArr[i]);
        }
    }

    //特惠结束

    //婚庆开始

    //放大镜
    var one_one =$(".one_one");
    var small = $(".small");
    var big = $(".big");
    var mask = $(".mask");
    var bigimg = $(".big-img");


    small.mouseover(function () {
        mask.show();
        big.show();
    });
    small.mouseout(function () {
        mask.hide();
        big.hide();
    });
    small.mousemove(function (event) {
        var pagex = event.pageX;
        var pagey = event.pageY;
        var boxx = one_one.offset().left;
        var boxy = one_one.offset().top;
        var x = pagex - boxx - mask[0].offsetWidth/2;
        var y = pagey - boxy - mask[0].offsetHeight/2;

        if(x<0){
            x=0;
        }
        if(x>small[0].offsetWidth-mask[0].offsetWidth){
            x=small[0].offsetWidth-mask[0].offsetWidth;
        }
        if(y<0){
            y=0;
        }
        if(y>small[0].offsetHeight-mask[0].offsetHeight){
            y=small[0].offsetHeight-mask[0].offsetHeight;
        }
        mask[0].style.left = x+"px";
        mask[0].style.top = y+"px";


        var biliw = (bigimg[0].offsetWidth-big[0].offsetWidth)/(small[0].offsetWidth-mask[0].offsetWidth);
        var bilih = (bigimg[0].offsetHeight-big[0].offsetHeight)/(small[0].offsetHeight-mask[0].offsetHeight);

        var imgx = biliw*x;
        var imgy = bilih*y;
        console.log(bigimg[0].offsetWidth+"   "+big[0].offsetWidth);

        bigimg[0].style.marginLeft = -imgx+"px";
        bigimg[0].style.marginTop = -imgy+"px";

    });
    //放大镜
    $(".hqzuopin li").mouseenter(function () {
        $(".hqzuopin li").css("opacity",0.3);
        $(this).css("opacity",1).siblings("li").css("opacity",0.3);
    });
    $(".hqzuopin").mouseleave(function () {
        $(".hqzuopin li").css("opacity",1);
    })
    //婚庆结束

    //开机动画开始
    var box = document.getElementById("box");
    var span = box.children[0];
    var b = box.children[2];

    span.onclick = function () {
        //1.让b这个盒子高度变为0；
        //animate(b,{"height":0}, function () {
            //b这个盒子高度变为0，之后box这个大盒子宽度在变为0；
            animate(box,{"height":0});
            animate(span,{"opacity":0});
        //})
    }
    //开机动画结束

    //跳楼开始
        var timer=null;
        var tiaolouArr=[($("#l1").offset().top),($("#l2").offset().top),$("#l3").offset().top,($("#l4").offset().top)];
        $("#tiaolou li").click(function () {
            clearInterval(timer);
            leader=$(document).scrollTop();
            if($(this).index()==4){
                var target=0;
            }
            else{
                var target=tiaolouArr[$(this).index()]-40;
            }
            timer=setInterval(function () {
                var sped=(target-leader)/10;
                sped=sped>0?Math.ceil(sped):Math.floor(sped);
                leader=leader+sped;
                window.scrollTo(0,leader);
                if(target==leader){
                    clearInterval(timer);
                }
            },30);
        });
    //跳楼结束

    //电话滚动开始
    $(".cometxhbox").mouseover(function () {
        clearInterval(timer2);
    });

    $(".cometxhbox").mouseout(function () {
        timer2=setInterval(function () {
            var jss={top:-37};
            $("#roll_box").animate(jss,1000, function () {
                var abb= $("#roll_box a").eq(2).clone(true);
                var abc= $("#roll_box a").eq(3).clone(true);
                $("#roll_box").append(abb);
                $("#roll_box").append(abc);
                $("#roll_box a").eq(0).remove();
                $("#roll_box a").eq(0).remove();
                $("#roll_box").css("top",0);
            })

        },1000);
    });


    //电话滚动结束

    //固定导航开始
    var ttop=$(".pubnav").offset().top;
    $(document).scroll(function () {
        var json={position:"fixed",top:0,left:"50%",marginLeft:-540,zIndex:11};
        var json2={position:"static"};
        if($(document).scrollTop()>=ttop){
            if($(".banner1").css("display")=="block"){
                $(".banner1").css("margin-top",80);
            }else if($(".banner2").css("display")=="block"){
                $(".banner2").css("margin-top",80);
            }else{
                $(".adfloor").css("margin-top",80);
            }
            $(".pubnav").css(json);

        }
        else{
            $(".pubnav").removeAttr("style");
            $(".banner1").css("margin-top",15);
            $(".banner2").css("margin-top",15);
            $(".adfloor").css("margin-top",15);
        }
    });

//固定导航结束

    //匀速运动方法
    function animate1(target,ele) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var speed = target>ele.offsetLeft?10:-10;
            ele.style.left = ele.offsetLeft+speed+"px";
            if(Math.abs(target-ele.offsetLeft) <= Math.abs(speed)){
                ele.style.left = target+"px";
                clearInterval(ele.timer);
            }
        },8);
    }



    //缓动运动方法
    function animate(ele,json,fn){
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var flag = true;
            for(var k in json){
                if(k === "z-index"){
                    ele.style.zIndex = json[k];
                }else if(k === "opacity"){
                    var leader = parseInt(getStyle(ele,k)*100);
                    console.log(leader);
                    var step = (parseInt(json[k]*100)-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader+step;
                    ele.style.opacity = leader/100;
                    ele.style.filter = "alpha(opacity="+leader+")";
                    if(json[k]*100 != leader){
                        flag = false;
                    }
                }else{
                    var leader = parseFloat(getStyle(ele,k)) || 0;
                    var step = (json[k]-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader+step;
                    ele.style[k] = leader + "px";
                    console.log(1);
                    if(json[k] != leader){
                        flag = false;
                    }
                }
            }
            if(flag){
                clearInterval(ele.timer);
                if(fn){
                    fn();
                }
            }
        },20);
    }
    function getStyle(ele,attr){
        if(window.getComputedStyle !== undefined){
            return window.getComputedStyle(ele,null)[attr];
        }else{
            return ele.currentStyle[attr];
        }

    }





