const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 6) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
      box.innerHTML = 'hi'
    } else {
      box.classList.remove('show')
      box.innerHTML = 'bye'
    }
  })
}
