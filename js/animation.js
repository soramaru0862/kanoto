'use strict'
let fadeInTarget = document.querySelectorAll('.animation')

window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top
    const scroll = window.pageYOffset || document.documentElement.scrollTop
    const offset = rect + scroll
    const windowHeight = window.innerHeight

    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('active')
    }
  }
})
