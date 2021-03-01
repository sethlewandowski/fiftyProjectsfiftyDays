const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
})

function createTags(input) {
  const tags = input
    .split(',') // turns into array
    .filter((tag) => tag.trim() !== '') // filters out any whitespace entry
    .map((tag) => tag.trim()) // trims whitespace from array item

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}
