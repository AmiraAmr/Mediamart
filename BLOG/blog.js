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
*/

//toTopButton
$(window).scroll(function() {
    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 300) {
        $(".toTopButton").fadeIn(600);
    } else{
        $(".toTopButton").fadeOut(600);
    }
})
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
//        console.log("ll");
    $(".navBarToggler").animate({opacity:"0"},200);
    $(".navbar").animate({right:"0px"},500);
})
$(".navbar h4 i").click(function() {
    $(".navBarToggler").animate({opacity:"1"},200);
    $(".navbar").animate({right:"-100%"},500);
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
    console.log("rec");
    var target = $(this).data("target");
    $(target).slideToggle(700);
})


//SIDEBAR
//menu 
$(".split sidebar h4 i").click(function() {
    if($(this).hasClass("fa-minus")){
        $(this).parent("h4").next(".menu").slideUp(600);
        $(this).toggleClass("fa-plus fa-minus");
    } else{
        $(".split sidebar h4 i").removeClass("fa-minus").addClass("fa-plus");
        $(this).toggleClass("fa-plus fa-minus");
        $(".split sidebar .menu li i").removeClass("fa-minus").addClass("fa-plus");
        $(".split sidebar .menu").slideUp(600);
        $(".split sidebar .submenu").slideUp(600);
        $(this).parent("h4").next(".menu").slideDown(600);

    }
})

//submenu
$(".split sidebar .menu li i").click(function (){
    if($(this).hasClass("fa-minus")){
        $(this).parent("li").next(".submenu").slideUp(600);
        $(this).toggleClass("fa-plus fa-minus");
    } else{
        $(".split sidebar .menu li i").removeClass("fa-minus").addClass("fa-plus");
        $(this).toggleClass("fa-plus fa-minus");
        $(".split sidebar .menu .submenu").slideUp(600);
        $(this).parent("li").next(".submenu").slideDown(600);

    }
})


//footer
//payments
$("footer .payments>div").click(function() {
    $("footer .payments>div").removeClass("active");
    $(this).addClass("active");
})