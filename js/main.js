import { loadHeaderFooter } from "./utils.mjs";
import { renderVacationAds, vacationAds } from "./ads.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // Render ads only if the container exists
  const adsContainer = document.querySelector("#vacation-ads");
  if (adsContainer) {
    renderVacationAds(vacationAds, adsContainer);
  }

  // Load header & footer
  loadHeaderFooter();

  // Mobile menu toggle
  const toggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#mobile-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }
});