function playSound() {
  const audio = document.getElementById('audio');
  audio.currentTime = 0; // reinicia desde el inicio
  audio.play();
}

async function getRandomDog() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    // Cambia la imagen del contenedor
    document.getElementById('dog-img').src = data.message;
    document.getElementById('location-info').textContent = 'Perrito!';
    // Reproduce sonido
    playSound();
  } catch (err) {
    document.getElementById('location-info').textContent = 'Error al cargar perrito';
  }
}

// Auto-actualiza cada 2 segundos
setInterval(getRandomDog, 2000);

// Primera llamada al cargar
getRandomDog();
