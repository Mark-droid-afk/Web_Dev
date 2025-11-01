function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copyEmail(email, buttonEl) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(
      function () {
        const originalText = buttonEl.textContent;
        buttonEl.textContent = "Copied!";
        buttonEl.disabled = true;
        setTimeout(function () {
          buttonEl.textContent = originalText;
          buttonEl.disabled = false;
        }, 1500);
      },
      function () {
        fallbackCopyText(email, buttonEl);
      }
    );
  } else {
    fallbackCopyText(email, buttonEl);
  }
}

function fallbackCopyText(text, buttonEl) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    const originalText = buttonEl.textContent;
    buttonEl.textContent = "Copied!";
    buttonEl.disabled = true;
    setTimeout(function () {
      buttonEl.textContent = originalText;
      buttonEl.disabled = false;
    }, 1500);
  } catch (err) {
    console.error("Copy failed", err);
  }
  document.body.removeChild(textarea);
}

const slides = document.querySelectorAll(".video-slide");
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
});



