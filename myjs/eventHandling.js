
function setupClickListener(elementId, targetUrl) {
  var element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", function (e) {
      window.location.href = targetUrl;
    });
  }
}

setupClickListener("signIn","loginsignup.html");
setupClickListener("signUp","login-page.html");


var drawercancelCircle = document.getElementById("drawercancelCircle");
      if (drawercancelCircle) {
        drawercancelCircle.addEventListener("click", function (e) {
          var popup = e.currentTarget.parentNode;
          function isOverlay(node) {
            return !!(
              node &&
              node.classList &&
              node.classList.contains("popup-overlay")
            );
          }
          while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
          }
          if (isOverlay(popup)) {
            popup.style.display = "none";
          }
        });
      }
      
      var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
      var observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );
      
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.observe(scrollAnimElements[i]);
      }
      
      var frameButton2 = document.getElementById("frameButton2");
      if (frameButton2) {
        frameButton2.addEventListener("click", function () {
          var drawerOverlay = document.getElementById("frameDrawer");
          if (!drawerOverlay) return;
          var drawerOverlayStyle = drawerOverlay.style;
          if (drawerOverlayStyle) {
            drawerOverlayStyle.display = "flex";
            drawerOverlayStyle.zIndex = 99;
            drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
            drawerOverlayStyle.alignItems = "flex-end";
            drawerOverlayStyle.justifyContent = "";
          }
          drawerOverlay.setAttribute("closable", "");
      
          var onClick =
            drawerOverlay.onClick ||
            function (e) {
              if (
                e.target === drawerOverlay &&
                drawerOverlay.hasAttribute("closable")
              ) {
                drawerOverlayStyle.display = "none";
              }
            };
          drawerOverlay.addEventListener("click", onClick);
        });
      }



      //swtich between signup and signin