$(function() {
  // $("#loop article").first().css("background", "red");


  // ============== CSS CHANGES ======================

  // Add .tag class to tags

  $("a[href*='/tag/']").addClass("tag");

  // Center main title

  jQuery.fn.center = function(centered_on) {
      this.css("position","fixed");
      this.css("top", (($(window).height() - this.outerHeight()) / 2) + "px");
      this.css("left", ((centered_on.width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
      return this;
  }

  var centerOnMain = function(element) {
    $(element).center($(".main-info"));
      window.onresize = function(event) {
        $(element).center($(".main-info"));
      }
    }

  centerOnMain(".main-info-header");

  // Shade odd article backgrounds

  $(".article-list").filter(":odd").css({
    "background": "rgba(251, 251, 251, 0.82)"
  });

  // Modal display

  $("li.mail").off().on("click", function(e) {
    e.preventDefault();

    $(".modal, .modal_layer").addClass("visible");
    $(".modal").addClass("animated fadeInLeftBig");


    $(".modal_layer, input[type='submit']").on("click", function() {
      $(".modal").removeClass("fadeInLeftBig visible animated");
      $(".modal_layer").removeClass("visible");
      $("input[type='email']").val('');
      $(this).off();
    });
  });

  // ANIMATIONS

  // $('.article-excerpt').hover(
  //   function(){ $(this).addClass('animated verticalShiftUp') },
  //   function(){ $(this).removeClass('animated verticalShiftUp') }
  // )
  // Main info animations

  function delayedAnimation(el, animation, delay) {
    // Must set default CSS Visibility to Hidden
    setTimeout(function() {
      $(el).css("visibility", "visible");
      $(el).addClass("animated" + " " + animation);
    }, delay);
  }

  delayedAnimation(".main-info .main-title a", "fadeIn", 300);
  delayedAnimation(".sub-title", "fadeIn", 400);
  delayedAnimation(".nav-menu", "fadeIn", 1500);
  delayedAnimation("li.mail", 'fadeInLeft', 500);
  delayedAnimation("li.instagram", 'fadeInLeft', 750);
  delayedAnimation("li.twitter", 'fadeInLeft', 1000);




  // function displayTagCloud(option) {
  //   $(".tag-cloud .tag").css("visibility", option);
  //   $(".tag-cloud").css("visibility", option);
  // }

  $(".toggle-switch-bar .topics").on("click", function() {
    $(".tag-cloud").slideDown();
    $(".tag-modal-layer").fadeIn();

    $(".tag-modal-layer").on("click", function() {
      $(".tag-modal-layer").hide();
      $(".tag-cloud").hide();
    });


    // $(".right-side-content").off().on("click", function() {
    //   $(".tag-cloud").hide();
    // });


  });

  // setTimeout(function() {
  //   fadeInLeft(".main-info .main-title");
  // }, 0);
  // setTimeout(function() {
  //   fadeInLeft("li.twitter");
  // }, 1000);
  // setTimeout(function() {
  //   fadeInLeft("li.instagram");
  // }, 750);
  // setTimeout(function() {
  //   fadeInLeft("li.mail");
  // }, 500);

  // setTimeout(function() {
  //   $(".nav-menu").css("visibility", "visible");
  //   $(".nav-menu").addClass("animated fadeInRight");
  // }, 750);

// END
});