const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("unable to append to server.log.");
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });
app.use("/static", express.static("static"));
app.use("/files", express.static("files"));

app.use("/images", express.static("images"));

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    canonical: "https://portfolio-thomason.herokuapp.com/",
    title: "Steven Thomason",
    pageTitle: "Web Developer in Charleston, SC",
    metaDesc:
      "Web Developer located in Charleston, SC.  I specialize in Front End Design and Development with a focus on creating results producing SEO.",
    welcomeMessage: "Designer </> Developer"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    canonical: "https://portfolio-thomason.herokuapp.com/about",
    title: "About Me",
    pageTitle: "Web Developer, SEO Specialist, and Web Analyst experience",
    metaDesc:
      "Learn about Steven Thomason, a local Web Developer in Charleston, SC. A Web Developer, SEO Specialist, and Web Analyst experience"
  });
});

app.get("/projects", (req, res) => {
  res.render("projects.hbs", {
    canonical: "https://portfolio-thomason.herokuapp.com/projects",
    title: "Projects",
    pageTitle: "Projects and relevant work examples from Steven Thomason",
    metaDesc:
      "A list of the most relevant projects and work examples from Steven Thomason."
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs", {
    canonical: "https://portfolio-thomason.herokuapp.com/contact",
    title: "Contact Me",
    pageTitle: "Contact Steven Thomason",
    metaDesc: "Contact form used to contact Steven Thomason."
  });
});

app.get("/resume", (req, res) => {
  res.render("resume.hbs", {
    canonical: "https://portfolio-thomason.herokuapp.com/resume",
    title: "Resume",
    pageTitle: "Steven Thomason Resume",
    metaDesc: "Steven Thomasons most current resume."
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request"
  });
});

app.listen(port, () => {
  console.log(`Sever is up on port ${port}`);
});
