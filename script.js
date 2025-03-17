//Mouse shadow
const shadow = document.querySelector("#shadow");

const mouse_shadow = function (event) {
  shadow.style.top = event.pageY + "px";
  shadow.style.left = event.pageX + "px";
};

window.addEventListener("load", function () {
  document.querySelector("body").addEventListener("mousemove", mouse_shadow);
});

//Btns and sections for scroll
const aboutBtn = document.querySelector("#about-me");
const myWorkBtn = document.querySelector("#my-work");
const cvBtn = document.querySelector("#cv");

const aboutSection = document.querySelector("#section1");
const workSection = document.querySelector("#section2");
const cvSection = document.querySelector("#section3");
const contactSection = document.querySelector("#contact-me");

//Scroll page from btns
function smoothScroll(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  smoothScroll(aboutSection);
});

myWorkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(workSection);
});

cvBtn.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(cvSection);
});

// Error content
document.addEventListener("DOMContentLoaded", () => {
  const err = document.querySelector(".error");
  const content = document.querySelector(".wrapper");
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  const backToMain = document.querySelector(".back-to-main-btn");
  const submitBtn = document.querySelector(".submit-btn");

  function toggleErrorContent(showError) {
    if (!err || !content) return;
    err.style.display = showError ? "block" : "none";
    content.style.display = showError ? "none" : "flex";
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (event) => {
      event.preventDefault();
      toggleErrorContent(true);
    });
  }

  if (backToMain) {
    backToMain.addEventListener("click", () => {
      toggleErrorContent(false);
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      toggleErrorContent(true);
    });
  }
});
