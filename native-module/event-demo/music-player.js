const events = require('events');

class MusicPlayer extends events.EventEmitter {
  constructor() {
    super();
    this.playing = false;
  }
}

// 观察者模式

const musicPlayer = new MusicPlayer();
musicPlayer.setMaxListeners(0);

musicPlayer.on('play', function() {
  musicPlayer.playing = true;
});

musicPlayer.on('stop', function() {
  musicPlayer.playing = false;
  console.log('stop play');
});

musicPlayer.once('play', function() {
  console.log('begin play');
});

musicPlayer.on('play', function(pamar) {
  console.log('play in', pamar);
});

musicPlayer.on('error', error => {
  console.error('监听error', error);
});

musicPlayer.emit('play', '青花瓷');
setTimeout(() => {
  musicPlayer.emit('stop');
  setTimeout(() => {
    musicPlayer.emit('play', '彩虹');
  }, 1000);
}, 2000);
