const askWebDev = document.getElementById("askWebDev");
const askAnalytics = document.getElementById("askAnalytics");
const askSeo = document.getElementById("askSeo");

askWebDev.addEventListener("click", function() {
  localStorage.setItem("website", "1");
});

askAnalytics.addEventListener("click", function() {
  localStorage.setItem("analytics", "1");
});

askSeo.addEventListener("click", function() {
  localStorage.setItem("seo", "1");
});
