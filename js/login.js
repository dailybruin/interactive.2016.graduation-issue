$(document).ready(function(){
  $('.login-button').on("click",function(e){
      e.preventDefault;
  });

  $("#username").css("border-color", "green");
  var type1 = function(callbackFunction){
    $("#username").typed({
      strings: ["Joe Bruin", "Josephine Bruin"],
      typeSpeed: 14,
      callback: function(){
        callbackFunction();
      },
      showCursor: true,
      // character for cursor
      cursorChar: "|"
    });
  }
  var type2 = function(){
    $("#password").css("border-color", "green");
    $("#password").typed({
          strings: ["^400Congratulations Class of 2016!"],
          typeSpeed: 14,
          showCursor: true,
          // character for cursor
          cursorChar: "|",
          callback: function(){
            $(".logon-button").css("background-color", "yellow") 
            /* CHANG CAN DO THE LOADING ANIMATION HERE */

          },
    });
  }

  type1(type2);


});
