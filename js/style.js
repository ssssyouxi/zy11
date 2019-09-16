//banner选择
if ($(window).width() >= 1200) {
    $(".banner1 img").attr("src", $(".banner1 img").attr("data-bm"))
    $(".banner1 img").removeClass("img-responsive")
    $("#product .product-index #special a").css("height",$("#product .product-index #special").prev("li").css("height"))
} else if ($(window).width() >= 1000) {
    $(".banner1 img").attr("src", $(".banner1 img").attr("data-s"))
    console.log($(".banner1 img").attr("data-s"))
    $(".banner1 img").removeClass("img-responsive")
    $("#product .product-index #special a").css("height",$("#product .product-index #special").prev("li").css("height"))
} else if ($(window).width() >= 760) {
    $(".banner1 img").attr("src", $(".banner1 img").attr("data-s"))
    $(".banner1 img").addClass("img-responsive")
} else {
    $("#news .banner1 img,#product .banner1 img").attr("src", $(".banner1 img").attr("data-l"))
    $("#news .banner1 img,#product .banner1 img").addClass("img-responsive")
    $(".banner1 img").attr("src", $(".banner1 img").attr("data-s"))
    $(".banner1 img").addClass("img-responsive")
    for (var i = 0; i < $("#news .sec3 li p.intro").length; i++) {
        $("#news .sec3 li").eq(i).height(($("#news .sec3 li p.intro").eq(i).height() + 50))
        console.log('ok')
    }
}
//翻页按钮
$("#left-button").click(function () {
    $(".pager-next.icon-angle-right").click()
    changeClass()
})
$("#right-button").click(function () {
    $(".pager-prev.icon-angle-left").click()
    changeClass()
})
setInterval('$(".sec2 .btn span").removeClass("active").eq($(".pointer li.active").index()).addClass("active")', 500)

function changeClass() {
    $(".sec2 .btn span").removeClass("active").eq($(".pointer li.active").index()).addClass("active")
}
