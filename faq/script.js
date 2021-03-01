// first bring in all buttons
const faqs = document.querySelectorAll('.faq-toggle')

// now loop through entire list of buttons and add a click listener
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    // when button gets clicked, toggle the active class
    faq.parentNode.classList.toggle('active')
  })
})
