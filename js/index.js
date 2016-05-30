function GetSetCookie() {
  var version = getCookie("version");
  if (version != null && version != "") {
    if (version == 'full') {
      version = 'text';
      console.log('line 6');
    }
    else {
      version = 'full';
      console.log('line 10');
    }
  }
  else {
    version = 'full';
    console.log('line 15');
  }
  setCookie("version", version, 365);
  // window.top.location.reload();
}
function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value + "; path=/";
}
function getCookie(c_name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

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

            GetSetCookie();
            // window.location.href = "main.html";

          },
        });
  }

  type1(type2);


});
