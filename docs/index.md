---
comments: true
---

# Welcome to indexdog's blog

**记录学习历程......**

<div id="aplayer"></div>


# 音乐播放器

<div id="app">
  <a-player :audio="audio" :lrc-type="3"></a-player>
</div>

<!-- 你必须在引入 vue-aplayer 之前引入 vue -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/@moefe/vue-aplayer"></script>
<script>
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
</script>
