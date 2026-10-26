(function () {
  var KEY = "patronloop-mentor-home-v1";
  if (sessionStorage.getItem(KEY) === "1") return;
  var path = location.pathname.replace(/\\/g, "/");
  var nested = /\/trilha-[^/]+\//.test(path);
  location.replace(nested ? "../index.html" : "index.html");
})();
