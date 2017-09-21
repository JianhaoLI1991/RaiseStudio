/**
 * Created by DELLL on 2017/5/6.
 */


$(".add_my,.add_weixin,.favor-wrapper").on("click",function(){
    $(".box_pop_up_bg").show();
});
$(".meilin_close").on("click",function(){
    $(".box_pop_up_bg").hide();
});


/*var isLike = false;
$(".dianzan01").on("click",function(){
    if(!isLike){
        $(this).find("img").attr("src","images/like_icon_red.png");
        var LikeNum = parseInt($(this).find(".dianzan01_sum").html());
        $(this).find(".dianzan01_sum").html(LikeNum + 1).css("color","#f20940");
        isLike = true;
    }else {
        $(this).find("img").attr("src","images/like_icon.png");
        var LikeNum = parseInt($(this).find(".dianzan01_sum").html());
        $(this).find(".dianzan01_sum").html(LikeNum - 1).css("color","#666");
        isLike = false;
    }
});*/


var isLike = false;
$(".dianzan01").on("click",function(){
    if(!isLike){
        $(this).find(".dianzan_icon").attr("src","images/like_icon_red.png");
        var LikeNum = parseInt($(this).find(".dianzan01_sum").html());
        $(this).find(".dianzan01_sum").html(LikeNum + 1).css("color","#f20940");
        isLike = false;
        $(this).unbind("click");
    }else {
        $(this).find(".dianzan_icon").attr("src","images/like_icon.png");
        var LikeNum = parseInt($(this).find(".dianzan01_sum").html());
        $(this).find(".dianzan01_sum").html(LikeNum - 1).css("color","#999").html(LikeNum);
        isLike = true;
    }
});







/*

$(".dianzan01").on("click",function(){
    /!*var red_img = $(this).find("img").attr("src","images/like_icon_red.png");
    var LikeNum = parseInt($(this).find(".dianzan01_sum").html());
    var classname=$(this).attr("img");*!/
    $(".dianzan_icon").src;
    $(".dianzan_icon").attr('src',"images/like_icon_red.png");
});
*/



/*
$(".dianzan01").click(function () {
    //$(".zan").removeClass("zan1");
    $(this).toggleClass("zan1");
    var classname=$(this).attr("class");
    //alert(classname);
    var zan_num=parseInt($('>span',this).text());
    //alert(zan_num);
    if(classname == "zan zan1"){
        zan_num +=1;
        //alert(zan_num);
        $('>span',this).text(zan_num);

    }else if(classname== "zan"){
        zan_num -=1;
        //alert(zan_num);
        $('>span',this).text(zan_num);
    }
})*/



/*$(".dianzan01").click(function () {
    //$(".zan").removeClass("zan1");
    $(this).toggleClass("zan1");
    $(this).removeAttr("zan1");

    var classname=$(this).attr("class");
    var classname=$(this).attr("img");
    //alert(classname);
    var zan_num=parseInt($('>span',this).text());
    //alert(zan_num);
    if(classname == "zan zan1"){
        zan_num +=1;
        //alert(zan_num);
        $('>span',this).text(zan_num);

    }else if(classname== "zan"){
        zan_num -=1;
        //alert(zan_num);
        $('>span',this).text(zan_num);
    }
})*/





var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d7a524eca38bb043b1f8884ac735a26c";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


$(".close_icon>img").on("click",function(){
    $(".xl_logo").hide();
    $(".art_title").css("margin-top","0rem");
})




/*document.getElementById("foo").value=str;*/







$(".favor-wrapper").on("click",function(){
    $(".box_pop_up_bg").show();
});
$(".pop_up_close").on("click",function(){
    $(".box_pop_up_bg").hide();
});
$(".cosmetic_label_type a").on("click",function(){
    $(".box_pop_up_bg").show();
});
$(".pop_up_close").on("click",function(){
    $(".box_pop_up_bg").hide();
});
$(".cosmetic_text ul").on("click",function(){
    $(".box_pop_up_bg").show();
});
$(".pop_up_close").on("click",function(){
    $(".box_pop_up_bg").hide();
});

$(".copy_wc_close").on("click",function(){
    $(".copy_wc").hide();
});


$(".add_my").on("click",function(){
    $(".box_pop_up_bg").show();
});
$(".box_pop_up_close").on("click",function(){
    $(".box_pop_up_bg").hide();
});


/*
window.onload=function(){
    // var aa = document.getElementById('click_copy');
    var clipboard = new Clipboard('.click_copy');
    clipboard.on('success', function(e) {
        $(".copy_wc").show(500);
    });

    // 复制失败
    clipboard.on('error', function(e) {
        $(".copy_wc").show(500);
        $('.text_copy1').hide();
        $('.text_copy2').show();
    });
}
*/

/*
 动态点赞
 此效果包含css3，部分浏览器不兼容（如：IE10以下的版本）
 */
$(function(){
    $(".praise01").click(function(){
        var praise_img = $(".praise-img");
        var text_box = $(".add-num");
        var praise_txt = $(".praise-txt");
        var num=parseInt(praise_txt.text());
        if(praise_img.attr("src") == ("images/like_icon_red.png")){
            /*    $(this).html("<img src='images/like_icon.png' class='praise-img' class='animation' />");
             praise_txt.removeClass("hover");
             text_box.show().html("<em class='add-animation'>-1</em>");
             $(".add-animation").removeClass("hover");
             num -=1;
             praise_txt.text(num)*/
        }else{
            $(this).html("<img src='images/like_icon_red.png' class='praise-img' class='animation' />");
            praise_txt.addClass("hover");
            text_box.show().html("<em class='add-animation'>+1</em>");
            $(".add-animation").addClass("hover");
            num +=1;
            praise_txt.text(num)
        }
    });
});


function prompt_box(){
    document.getElementsByClassName("prompt_box")[0].style.animation="DongHua4 1s both";
    document.getElementsByClassName("prompt_box")[0].style.display="block";
    setTimeout(function() {
        document.getElementsByClassName("prompt_box")[0].style.display="none";
    }, 2000);
}

/*  function add_sum01(){
 document.getElementsByClassName("add_num01")[0].style.animation="DongHua5 1s both";
 document.getElementsByClassName("add_num01")[0].style.display="block";
 setTimeout(function() {
 document.getElementsByClassName("add_num01")[0].style.display="none";
 }, 500);*/



var flag01=true;
function add_sum01()
{
    if(flag01){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num01")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num01")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num01")[0].style.display="none";
        }, 500);
        flag01=false;
    }
}

var flag02=true;
function add_sum02()
{
    if(flag02){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num02")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num02")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num02")[0].style.display="none";
        }, 500);
        flag02=false;
    }
}
var flag03=true;
function add_sum03()
{
    if(flag03){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num03")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num03")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num03")[0].style.display="none";
        }, 500);
        flag03=false;
    }
}
var flag04=true;
function add_sum04()
{
    if(flag04){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num04")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num04")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num04")[0].style.display="none";
        }, 500);
        flag04=false;
    }
}
var flag05=true;
function add_sum05()
{
    if(flag05){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num05")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num05")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num05")[0].style.display="none";
        }, 500);
        flag05=false;
    }
}
var flag06=true;
function add_sum06()
{
    if(flag06){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num06")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num06")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num06")[0].style.display="none";
        }, 500);
        flag06=false;
    }
}
var flag07=true;
function add_sum07()
{
    if(flag07){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num07")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num07")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num07")[0].style.display="none";
        }, 500);
        flag07=false;
    }
}
var flag08=true;
function add_sum08()
{
    if(flag03){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num08")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num08")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num08")[0].style.display="none";
        }, 500);
        flag08=false;
    }
}
var flag08=true;
function add_sum08()
{
    if(flag08){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num08")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num08")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num08")[0].style.display="none";
        }, 500);
        flag08=false;
    }
}
var flag09=true;
function add_sum09()
{
    if(flag09){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num09")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num09")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num09")[0].style.display="none";
        }, 500);
        flag09=false;
    }
}
var flag10=true;
function add_sum10()
{
    if(flag10){//执行完一次之后flag变为false，除非重新刷新页面，否则alert不会继续执行
        document.getElementsByClassName("add_num10")[0].style.animation="DongHua5 1s both";
        document.getElementsByClassName("add_num10")[0].style.display="block";
        setTimeout(function() {
            document.getElementsByClassName("add_num10")[0].style.display="none";
        }, 500);
        flag10=false;
    }
}