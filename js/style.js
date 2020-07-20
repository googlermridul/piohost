$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $(".navbar").css({
            background: "rgba(91, 38, 252, .8)",
            paddingTop: "5px",
            paddingBottom: "5px"
         });
         $(".collapse").css({
            background: "none"
         });
      } else {
         $(".navbar").css({
            background: "none",
            paddingTop: "60px",
            paddingBottom: "50px"
         });
         $("#hamburger").click(function() {
            $(".navbar").css({
               background: "rgba(91, 38, 252, .8)"
            });
         })
      }
   });

   /*-- FAQ SECTION --*/
   $(".faq-body1").slideUp();
   $(".faq-body2").slideUp();

   $(".faq-header1").click(function() {
      $(".faq-header1 .fa").toggleClass("active");
      $(".faq-header2 .fa").removeClass("active");
      $(".faq-header3 .fa").removeClass("active");
      $(".faq-body1").slideToggle();
      $(".faq-body2, .faq-body3").slideUp();
   });
   $(".faq-header2").click(function() {
      $(".faq-header2 .fa").toggleClass("active");
      $(".faq-header1 .fa").removeClass("active");
      $(".faq-header3 .fa").removeClass("active");
      $(".faq-body2").slideToggle();
      $(".faq-body1, .faq-body3").slideUp();
   });
   $(".faq-header3").click(function() {
      $(".faq-header3 .fa").toggleClass("active");
      $(".faq-header1 .fa").removeClass("active");
      $(".faq-header2 .fa").removeClass("active");
      $(".faq-body3").slideToggle();
      $(".faq-body1, .faq-body2").slideUp();
   });

   /*$(".header1").click(function() {
      $(this).toggleClass("active");
      $(".body").addClass("active-bd");
      $(".body1").slideToggle();
      $(".body2, .body3").slideUp();
      $(".header2, .header3").removeClass("active");
   });

   $(".header2").click(function() {
      $(this).toggleClass("active");
      $(".body2").slideToggle();
      $(".body1, .body3").slideUp();
      $(".header1, .header3").removeClass("active");
   });

   $(".header3").click(function() {
      $(this).toggleClass("active");
      $(".body3").slideToggle();
      $(".body1, .body2").slideUp();
      $(".header1, .header2").removeClass("active");
   });*/


   /*-- TESTIMONIAL SECTION OWL CAROUSEL PLUGIN --*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: false,
      responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
      }
   })

   /*-- PARTNER SECTION OWL CAROUSEL PLUGIN --*/
   $('#partnerSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:5
        }
      }
   })

   /*-- SCROLL ON ANIMATION WOW PLUGIN --*/
   new WOW().init();

   /*-- SCROLL UP --*/
   $(function () {
       $.scrollUp({
          scrollDistance: 250,
          scrollSpeed: 1000,
          animationSpeed: 500
       });
   });

})
