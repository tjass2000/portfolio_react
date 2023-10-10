import React from "react";

export const Navbar = () => {
  function openNavBar() {
    if (document.getElementById("box1").style.height === "0px") {
      document.getElementById("bar1").style.transform =
        "rotate(-45deg) translate(-6px, 7px)";
      document.getElementById("bar2").style.transform = "translateX(200%)";
      document.getElementById("bar2").style.opacity = "0";
      document.getElementById("bar3").style.transform =
        "rotate(45deg) translate(-7px, -8px)";
      document.getElementById("box1").style.transformOrigin = "50% 100%";
      document.getElementById("box1").style.translate = "0px, 0px";
      document.getElementById("box1").style.height = "100vh";
      document.getElementById("box1").style.transition = "0.7s";
      document.getElementById("box1").style.transitionDelay = "0.2s";

      document.getElementById("box2").style.transformOrigin = "50% 100%";
      document.getElementById("box2").style.transform = "translate(0px, 0px)";
      document.getElementById("box2").style.height = "100vh";
      document.getElementById("box2").style.transition = "0.8s";
      document.getElementById("box2").style.transitionDelay = "0.6s";

      document.getElementById("box3").style.transformOrigin = "50% 100%";
      document.getElementById("box3").style.transform = "translate(0px, 0px)";
      document.getElementById("box3").style.height = "100vh";
      document.getElementById("box3").style.transition = "0.9s";
      document.getElementById("box3").style.transitionDelay = "1s";

      document.getElementById("box4").style.transformOrigin = "50% 100%";
      document.getElementById("box4").style.transform = "translate(0px, 0px)";
      document.getElementById("box4").style.height = "100vh";
      document.getElementById("box4").style.transition = "1s";
      document.getElementById("box4").style.transitionDelay = "1.4s";

      document.getElementById("nav_content").style.transformOrigin = "50% 100%";
      document.getElementById("nav_content").style.transform =
        "translate(0%, -5%)";
      document.getElementById("nav_content").style.visibility = "visible";
      document.getElementById("nav_content").style.opacity = "1";
      document.getElementById("nav_content").style.transitionDelay = "2.4s";
    } else {
      document.getElementById("bar1").style.transform = "none";
      document.getElementById("bar2").style.transform = "none";
      document.getElementById("bar2").style.opacity = "1";
      document.getElementById("bar3").style.transform = "none";

      document.getElementById("box1").style.transformOrigin = "180px 0px";
      document.getElementById("box1").style.translate = "0px, 0px";
      document.getElementById("box1").style.height = "0";
      document.getElementById("box1").style.transition = "0.8s";
      document.getElementById("box1").style.transitionDelay = "1.4s";

      document.getElementById("box2").style.transformOrigin = "180px 0px";
      document.getElementById("box2").style.transform = "translate(0px, 0px)";
      document.getElementById("box2").style.height = "0";
      document.getElementById("box2").style.transition = "1s";
      document.getElementById("box2").style.transitionDelay = "1s";

      document.getElementById("box3").style.transformOrigin = "180px 0px";
      document.getElementById("box3").style.transform = "translate(0px, 0px)";
      document.getElementById("box3").style.height = "0";
      document.getElementById("box3").style.transition = "1.2s";
      document.getElementById("box3").style.transitionDelay = "0.6s";

      document.getElementById("box4").style.transformOrigin = "180px 0px";
      document.getElementById("box4").style.transform = "translate(0px, 0px)";
      document.getElementById("box4").style.height = "0";
      document.getElementById("box4").style.transition = "1.4s";
      document.getElementById("box4").style.transitionDelay = "0.2s";

      document.getElementById("nav_content").style.transformOrigin =
        "684px 165px";
      document.getElementById("nav_content").style.transform =
        "translate(0px, 0px)";
      document.getElementById("nav_content").style.visibility = "hidden";
      document.getElementById("nav_content").style.opacity = "0";
      document.getElementById("nav_content").style.transition = "0.5s";
    }
  }
  function handleHomeRoute() {
    var homeEle = document.getElementById("#home");
    homeEle.scrollIntoView();
    openNavBar();
  }
  function handleAboutRoute() {
    var aboutEle = document.getElementById("#about");
    aboutEle.scrollIntoView();
    openNavBar();
  }
  function handleContactRoute() {
    var contactEle = document.getElementById("#contact");
    contactEle.scrollIntoView();
    openNavBar();
  }
  function handleProjectRoute() {
    var projectEle = document.getElementById("#projects");
    projectEle.scrollIntoView();
    openNavBar();
  }
  return (
    <div className="navbar">
      <div className="Menu" onClick={() => openNavBar()}>
        <div className="bar1" id="bar1"></div>
        <div className="bar2" id="bar2"></div>
        <div className="bar3" id="bar3"></div>
      </div>
      <div className="navbarList" id="nav">
        <div className="box-wrapper">
          <div
            className="box"
            id="box1"
            style={{
              transformOrigin: "180px 0px",
              height: "0px",
              transition: "all 0.8s ease 1.4s",
            }}
          ></div>
          <div
            className="box"
            id="box2"
            style={{
              transformOrigin: "180px 0px",
              height: "0px",
              transition: "all 1s ease 1s",
            }}
          ></div>
          <div
            className="box"
            id="box3"
            style={{
              transformOrigin: "180px 0px",
              height: "0px",
              transition: "all 1.2s ease 0.6s",
            }}
          ></div>
          <div
            className="box"
            id="box4"
            style={{
              transformOrigin: "180px 0px",
              height: "0px",
              transition: "all 1.4s ease 0.2s",
            }}
          ></div>
        </div>
        <div
          className="nav-main_content"
          id="nav_content"
          style={{
            transformOrigin: "684px 165px",
            transform: "translate(0px,0px)",
            visibility: "hidden",
            opacity: "0",
            transition: "all 1.5s ease 0.2s",
          }}
        >
          <div className="web-content">
            <h4>ON THE WEB</h4>
            <div className="web-links">
              <div className="web-links-box">
                <a
                  href="https://instagram.com/tejas_khera?igshid=NzZlODBkYWE4Ng=="
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="Instagram Icon" src="InstagramIcon.svg"></img>
                </a>
                <a
                  href="https://twitter.com/Tejas72783242"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="Twitter Icon" src="TwitterIcon.svg"></img>
                </a>
                <a
                  href="https://github.com/tjass2000"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="Github Icon" src="GithubIcon.svg"></img>
                </a>
              </div>
              <div
                className="web-links-box"
                id="list2-items"
                rel="noreferrer"
                target="_blank"
              >
                <a
                  href="https://linkedin.com/in/tejas-khera-3b2648206"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="Linkedin Icon" src="LinkedinIcon.svg"></img>
                </a>
              </div>
            </div>
            <a
              href="resume.pdf"
              className="resume"
              rel="noreferrer"
              target="_blank"
            >
              Resume 📗
            </a>
          </div>
          <div className="routes">
            <h4>NAVIGATION</h4>
            <ul className="list">
              <li className="listItem">
                <h2 onClick={() => handleHomeRoute()}>HOME</h2>
              </li>
              <li className="listItem">
                <h2 href="#projects" onClick={() => handleProjectRoute()}>
                  PROJECTS
                </h2>
              </li>
              <li className="listItem">
                <h2 href="#about" onClick={() => handleAboutRoute()}>
                  ABOUT
                </h2>
              </li>
              <li className="listItem">
                <h2 href="#contact" onClick={() => handleContactRoute()}>
                  CONTACT
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logoNav" id="logoNav">
        <img alt="logo" src="logo.svg"></img>
      </div>
    </div>
  );
};
