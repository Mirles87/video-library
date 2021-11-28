class Video {
  video;
  constructor(videoElement) {
    this.video = videoElement;
  }

  playAndPause() {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  fullScreen() {
    this.video.requestFullscreen();
  }

  showControls() {}
}
