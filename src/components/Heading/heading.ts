const navLinks = document.querySelector(".nav-links");

document.querySelector(".hamburger")?.addEventListener("click", () => {
  navLinks?.classList.toggle("hidden");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks?.classList.add("hidden");
  })
);

export {};
