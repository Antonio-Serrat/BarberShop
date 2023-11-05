
// Elements
const form = document.getElementById('appointment_form')
const menu = document.getElementsByClassName('menu')
const btn_menu = document.getElementById('btn_menu')
const menu_items = document.getElementsByClassName('menu_item')
const btn_open = document.getElementsByClassName('btn_container_open')
const btn_close = document.getElementsByClassName('btn_container_close')


// Display Actions
btn_menu.addEventListener('click', openMenu)
form.addEventListener('submit', onSubmit)
Array.from(menu_items).forEach(e => {
  e.addEventListener('click', closeMenu)
});

// Actions
function onSubmit(e) {
  e.preventDefault()
  alert('Estamos aun en desarrollo, Pronto podras reservar tu turno desde aqui!')
}

function openMenu() {
  menu[0].classList.toggle('open')
  btn_close[0].classList.toggle('show')
  btn_open[0].classList.toggle('hidde')
}

function closeMenu() {
  menu[0].classList.remove('open')
  btn_close[0].classList.toggle('show')
  btn_open[0].classList.toggle('hidde')
}