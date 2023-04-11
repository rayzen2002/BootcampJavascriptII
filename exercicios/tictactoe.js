const slots = [0, 0, 0, 0, 0, 0, 0, 0, 0]
round = 0
const currentPlayer = document.getElementById('current-player')
const slot = document.querySelectorAll('.gameButton')
const resetButton = document.getElementById('reset')
var playerId = ''

function game() {
  const playerA = prompt('Digite o nome do jogador 1(O): ')
  const playerB = prompt('Digite o nome do jogador 2(X): ')
  currentPlayer.textContent = 'Turno do jogador: ' + playerA
  document.querySelectorAll('.gameButton').forEach(gameButton => {
    gameButton.addEventListener('click', ev => {
      if (slots[ev.target.id - 1] === 0) {
        if (round % 2 === 0) {
          playerId = playerA
          currentPlayer.textContent = 'Turno do jogador: ' + playerB
          gameButton.innerText = 'O'
          ev.target.value = 1
          slots[ev.target.id - 1] = ev.target.value
          round += 1
          gameEnd()
          draw()
        } else if (round % 2 === 1) {
          playerId = playerB
          currentPlayer.textContent = 'Turno do jogador: ' + playerA
          gameButton.innerText = 'X'
          ev.target.value = 2
          slots[ev.target.id - 1] = ev.target.value
          round += 1

          gameEnd()
          draw()
        }
      }
    })
  })
}
function disable() {
  for (const button of slot) {
    button.disabled = true
  }
  currentPlayer.innerText = 'Fim de jogo'
  setTimeout(() => {
    alert('Jogador(a) : ' + playerId + ' venceu a partida').delay(5000)
  }, 1000)
}

function draw() {
  if (!slots.includes(0)) {
    setTimeout(() => {
      alert('EMPATE')
    }, 1000)
  }
}

function gameEnd() {
  if (
    (slots[0] == 1 && slots[1] == 1 && slots[2] == 1) ||
    (slots[0] == 2 && slots[1] == 2 && slots[2] == 2)
  ) {
    slot[0].classList.add('win')
    slot[1].classList.add('win')
    slot[2].classList.add('win')

    disable()
    return 1
  }

  if (
    (slots[3] == 1 && slots[4] == 1 && slots[5] == 1) ||
    (slots[3] == 2 && slots[4] == 2 && slots[5] == 2)
  ) {
    console.log('fim de jogo')
    slot[3].classList.add('win')
    slot[4].classList.add('win')
    slot[5].classList.add('win')
    disable()
  }
  if (
    (slots[6] == 1 && slots[7] == 1 && slots[8] == 1) ||
    (slots[6] == 2 && slots[7] == 2 && slots[8] == 2)
  ) {
    console.log('fim de jogo')
    slot[6].classList.add('win')
    slot[7].classList.add('win')
    slot[8].classList.add('win')
    disable()
  }
  if (
    (slots[1] == 1 && slots[4] == 1 && slots[7] == 1) ||
    (slots[1] == 2 && slots[4] == 2 && slots[7] == 2)
  ) {
    console.log('fim de jogo')
    slot[1].classList.add('win')
    slot[4].classList.add('win')
    slot[7].classList.add('win')
    disable()
  }
  if (
    (slots[2] == 1 && slots[5] == 1 && slots[8] == 1) ||
    (slots[2] == 2 && slots[5] == 2 && slots[8] == 2)
  ) {
    console.log('fim de jogo')
    slot[2].classList.add('win')
    slot[5].classList.add('win')
    slot[8].classList.add('win')
    disable()
  }
  if (
    (slots[0] == 1 && slots[4] == 1 && slots[8] == 1) ||
    (slots[0] == 2 && slots[4] == 2 && slots[8] == 2)
  ) {
    console.log('fim de jogo')
    slot[0].classList.add('win')
    slot[4].classList.add('win')
    slot[8].classList.add('win')
    disable()
  }
  if (
    (slots[0] == 1 && slots[3] == 1 && slots[6] == 1) ||
    (slots[0] == 2 && slots[3] == 2 && slots[6] == 2)
  ) {
    console.log('fim de jogo')
    slot[0].classList.add('win')
    slot[3].classList.add('win')
    slot[6].classList.add('win')
    disable()
  }

  if (
    (slots[2] == 1 && slots[4] == 1 && slots[6] == 1) ||
    (slots[2] == 2 && slots[4] == 2 && slots[6] == 2)
  ) {
    console.log('fim de jogo')
    slot[2].classList.add('win')
    slot[4].classList.add('win')
    slot[6].classList.add('win')
    disable()
  }
}
function reset() {
  resetButton.addEventListener('click', () => {
    location.reload()
  })
}

draw()
game()
reset()
