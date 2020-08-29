var maxSmall =  991;
/*

//popUp
var i = 0;
$(window).scroll(function() {
    if(i == 0){
        $(".overlay.pop").show(500);
        $(".popUp").show(500);
        i++;
    }
});

//close popUp
$(".popUp i").click(function() {
    $(".overlay.pop").slideUp(400);
    $(this).parent(".popUp").slideUp(400);
});

//toTopButton
$(window).scroll(function() {
    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 300) {
        $(".toTopButton").fadeIn(600);
    } else{
        $(".toTopButton").fadeOut(600);
    }
})

*/

$(".toTopButton").click(function() {
    $("html,body").animate({scrollTop:0},500);
});

(function toTop() {
    "use strict";
    $(".toTopButton").animate({bottom:"40px",opacity:"0.7"},1000,function() {
        $(".toTopButton").animate({bottom:"60px",opacity:"1"},1000,function() {
            $(".toTopButton").animate({bottom:"40px",opacity:"0.7"},1000,function() {
            $(".toTopButton").animate({bottom:"20px",opacity:"1"},1000,function() {
            toTop();
            });
        });
    });
    });
}());


// topBar dropdown menu
$(".topBar .dropdown .dropdown-toggle").hover(function(){
    var d = $(this).data("dropdown");
    $(this).siblings(d).slideDown(500);
})
$(".topBar .dropdown").mouseleave(function(){
    $(this).children(".dropdown-menu").slideUp(500);
})

//message appears and disappears
$(".shopping").hover(function(){
    $(".shopping .message").slideDown(500).delay(500).slideUp(500);
})

//navbar in sm and xs
$(".navBarToggler").click(function () {
    //console.log("k");
    $(this).animate({opacity:"0"},200);
    $(".navbar").animate({right:"0px"},500);
})
$(".navbar h4 i").click(function() {
    console.log("kk");
    $(".navbar").animate({right:"-100%"},500);
    $(".navBarToggler").animate({opacity:"1"},200);
})

//navbar dropdown
$("nav.navbar .dropdown .dropdown-toggler").click(function() {
    //console.log("click");
    $(this).siblings($(this).data("dropdown")).slideToggle(1200);
    $(".sidemenu-dropdown .dropdown-menu").slideUp(1200);
})

$(".sidemenu-dropdown .dropdown-menu").hide();
$("nav.navbar .dropdown-menu a.dropdown-item").click(function() {
    var side = $(this).data("target");
    //console.log(side);
    $(".sidemenu-dropdown .dropdown-menu").slideUp(300);
    $(".sidemenu-dropdown .dropdown-menu" + side).slideToggle(300);
})

//navbar fixed
$(window).scroll(function() {
    if($(window).innerWidth() > maxSmall){
        if($(window).scrollTop()>=200){
            $("nav.navbar .dropdown .dropdown-menu").slideUp(1200);
            $(".sidemenu-dropdown .dropdown-menu").slideUp(1000);
            $("nav.navbar").css({
                "position":"fixed",
                "top":"0",
                "paddingLeft":"10%",
                "width":"100%",
                "boxShadow":"0.1px 0.1px 0.1px 0.4px #EEE"
            });
        } else{
            $("nav.navbar").css("position","static");
        }
    }
})


//navbar recruitment dropdown
$("nav .navbar li a.dropdown-toggler").click(function() {
    var target = $(this).data("target");
    $(target).slideToggle(700);
})


//products positioning

$(".products img").each(function(){
    var pos = $(this).data("position"),
        align = $(this).siblings(".discription").data("align"),
        thisImage = $(this);
        
    if(pos == "center") {
        if($(window).innerWidth() <= maxSmall){
            $(thisImage).css({
                height:"80%",
                marginLeft:"17%",
                marginTop:"13%"
            });
            $(thisImage).siblings(".discription").css({
                left:"34%",
                top:"20px"
            });
        } else {
            $(thisImage).css({
                height:"70%",
                marginLeft:"15%",
                marginTop:"28%"
            });
            $(thisImage).siblings(".discription").css({
                left:"30%",
                top:"20px"
            });
        }
        
    } else {
        $(this).css(pos,"30%");
        $(this).siblings(".discription").css(align,"30px");
    }
})


//deals img hovering
$(".deals .deal img").hover(function(){
    //console.log("in");
    $(this).siblings("img.sweep").animate({left:"0",opacity:"1"},500);
})
$(".deals .deal img").mouseleave(function(){
    $(this).siblings("img.sweep").animate({left:"-100%",opacity:"0"},300);
})

//COUNTING DOWN
var countdown = setInterval(function() {
    var date = new Date(),
    currentMonth = date.getMonth(),
    currentDay = date.getDate(),
    currentHour = date.getHours(),
    currentMinutes = date.getMinutes(),
    currentSeconds = date.getSeconds();

    var month = 5,
        day = 28,
        hour = 11,
        min = 0,
        sec = 0,
        n;

    countedMonths = month - currentMonth;
    countedDays = day - currentDay;
    countedHours = hour - currentHour;
    countedMinutes = min - currentMinutes;
    countedSeconds = sec - currentSeconds;

    //console.log("Month : " + countedMonths + ", day : " + countedDays + ", Hours : " + countedHours + ", Minutes : " + countedMinutes + ", sec : " + countedSeconds);
    //Month days?
    if (month == 3 || month == 5 || month == 8 || month == 10) {
            n = 30;
        } else {n = 31;}

    if(countedSeconds < 0){
        countedMinutes -= 1;
        countedSeconds = 60 - Math.abs(countedSeconds);
    }
    if(countedMinutes < 0){
        countedHours -= 1;
        countedMinutes = 60 - Math.abs(countedMinutes);
    }
    if(countedHours < 0){
        countedDays -= 1;
        countedHours = 24 - Math.abs(countedHours);
    }
    if(countedDays < 0){
        countedMonths -= 1;
        countedDays = n - Math.abs(countedDays);
    }
    
    //console.log(typeof(stringDays));

    function stringAndSplit(time, counted){
        var s = "string",
            variable = s.concat(time),
            variable = counted.toString();
        if(variable.charAt(1)){
        
            digit1 = variable.charAt(0);
            digit2 = variable.charAt(1);
            
//            console.log(stringDaysOne);
        } else{
            digit1 = 0;
            digit2 = variable.charAt(0);
        }
        $(".deals .deal .countDown").children("." + time).children("h5:first-of-type").html(digit1);
        $(".deals .deal .countDown").children("." +  time).children("h5:last-of-type").html(digit2);
        
    }

    stringAndSplit("days", countedDays);
    stringAndSplit("hours", countedHours);
    stringAndSplit("mins", countedMinutes);
    stringAndSplit("secs", countedSeconds);
      
    if(countedMonths == 0 & countedDays == 0 & countedHours == 0 & countedMinutes == 0 & countedSeconds == 0 ) {
        clearInterval(countdown);
    }
},1000);


//navigation of laptops
$(".laptop .items .item.new").parent("div").show();
$(".laptop .items .item.new:first-of-type").parent("div").css("borderLeft","1px solid #EEE");

$(".laptop .head nav li").click(function() {
    var open = $(this).data("target");
    $(".laptop .head nav li").removeClass("active");
    $(this).addClass("active");
    $(".laptop .items .item").parent("div").fadeOut(200);
    $(".laptop .items .item"+open).parent("div").fadeIn(500);
    $(".laptop .items .item"+open+":first-of-type").parent("div").css("borderLeft","1px solid #EEE");
    
    if(open == ".sale"){
        $(".laptop .items .item"+open+":last-of-type").parent("div").css("borderRight","1px solid #EEE");
    }
    
})

//laptop wishlist, popup and message appear and close
$(".laptop .items .item").hover(function() {
    $(this).children(".wishlist").fadeIn(300);
})

$(".laptop .items .item").mouseleave(function() {
    $(this).children(".wishlist").fadeOut(300);
})

$(".laptop .items .item .wishlist .addto").click(function(){
    $(".laptop .message").fadeIn(400);
})
$(".laptop .items .message i.fa-times").click(function() {

    $(".laptop .items .message").animate({right:"-60%"},600);
    $(".laptop .items .message").fadeOut(50);
    if($(window).innerWidth() <= maxSmall){
        $(".laptop .items .message").animate({right:"0"},10);
    } else{
        $(".laptop .items .message").animate({right:"-14%"},10);
    }
    
})


$(".laptop:not(.mobile) .wishlist i.fa-search").click(function() {
    $(".overlay.pop").slideDown(400);
    $(".laptop:not(.mobile) .itemPopUp").slideDown(500);
})

$(".laptop.mobile .wishlist i.fa-search").click(function() {
    $(".overlay.pop").slideDown(400);
    $(".laptop.mobile .itemPopUp").slideDown(500);
})


//footer
//payments
$("footer .payments>div").click(function() {
    $("footer .payments>div").removeClass("active");
    $(this).addClass("active");
})


//CLICKED
$(".select .row>div:first-child img").click(function() {
    var source = $(this).attr("src"),
        cont = $(this).data("content");
    console.log(cont);
    $(".select img").removeClass("active");
    $(this).addClass("active");
    $(".select .big img").attr("src",source);
    $(".split .content>div").slideUp(400);
    $(".split .content>div" + cont).slideDown(400);
})

$(".details .bar h4").click(function() {
    $(".details .bar h4").removeClass("active");
    $(this).addClass("active");
    $(".details .content>div").slideUp(400);
    $(".details .content " + $(this).data("target")).slideDown(400);
})
$(".details .content .write").click(function() {
    $(this).siblings("form").slideToggle(500);
})
$(".details .content form textarea").keyup(function () {
    var textLength = $(this).val().length,
        maxText = $(this).attr("maxLength"),
        remaining = maxText - textLength;
    $(this).siblings("h5.remain").children("span").text(remaining);
})


$(".split .content .quan .counter h5.op").click(function() {
    var operation = $(this).html(),
        num = parseInt($(".split .content .quan .counter h5:not(.op)").html());
    if(operation == "+"){
        num++;
    } else if(operation == "-"){
        if(num > 1){
            num --;
        }
    }
    $(".split .content .quan .counter h5:not(.op)").html(num);
})



//related wishlist and message appear and close
$(".related .item").hover(function() {
    $(this).children(".wishlist").fadeIn(300);
})

$(".related .item").mouseleave(function() {
    $(this).children(".wishlist").fadeOut(300);
})

$(".related .item .wishlist .addto").click(function(){
    $(".related .itemMessage").fadeIn(400);
})
$(".related .itemMessage i.fa-times").click(function() {

    $(".related .itemMessage").animate({right:"-60%"},600);
    $(".related .itemMessage").fadeOut(50);
    if($(window).innerWidth() <= maxSmall){
        $(".related .itemMessage").animate({right:"0"},10);
    } else{
        $(".related .itemMessage").animate({right:"-14%"},10);
    }
    
})



//POPUP ITEM

$(".related .item .wishlist i.fa-search").click(function() {
    $(".overlay.pop").slideDown(400);
    $(".itemPopUp").slideDown(500);
})
$(".itemPopUp i.fa-times").click(function () {
    $(".overlay.pop").slideUp(400);
    $(".itemPopUp").slideUp(500);
})


$(".itemPopUp .content .colors ul li").each(function () {
    $(this).css("backgroundColor",$(this).data("color"));
})

$(".itemPopUp .content .quan .counter h5.op").click(function() {
    var operation = $(this).html(),
        num = parseInt($(".itemPopUp .content .quan .counter h5:not(.op)").html());
    if(operation == "+"){
        num++;
    } else if(operation == "-"){
        if(num > 1){
            num --;
        }
    }
    $(".itemPopUp .content .quan .counter h5:not(.op)").html(num);
})

$(".itemPopUp .choices img").click(function() {
    var source = $(this).attr("src");
    $(".itemPopUp img").removeClass("active");
    $(this).addClass("active");
    $(".itemPopUp .activeProduct img").attr("src",source);
})