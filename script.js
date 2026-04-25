const deckConfig = {
  dashboardUrl: "/dashboard/index.html",
  prototypeUrl: "http://localhost:3001/",
  comparisonUrl: "http://localhost:3001/compare",
};

const slides = Array.from(document.querySelectorAll(".slide"));
const pager = document.getElementById("pager");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentSlideEl = document.getElementById("currentSlide");
const totalSlidesEl = document.getElementById("totalSlides");

let current = 0;
let ticking = false;

function setLinks() {
  document.querySelectorAll("[data-link='dashboard']").forEach((node) => {
    node.setAttribute("href", deckConfig.dashboardUrl);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noreferrer");
  });

  document.querySelectorAll("[data-link='prototype']").forEach((node) => {
    node.setAttribute("href", deckConfig.prototypeUrl);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noreferrer");
  });

  document.querySelectorAll("[data-link='comparison']").forEach((node) => {
    node.setAttribute("href", deckConfig.comparisonUrl);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noreferrer");
  });
}

function updatePager() {
  const dots = pager.querySelectorAll(".pager-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
    dot.setAttribute("aria-current", index === current ? "true" : "false");
  });

  currentSlideEl.textContent = String(current + 1);
  totalSlidesEl.textContent = String(slides.length);
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

function goToSlide(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  slides[current].scrollIntoView({ behavior: "smooth", block: "start" });
  updatePager();
}

function buildPager() {
  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.className = "pager-dot";
    button.type = "button";
    button.setAttribute("aria-label", `Go to slide ${index + 1}`);
    button.addEventListener("click", () => goToSlide(index));
    pager.appendChild(button);
  });
}

function detectCurrentSlide() {
  const topOffset = window.scrollY + 160;
  let active = 0;

  slides.forEach((slide, index) => {
    if (slide.offsetTop <= topOffset) {
      active = index;
    }
  });

  if (active !== current) {
    current = active;
    updatePager();
  }

  ticking = false;
}

function bindControls() {
  prevBtn.addEventListener("click", () => goToSlide(current - 1));
  nextBtn.addEventListener("click", () => goToSlide(current + 1));

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      goToSlide(current + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goToSlide(current - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToSlide(slides.length - 1);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(detectCurrentSlide);
        ticking = true;
      }
    },
    { passive: true },
  );

  window.addEventListener("resize", detectCurrentSlide);
}

setLinks();
buildPager();
bindControls();
updatePager();
detectCurrentSlide();
