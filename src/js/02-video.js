import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(playbackTime, 1000));

function playbackTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

const getItemFromLocalStorage = localStorage.getItem(
  'videoplayer-current-time'
);

player.setCurrentTime(getItemFromLocalStorage);
