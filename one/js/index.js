//window.onload=function(){
//    var head_login=document.getElementById("head_login");
//    var head_login_con=document.getElementsByClassName("head_login_con");
//    console.log(head_login_con);
//    head_login.onmouseover=function(){
//        head_login.style.backgroundColor="red";
//        head_login_con.style.display="block";
//    };
//    head_login.onmouseout=function(){
//        head_login.style.backgroundColor="#fff";
//        head_login_con.style.display="none";
//
$(function(){
    //导航部分的js
    $("#head_login").mouseover(function(){
        $(".head_login_con").show();
    });
    $("#head_login").mouseout(function(){
        $(".head_login_con").hide();
    });
    $(".i1").mouseover(function(){
        $(".head_city").show();
    });
    $(".i1").mouseout(function(){
        $(".head_city").hide();
    });
    $(".head_right ul li").mouseenter(function(){
        var index=$(this).index();
        $(this).addClass("white").siblings().removeClass("white");
        $(".head_right_ul").eq(index).show().addClass("white");

    });
    $(".head_right ul li").mouseleave(function(){
        var index=$(this).index();
        $(this).removeClass("white");
        $(".head_right_ul").eq(index).hide().removeClass("white");

    });

// 专属活动部分的js
    $("#buttonL").mouseenter(function(){
        $(this).addClass("gray");
    });
    $("#buttonL").mouseleave(function(){
        $(this).removeClass("gray");
    });
    $("#buttonR").mouseenter(function(){
        $(this).addClass("gray");
    });
    $("#buttonR").mouseleave(function(){
        $(this).removeClass("gray");
    });

//    轮播开始
    var len=$(".banner1 ul li").length;
    for(var i=0;i<len;i++){
        $(".banner1 ol").append("<li></li>");
    }
    $(".banner1 ol li").first().addClass("active");
    $(".banner1 ol li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        i=index;
        $(".banner1 ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        clearInterval(timer);
    });
    $(".banner1 ol li").mouseleave(function(){
        $(this).removeClass("active");
        timer=setInterval(move,3000);
    });
    var num=0;
    function move(){
        num++;
        if(num>6){
            num=0;
        }
        $(".banner1 ul li").eq(num).fadeIn(1000).siblings().fadeOut(1000);
        $(".banner1 ol li").eq(num).addClass("active").siblings().removeClass("active");
    }
    var timer=setInterval(move,3000);
//    轮播结束

//    无缝滚动开始

//    无缝滚动结束
//    鼠标点击左右移动开始
    var k=0;
   function youyi(){
       k++;
       if(k==4)k=0;
       $(".tui1 ul").eq(k).show().siblings().hide();
       $(".tui1_box").eq(k).addClass("active").siblings().removeClass("active");
   }
    function zuoyi(){
        k--;
        if(k==-1)k=3;
        $(".tui1 ul").eq(k).show().siblings().hide();
        $(".tui1_box").eq(k).addClass("active").siblings().removeClass("active");
    }
    $(".buttonL").click(function(){
       zuoyi();
    });
    $(".buttonR").click(function(){
        youyi();
    })
    $(".tui1_list").mouseenter(function(){
        $(".buttonL").addClass("gray");
        $(".buttonR").addClass("gray");
    })
    $(".tui1_list").mouseleave(function(){
        $(".buttonL").removeClass("gray");
        $(".buttonR").removeClass("gray");
    })

//    鼠标点击左右移动结束

// 窗口滚动监听事件
    $(window).scroll(function(){
        var scroll=$(document).scrollTop();
        console.log(scroll);
        var h=185;
        console.log(h);
        if(scroll>h){
            $(".search").css(
                "display","block"
            );
        }
        else{
            $(".search").hide();
        }
    })
})