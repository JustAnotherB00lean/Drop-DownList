$(document).ready(function() {
  
  $(".selLabel").click(function () {
    $('.dropdown').toggleClass('active');
       
  });
    
     
    $(".selLabel1").click(function () {
   $('.dropdown1').toggleClass('active');
       
  });
    
  
  $(".dropdown-list li").click(function() {
    $('.selLabel').text($(this).text());
    $('.dropdown').removeClass('active');
    $('.selected-item p span').text($('.selLabel').text());
  });
    
     $(".dropdown1-list li").click(function() {
    $('.selLabel1').text($(this).text());
    $('.dropdown1').removeClass('active');
    $('.selected-item1 p span').text($('.selLabel1').text());
  });
  
});

(function() {
  var resize;

  $("btn").click(function() {
    if ($("btn").hasClass("loading-start")) {
      if ($("btn").hasClass("loading-end")) {
        return $("btn").attr("class", "");
      }
    } else {
      setTimeout((function() {
        return $("btn").addClass("loading-start");
      }), 0);
      setTimeout((function() {
        return $("btn").addClass("loading-progress");
      }), 500);
      return setTimeout((function() {
        return $("btn").addClass("loading-end");
      }), 1500);
    }
  });

  resize = function() {
    return $("body").css({
      "margin-top": ~~((window.innerHeight - 260) / 2) + "px"
    });
  };

  $(window).resize(resize);

  resize();

}).call(this);