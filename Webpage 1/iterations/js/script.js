
    window.onscroll = function() {changes()};

    function changes(){
      if (document.documentElement.scrollTop > 450) {
            document.getElementById("header").className = "change";
          } else {
            document.getElementById("header").className = "";
          }
    }

    function OpenSideNav()
    {  var x=document.getElementsByClassName("side-nav");
      x[0].style.right="0px";
      var y=document.getElementsByClassName("body-overlay");
      y[0].style.width="100%";
    }
    function CloseSideNav()
    {  var x=document.getElementsByClassName("side-nav");
        x[0].style.right="-200px";
        var y=document.getElementsByClassName("body-overlay");
        y[0].style.width="0px";
    }
