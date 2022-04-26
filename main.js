function swap(cssFile) {
    var link = document.getElementById("change-style")
    link.href = cssFile;
}

screen.addEventListener("orientationchange", function (landscape) {
    console.log("The orientation of the screen is: " + screen.orientation);
  });