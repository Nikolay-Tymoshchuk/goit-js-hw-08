import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle((data) => localStorage.setItem("videoplayer-current-time", data.seconds), 1000));

const localStorageVerification = () => !localStorage['videoplayer-current-time'] ? localStorage.setItem("videoplayer-current-time", 0) : null;
localStorageVerification();

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));




