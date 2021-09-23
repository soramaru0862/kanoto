'use strict'

const hamburger = document.getElementById('js-hamburger')
const blackBg = document.getElementById('js-hamburger-black-bg')
const navItem = document.querySelectorAll('.header_nav-item')
const nav = document.querySelector('.header_nav')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  blackBg.classList.toggle('active')
  nav.classList.toggle('active')
})

blackBg.addEventListener('click', () => {
  hamburger.classList.remove('active')
  blackBg.classList.remove('active')
  nav.classList.remove('active')
})

navItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active')
    blackBg.classList.remove('active')
    nav.classList.remove('active')
  })
})
