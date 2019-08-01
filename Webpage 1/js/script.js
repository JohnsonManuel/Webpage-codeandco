
window.addEventListener('scroll', changes);
document.addEventListener('DOMContentLoaded',domloaded);

/*let test = document.getElementById('header');
if(!test) { console.log("NO ELEMENT FOUND"); }
else { console.log("FOUND"); }*/

function domloaded() {
    document.getElementsByClassName("close-button")[0].addEventListener("click", CloseSideNav);
    document.getElementsByClassName("body-overlay")[0].addEventListener("click", CloseSideNav);
    document.getElementsByClassName("hamburger")[0].addEventListener("click",OpenSideNav);
  }

    function changes() {

      var scrollthreshold=document.getElementById("back").offsetHeight-document.getElementById("header").offsetHeight;

      console.log(scrollthreshold);
      if (document.documentElement.scrollTop > scrollthreshold) {

            document.getElementById("header").classList.add("change");

          } else {
            document.getElementById("header").classList.remove("change");
          }
    }

    function OpenSideNav()
    {  var sideNav=document.getElementsByClassName("side-nav")[0];
      sideNav.style.top="0";
      var bodyOverlay=document.getElementsByClassName("body-overlay")[0];
      bodyOverlay.style.width="100%";
    }
    function CloseSideNav()
    { console.log("it ran");
      var sideNav=document.getElementsByClassName("side-nav")[0];
      sideNav.style.right="-200px";
      var bodyOverlay=document.getElementsByClassName("body-overlay")[0];
      bodyOverlay.style.width="0px";
    }
