$(function() {
  if (window.location.pathname === '/') {
    $(".site-header").css({
      "animation": "fade-in-down 1.5s"
    });
  };

  $(".social").on("mouseenter", "a", function() {
    $(this).addClass("animated pulse");
    $(this).on("mouseleave", function() {
      $(this).removeClass("animated pulse");
    });
  });

  // Hamburger menu

  function toggleOnClick(el, target, animation) {
    $(el).off().on("click", function() {


    });
  }

  var hamburgerToggle = function() {
    $(".hamburger-menu").on("click", function() {
      var $target = $(".nav-bar-780");

      $target.show();
      $target.addClass("animated fadeInRight").one('animationend', function() {
         $target.removeClass("animated fadeInRight");
      });

      $(".clear-modal").show();
      $(this).off();

      $(".clear-modal, .hamburger-menu").on("click", function() {
        $target.addClass("animated fadeOutRight").one('animationend', function() {
           $target.removeClass("animated fadeOutRight");
           $target.hide();
        });

        $(".clear-modal").hide();
        $(".clear-modal, .hamburger-menu").off();
        hamburgerToggle();
      });
    });
  };

  hamburgerToggle();

});