<template>
    <div
        v-video-player:myVideoPlayer="playerOptions"
        class="video-player-box vjs-16-9 vjs-big-play-centered"
        :playsinline="playsinline">
    </div>
</template>
<script>
export default {
  props: [
    'video'
  ],
  data () {
    return {
      playsinline: true,
      playerOptions: {
        autoplay: true,
        loop: true,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        width: 440,
        sources: [{
          type: 'application/x-mpegURL',
          src: this.video,
          withCredentials: false
        }],
        controlBar: {
          volumePanel: {
            inline: false,
            vertical: true
          },
          timeDivider: false,
          durationDisplay: false
        },
        flash: {
          hls: {
            withCredentials: false
          }
        },
        html5: {
          hls: {
            withCredentials: false
          }
        }
      }
    }
  }
}
</script>
