function register(ev) {
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value

  if (passwordConfirmation === password) {
    alert('Usuario ' + username + ' registrado')
  } else {
    alert('As senhas nao conferem')
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
  button.removeEventListener('click', register)
  alert('evento removido')
}

button.addEventListener('mouseover', ev => {
  console.log('TEST')
})
