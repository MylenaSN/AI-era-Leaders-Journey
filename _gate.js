(function () {
  const KEY = "patronloop-aiel-v1";
  if (sessionStorage.getItem(KEY) === "1") return;
  document.documentElement.style.visibility = "hidden";
  location.replace("index.html");
})();
