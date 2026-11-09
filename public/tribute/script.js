gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ SCROLL PROGRESS BAR ============ */
const progressFill = document.getElementById("progressFill");
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressFill.style.width = pct + "%";
}
window.addEventListener("scroll", updateProgressBar, { passive: true });
updateProgressBar();

/* ============ DRIFTING EMBERS ============ */
const embersContainer = document.getElementById("embers");
if (!prefersReducedMotion && embersContainer) {
  const EMBER_COUNT = 22;
  for (let i = 0; i < EMBER_COUNT; i++) {
    const ember = document.createElement("span");
    ember.className = "ember" + (Math.random() > 0.6 ? " blue" : "");
    const left = Math.random() * 100;
    const duration = 9 + Math.random() * 10;
    const delay = Math.random() * 14;
    const drift = (Math.random() - 0.5) * 120;
    ember.style.left = left + "%";
    ember.style.animationDuration = duration + "s";
    ember.style.animationDelay = delay + "s";
    ember.style.setProperty("--drift", drift + "px");
    embersContainer.appendChild(ember);
  }
}

/* ============ HERO: pinned + fades as the next section arrives ============ */
const heroPanel = document.getElementById("hero");

if (!prefersReducedMotion) {
  ScrollTrigger.create({
    trigger: heroPanel,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });

  gsap.to(heroPanel, {
    scale: 0.92,
    opacity: 0.25,
    filter: "blur(4px)",
    ease: "none",
    scrollTrigger: {
      trigger: heroPanel,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/* ============ SCROLLY PANELS: pinned video, multiple text beats ============ */
document.querySelectorAll(".scrolly-panel").forEach((panel) => {
  const pinEl = panel.querySelector(".scrolly-pin");
  const blocks = Array.from(panel.querySelectorAll(".text-block"));
  const dots = Array.from(panel.querySelectorAll(".beat-dots span"));
  const count = blocks.length || 1;

  const setActive = (index) => {
    blocks.forEach((block, i) => {
      block.classList.toggle("is-active", i === index);
      block.classList.toggle("is-exiting", i < index);
    });
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  };

  if (prefersReducedMotion || count <= 1) {
    setActive(0);
    return;
  }

  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "+=" + count * 100 + "%",
    pin: pinEl,
    pinSpacing: true,
    scrub: false,
    onUpdate: (self) => {
      const index = Math.min(count - 1, Math.floor(self.progress * count));
      setActive(index);
    },
    onEnter: () => setActive(0),
  });
});

/* ============ GENERIC PANEL-CONTENT REVEAL (gif section) ============ */
document.querySelectorAll(".panel-content").forEach((el) => {
  ScrollTrigger.create({
    trigger: el,
    start: "top 75%",
    onEnter: () => el.classList.add("is-visible"),
    onEnterBack: () => el.classList.add("is-visible"),
  });
});

const gifFrame = document.querySelector(".gif-frame");
if (gifFrame) {
  ScrollTrigger.create({
    trigger: gifFrame,
    start: "top 80%",
    onEnter: () => gifFrame.classList.add("is-visible"),
    onEnterBack: () => gifFrame.classList.add("is-visible"),
  });
}

/* Note: no parallax drift on the scrolly media — the video must stay visually fixed
   while its text beats cycle, so the pinned frame never moves during that scroll range. */

/* ============ ONLY PLAY BACKGROUND VIDEOS WHILE ON SCREEN ============ */
/* The hero wraps its video (plus a blurred backdrop twin) in .media-frame; every other
   section plays a single full-bleed .bg-video-cover directly. Observe both shapes. */
const lazyTargets = document.querySelectorAll(".media-frame, .bg-video-cover");
const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      const videos = target.tagName === "VIDEO" ? [target] : target.querySelectorAll("video");
      videos.forEach((vid) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else if (vid.id !== "heroVideo") {
          vid.pause();
        }
      });
    });
  },
  { threshold: 0.15 }
);
lazyTargets.forEach((target) => videoObserver.observe(target));

/* ============ CTA: smooth scroll back to the top ============ */
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* Recalculate pinned sections once media finishes loading (prevents height jumps) */
window.addEventListener("load", () => ScrollTrigger.refresh());
