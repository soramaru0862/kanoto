'use strict'

const modal = document.getElementById('modal')
const modalShow = document.querySelectorAll('.item')
const modalItem = document.querySelectorAll('.item_img')
const close = document.getElementById('modal_close')
const modalBackground = document.getElementById('modal_background')

for (let i = 0; i < 9; i++) {
  modalShow[i].addEventListener('click', () => {
    modalItem[i].classList.add('is-show')
    modal.classList.add('is-show')
    modalBackground.classList.add('is-show')
  })
}

close.addEventListener('click', () => {
  modalItem.forEach(item => {
    item.classList.remove('is-show')
  })
  modal.classList.remove('is-show')
  modalBackground.classList.remove('is-show')
})

modalBackground.addEventListener('click', () => {
  modalItem.forEach(item => {
    item.classList.remove('is-show')
  })
  modal.classList.remove('is-show')
  modalBackground.classList.remove('is-show')
})
