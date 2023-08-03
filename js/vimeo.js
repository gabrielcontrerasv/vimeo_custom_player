function loadPlayer(url){
  const regex = /(?:webex|vimeo).*\/(\d+)\/?$/;
  const matchResult = url.match(regex);
  
  if (matchResult) {
    const idVideo = matchResult[1];
    if (url.includes("webex")) {
      webexePlayer(parseInt(idVideo))
    } else if (url.includes("vimeo")) {
      initializeVimeoPlayer(parseInt(idVideo))
    }
  }
}

function initializeVimeoPlayer(idVideo) {
  
  const options = {
    id: idVideo, 
    width: 640,
    height: 360,
    controls: true,
  };
  
  const player = new Vimeo.Player("Player", options);
  player.on("timeupdate", function (event) {
    player.getDuration().then((duration) => {
      player.getCurrentTime().then((currentTime) => {
        const expectedPercentage = Math.round(duration * 0.75); 
        const userTime = Math.round(currentTime); 
  
        if (userTime === expectedPercentage) {
          console.log(player);
          player.pause();
        }
      });
    });
  });
}

function  webexePlayer(idVideo) {
  console.log("webexePlayer" + idVideo);
  document.getElementById("Player").style.display = "none";
}

//loadPlayer("https://webex.com/847730519")
loadPlayer("https://vimeo.com/manage/videos/847730519");