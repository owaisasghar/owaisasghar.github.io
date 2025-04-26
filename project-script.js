document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle")
  const body = document.body

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.add("dark-mode")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark")
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    } else {
      localStorage.setItem("theme", "light")
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
    }
  })

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")

    if (navLinks.classList.contains("active")) {
      navLinks.style.display = "flex"
      navLinks.style.flexDirection = "column"
      navLinks.style.position = "absolute"
      navLinks.style.top = "4rem"
      navLinks.style.left = "0"
      navLinks.style.width = "100%"
      navLinks.style.backgroundColor = "var(--background)"
      navLinks.style.padding = "1rem"
      navLinks.style.boxShadow = "0 5px 10px var(--shadow)"
    } else {
      navLinks.style.display = "none"
    }
  })

  // Animate on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".project-section, .tech-item, .related-project-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles for animation
  document.querySelectorAll(".project-section, .tech-item, .related-project-card").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run on load
  animateOnScroll()

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll)
})
