function addPlayer() {
  const number = document.getElementById('number').value
  const name = document.getElementById('name').value
  const position = document.getElementById('position').value

  const confirmation = confirm(
    'Escalar ' + name + ' como ' + position + ' com a camisa ' + number + '? '
  )
  if (confirmation) {
    const teamList = document.getElementById('team-list')
    const playerItem = document.createElement('li')
    playerItem.id = number
    playerItem.innerText = position + ': ' + name + '(' + number + ')'
    teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById(number)

  const confirmation = confirm(
    'Remover o jogador ' + playerToRemove.innerText + '?'
  )

  if (confirmation) {
    document.getElementById('team-list').removeChild(playerToRemove)
    document.getElementById('numberToRemove').value = ''
  }
}


