  // Additional JS functions here
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '525231524171382', // App ID
      channelUrl : '//localhost:3000/channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional init code here

  };

  // Load the SDK Asynchronously
  (function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js         = d.createElement('script'); js.id = id; js.async = true;
    js.src     = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
  }(
    document));

//fb login
function login(){
  FB.login(function(response){
            if(response.authResponse) {
              exports.fblogin = function(req, res){
                res.render('fblogin');
              } 
            }
            else{
            // cancelled
            }
          });
};

function fbstatus(){
  FB.getLoginStatus(function(response) {
          if (response.status      === 'connected') {
          // connected
          }
          else if (response.status === 'not_authorized') {
          login();
          }
          else {
          // not_logged_in
          login();
          }
          });
}; 

