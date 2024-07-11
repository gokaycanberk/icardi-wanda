document.addEventListener("DOMContentLoaded", function () {
  var music = document.getElementById("backgroundMusic");
  var redirectButton = document.getElementById("redirectButton");
  var unmuteButton = document.getElementById("unmuteButton");
  var isPlaying = false; // Müzik çalıp çalmadığını kontrol etmek için

  // Müzik oynatma veya durdurma
  function toggleMusic() {
    if (music.paused || music.ended) {
      music
        .play()
        .then(() => {
          console.log("Audio başarıyla oynatılıyor.");
          unmuteButton.textContent = "BOŞVER!"; // Buton metnini güncelle
          isPlaying = true;
        })
        .catch((error) => {
          console.error("Audio oynatılamadı:", error);
        });
    } else {
      music.pause();
      unmuteButton.textContent = "SAÇMALAMA, TESELLİ ET"; // Buton metnini güncelle
      isPlaying = false;
    }
  }

  // Müzik oynatma/durdurma butonu
  unmuteButton.addEventListener("click", toggleMusic);

  // Yönlendirme butonu
  redirectButton.addEventListener("click", function () {
    window.location.href = "https://bit.ly/96tr";
  });
});
