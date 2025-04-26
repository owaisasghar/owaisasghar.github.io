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

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
        } else {
          if (card.getAttribute("data-category").includes(filter)) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        }
      })
    })
  })

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
          navLinks.style.display = "none"
        }
      }
    })
  })

  // Form Submission
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      setTimeout(() => {
        // Show success message
        const formGroups = this.querySelectorAll(".form-group")
        const lastFormGroup = formGroups[formGroups.length - 1]

        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.style.color = "var(--primary)"
        successMessage.style.padding = "1rem"
        successMessage.style.marginTop = "1rem"
        successMessage.style.backgroundColor = "var(--primary-light)"
        successMessage.style.borderRadius = "var(--radius)"
        successMessage.textContent = "Message sent successfully! I'll get back to you soon."

        this.insertBefore(successMessage, submitBtn.parentNode)

        // Reset form
        this.reset()

        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove()
        }, 5000)
      }, 1500)
    })
  }

  // Animate on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".project-card, .research-card, h2, .contact-content > *")

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
  document.querySelectorAll(".project-card, .research-card, h2, .contact-content > *").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run on load
  animateOnScroll()

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll)
})
