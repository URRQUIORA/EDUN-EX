$(document).ready(function(){

// nav 안에 있는 메인메뉴를 호버하면 그 하위에 있는 서브메뉴만 나오도록
  $("nav div").hover(function(){
    $(this).find(".sub").stop().fadeToggle(300)
  })

// #tmbtn을 클릭하면 #tmenu가 등장!
  $("#tmbtn").click(function(){
    $("#tmenu").show(500)
  })
// #tmenu 소속 버튼태그를 클릭하면 #tmenu가 다시 사라지도록!
  $("#tmenu button").click(function(){
    $("#tmenu").fadeOut()
  })

  $("main ul").bxSlider({
    auto: true
  })

  $(".c2slide ul").bxSlider({
    maxSlides: 4,
    minSlides: 2,
    slideWidth: 300,
    slideMargin: 33,
    moveSlides: 1,
    controls: false,
    auto: true,
    pager: false
  })

  $("#topbtn").click(function(){
    $("html,body").animate({
      scrollTop:0
    })
  })


  /* #topbtn이 스크롤이 어느 정도 내려간 시점에서는 보이고, 얼마 안 내려갔을 때는 안 보이게 한다.
  => 스크롤이 일정 픽셀 구간 이상이면~ 숨긴다. 그게 아니라면~ 다시 보이도록 하겠다.
  ==>> if(){}else{} */

  $(window).scroll(function(){
    if($(this).scrollTop()>800){
      $("#topbtn").fadeIn()
    }else{
      $("#topbtn").fadeOut()
    }
  })


  
})