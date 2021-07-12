const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke2)

// generateJoke1() // FUNCION CON SINTAXIS .THEN
generateJoke2() // FUNCION CON SINTAXIS ASYNC


// OPCION 1 PARA ESCRIBIR FUNCION
function generateJoke1() {
  fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
      jokeEl.innerHTML = data.joke
    })
}

// OPCION 2 PARA ESCRIBIR FUNCION ASYNC/AWAIT
async function generateJoke2() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com/', config)
  const data = await res.json()

  jokeEl.innerHTML = data.joke
}