'use strict'
const pageTopBtn = document.getElementById('page_top')
pageTopBtn.addEventListener('click', function foo () {
  const nowY = window.pageYOffset
  window.scrollTo(0, Math.floor(nowY * 0.8))
  if (nowY > 0) {
    window.setTimeout(foo, 10)
  }
})

const pageTopShow = document.querySelector('.page_top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    pageTopShow.classList.add('show')
  } else {
    pageTopShow.classList.remove('show')
  }
})
