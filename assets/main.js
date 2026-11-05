// ===== Business details – edit these in one place =====
const SITE = {
  phone: "+91 XXXXX XXXXX",      // TODO: real phone number, e.g. "+91 98xxxxxxxx"
  whatsapp: "91XXXXXXXXXX",      // TODO: WhatsApp number with country code, digits only
  email: "info@sbscctv.in",
  address: "Dindigul, Tamil Nadu", // TODO: full shop address
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
