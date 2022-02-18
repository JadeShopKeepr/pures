$(function(){
   $('.design__slider').slick({
      dots:false,
      infinite: true,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: '<img class="arrow arrow-prev" src="/images/prev.svg" alt="">',
      nextArrow: '<img class="arrow arrow-next" src="/images/next.svg" alt=""></img>'

   });
})