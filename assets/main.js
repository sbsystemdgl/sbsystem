// ===== Business details – edit these in one place =====
const SITE = {
  phone: "+91 99450 55000",
  secondaryPhone: "+91 98940 33434",
  whatsapp: "919945055000",
  email: "info@sbscctv.in",
  address: "16/96 Spencer Compound, Dindigul, Tamil Nadu",
  whatsappMessage: "Hi SB System Service, I would like a wholesale quote for:"
};

const digits = (s) => s.replace(/[^\d+]/g, "");

document.querySelectorAll(".js-whatsapp").forEach((a) => {
  a.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
});
document.querySelectorAll(".js-phone").forEach((a) => {
  a.textContent = SITE.phone;
  a.href = `tel:${digits(SITE.phone)}`;
});
document.querySelectorAll(".js-phone-secondary").forEach((a) => {
  a.textContent = SITE.secondaryPhone;
  a.href = `tel:${digits(SITE.secondaryPhone)}`;
});
document.querySelectorAll(".js-phone-btn").forEach((a) => {
  a.href = `tel:${digits(SITE.phone)}`;
});
document.querySelectorAll(".js-email").forEach((a) => {
  a.textContent = SITE.email;
  a.href = `mailto:${SITE.email}`;
});
document.querySelectorAll(".js-address").forEach((el) => {
  el.textContent = SITE.address;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);
