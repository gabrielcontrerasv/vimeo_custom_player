const url = "https://vimeo.com/manage/videos/848233830";
const regex = /\/(\d+)\/?$/;
const idVideo = (url.match(regex) || [])[1];
console.log(parseInt(idVideo));
const options = {
  id: 847730519,
  width: 640,
  height: 360,
  controls: true,
};

const player = new Vimeo.Player("vimeoPlayer", options);

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const speedSelect = document.getElementById("speedSelect");

// Evento para reproducir el video
playButton.addEventListener("click", () => {
  player.play();
});

// Evento para pausar el video
pauseButton.addEventListener("click", () => {
  player.pause();
});

// Evento para cambiar la velocidad de reproducción
speedSelect.addEventListener("change", () => {
  const selectedSpeed = speedSelect.value;
  player.setPlaybackRate(selectedSpeed);
});

// Evento para verificar el 10% del video y habilitar los controles
player.on("timeupdate", function (event) {
  player.getDuration().then((duration) => {
    player.getCurrentTime().then((currentTime) => {
      const tenPercent = duration * 0.1;
      if (currentTime >= tenPercent && currentTime < tenPercent + 1) {
        document.querySelector(".controls").style.display = "none";
        console.log(player)
        player(options.controls = false);
        
      }
    });
  });
});
