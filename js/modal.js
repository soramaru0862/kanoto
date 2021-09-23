'use strict'

const modal = document.getElementById('modal')
const modalShow = document.querySelectorAll('.item')
const close = document.getElementById('modal_close')
const modalBackground = document.getElementById('modal_background')

modalShow.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('is-show')
    modal.classList.add('is-show')
    modalBackground.classList.add('is-show')
  })
})

close.addEventListener('click', () => {
  modalShow.forEach(item => {
    item.classList.remove('is-show')
  })
  modal.classList.remove('is-show')
  modalBackground.classList.remove('is-show')
})

modalBackground.addEventListener('click', () => {
  modalShow.forEach(item => {
    item.classList.remove('is-show')
  })
  modal.classList.remove('is-show')
  modalBackground.classList.remove('is-show')

})
