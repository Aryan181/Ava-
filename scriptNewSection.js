(function () {
  let contentLoaded = false;

  window.addEventListener("scroll", function () {
    if (!contentLoaded && (window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight) {
      contentLoaded = true;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // HTML file has been loaded successfully
          var response = xhttp.responseText;

          // Replace the entire content of the page with the new HTML
          document.documentElement.innerHTML = response;

          // Execute the JavaScript from the new HTML
          const newScripts = document.querySelectorAll("script");
          newScripts.forEach((script) => {
            const newScript = document.createElement("script");
            if (script.src) {
              newScript.src = script.src;
            } else {
              newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
          });

          // Reload the CSS styles
          const newStyles = document.querySelectorAll("link[rel=stylesheet]");
          newStyles.forEach((style) => {
            const newStyle = document.createElement("link");
            newStyle.rel = "stylesheet";
            newStyle.href = style.href;
            document.head.appendChild(newStyle);
            });
}
};
xhttp.open("GET", "index2.html", true);
xhttp.send();
}
});
})();