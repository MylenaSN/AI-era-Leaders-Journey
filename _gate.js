(function () {
  const KEY = "patronloop-aiel-v1";
  if (sessionStorage.getItem(KEY) !== "1") {
    location.replace("index.html");
  }
})();
