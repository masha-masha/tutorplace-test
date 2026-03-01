const modalOpenBtn = document.getElementById("heroBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("closeModal");
const modalInput = document.getElementById("modalInput");

const burgerBtn = document.getElementById("headerBurgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll(".mobile-menu__link");

const toggleScroll = (isLocked) => {
 document.body.style.overflow = isLocked ? "hidden" : "";
};

const openModal = () => {
 modalOverlay.classList.add("active");
 toggleScroll(true);
};

const closeModal = () => {
 modalOverlay.classList.remove("active");
 toggleScroll(false);
 if (modalInput) modalInput.value = "";
};

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
 if (e.target === modalOverlay) closeModal();
});

const openMenu = () => {
 mobileMenu.classList.add("is-open");
 toggleScroll(true);
};

const closeMenu = () => {
 mobileMenu.classList.remove("is-open");
 toggleScroll(false);
};

burgerBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
 link.addEventListener("click", closeMenu);
});

mobileMenu.addEventListener("click", (e) => {
 if (e.target === mobileMenu) closeMenu();
});

document.addEventListener("keydown", (e) => {
 if (e.key === "Escape") {
  if (modalOverlay.classList.contains("active")) closeModal();
  if (mobileMenu.classList.contains("is-open")) closeMenu();
 }
});