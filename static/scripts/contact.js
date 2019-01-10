const formText = document.getElementById("formText");
const localWebsite = localStorage.getItem("website");
const localAnalytics = localStorage.getItem("analytics");
const localSEO = localStorage.getItem("seo");

(function() {
  if (localWebsite && localAnalytics && localSEO == 1) {
    formText.value =
      "I would like speak with you about building/improving my website, how you can increase my companys bottom line with SEO, and learn more about how you can help my business with the use of Google analytics.";
  } else if (localWebsite && localAnalytics == 1) {
    formText.value =
      "I would like speak with you about building/improving my website, as well as, learn more about how you can help my business with the use of Google analytics.";
  } else if (localWebsite && localSEO == 1) {
    formText.value =
      "I would like to speak with you about building/improving my website and how you can increase my companys bottom line with SEO.";
  } else if (localAnalytics && localSEO == 1) {
    formText.value =
      "I would like to learn more about how you can increase my companys bottom line with SEO, as well as, learn more about how you can help my business with the use of Google analytics.";
  } else if (localWebsite == 1) {
    formText.value =
      "I would like to learn more about your experience and how you can assist me with my website.";
  } else if (localAnalytics == 1) {
    formText.value =
      "I would like to learn more about how you can help my business with the use of Google analytics.";
  } else if (localSEO == 1) {
    formText.value =
      "I would like to learn more about how you can increase my companys bottom line with SEO.";
  }
})();
