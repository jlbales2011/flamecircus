videoIndex = 3;
videoPlayer1 = document.getElementById("video_player1");
videoPlayer2 = document.getElementById("video_player2");

videoPlayer1.addEventListener("ended", nextVideo, false);
videoPlayer2.addEventListener("ended", nextVideo, false);

currentPlayer = videoPlayer1;
hiddenPlayer = videoPlayer2;

videoPlayer1.play();

function nextVideo() {
  var nextVideo = "";
  if (videoIndex == 6) {
    videoIndex = 1;
  }
  nextVideo = "videos/video (" + videoIndex + ").mp4";

  videoIndex++;

  hiddenPlayer.play();
  hiddenPlayer.setAttribute("class", "");
  currentPlayer.setAttribute("class", "hidden");

  currentPlayer.src = nextVideo;

  temp = hiddenPlayer;
  hiddenPlayer = currentPlayer;
  currentPlayer = temp;
}
