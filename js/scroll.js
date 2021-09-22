'use strict'
// スクロールで文字色変更
window.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  const logo = document.querySelector('.header_logo')
  const main = document.getElementById('start')
  let clientRectMain = main.getBoundingClientRect()
  let clientRectHeader = header.getBoundingClientRect()
  let height = clientRectMain.top
  let scroll = clientRectHeader.top + 150

  if (scroll > height) {
    header.classList.add('color-change')
    logo.classList.add('white')
  } else {
    header.classList.remove('color-change')
    logo.classList.remove('white')
  }
})
