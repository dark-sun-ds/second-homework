const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleButtonVisibility() {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", toggleButtonVisibility);
