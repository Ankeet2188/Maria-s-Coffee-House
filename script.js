document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a, .nav-button, .book-btn, .primary-btn, .secondary-btn");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href");
      if (!target || !target.startsWith("#")) return;

      const section = document.querySelector(target);
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const tabButtons = document.querySelectorAll(".tab-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      menuItems.forEach((item) => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
          setTimeout(() => (item.style.opacity = "1"), 10);
        } else {
          item.style.opacity = "0";
          setTimeout(() => (item.style.display = "none"), 300);
        }
      });
    });
  });

  const orderButtons = document.querySelectorAll("[data-product]");

  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = btn.getAttribute("data-product");
      const message = `Hi Maria's Coffee House! 👋 I'd like to order: ${product}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/97455550000?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      const originalText = btn.textContent;
      btn.textContent = "✓ Ordered";
      btn.style.background = "rgba(37, 211, 102, 0.3)";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
      }, 1500);
    });
  });

  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const alt = img ? img.alt : "gallery item";
      console.log(`Gallery item clicked: ${alt}`);
    });
  });

  const card = document.querySelector(".coffee-card button");
  if (card) {
    card.addEventListener("click", () => {
      const product = card.getAttribute("data-product");
      const message = `Hi Maria's Coffee House! ☕ I'd like to order: ${product}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/97455550000?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
    });
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    header.style.borderBottomColor = scrollY > 50 ? "rgba(212, 165, 116, 0.25)" : "rgba(212, 165, 116, 0.15)";
  });

  console.log("Maria's Coffee House website loaded! 🎉☕");
});
