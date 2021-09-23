'use strict'
// スクロールで文字色変更
window.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  const logo = document.querySelector('.header_logo')
  const main = document.getElementById('start')
  const button = document.querySelector('.zdo_drawer_button')
  const bar = document.querySelectorAll('.zdo_drawer_bar')
  let clientRectMain = main.getBoundingClientRect()
  let clientRectHeader = header.getBoundingClientRect()
  let height = clientRectMain.top
  let scroll = clientRectHeader.top + 150

  if (scroll > height) {
    header.classList.add('color-change')
    button.classList.add('color-change')
    logo.classList.add('white')
    bar.forEach(item => {
      item.classList.add('color-change')
    })
  } else {
    header.classList.remove('color-change')
    button.classList.remove('color-change')
    logo.classList.remove('white')
    bar.forEach(item => {
      item.classList.remove('color-change')
    })
  }
})
