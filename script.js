jQuery(document).ready(function () {
  // uses source from online(make sure the file has CORS access enabled if used in cross-domain)
  function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  var file = getUrlParameter("name");

  if (file === null || file === "") {
    alert("File name empty/not exists.");
  } else {
    $("#page-title").text(file);
    var pdf = `./pdf/${file}.pdf`;
    var options = {
      height: 2000,
      duration: 700,
      backgroundColor: "#2F2D2F",
      soundEnable: false,
      // Enable touch support
      useTouch: true,
    };
    var flipBook = $("#flipbookContainer").flipBook(pdf, options);
  }
});
