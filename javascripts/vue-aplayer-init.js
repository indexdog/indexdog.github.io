Vue.use(VueAPlayer, {
    defaultCover: 'https://github.com/u3u.png',
    productionTip: true,
  });
  
  new Vue({
    el: '#app',
    data: {
      audio: {
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300',
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      },
    },
  });
  