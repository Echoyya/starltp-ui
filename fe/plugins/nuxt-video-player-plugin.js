import Vue from 'vue'
import videojs from 'video.js'

const VueVideoPlayer = require('vue-video-player/dist/ssr')

window.videojs = videojs
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

Vue.use(VueVideoPlayer)
