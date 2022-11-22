const navLinks = document.querySelector(".nav-links");

document.querySelector(".hamburger")?.addEventListener("click", () => {
  navLinks?.classList.toggle("hidden");
  navLinks?.classList.toggle("flex");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks?.classList.add("hidden");
    navLinks?.classList.remove("flex");
  })
);

export {};
