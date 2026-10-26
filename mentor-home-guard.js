(function () {
  var KEY = "patronloop-mentor-home-v1";
  if (sessionStorage.getItem(KEY) === "1") return;
  location.replace("index.html");
})();
