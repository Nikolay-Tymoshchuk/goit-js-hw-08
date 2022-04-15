
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', (data) => localStorage.setItem("videoplayer-current-time", data.seconds));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));




