/*AFRAME.registerComponent('play-video', {
  schema: {
    video: {type: 'string'},
    autoplay: {type: 'bool', default: true},
  },
  init() {
    const v = document.querySelector(this.data.video)
    const {el} = this
    let playing = false
    if (this.data.autoplay === true) {
      v.autoplay = true
      v.muted = true
      v.play()
    } else {
      // Add tap event listiner to play/pause
      el.addEventListener('click', () => {
        if (!playing) {
          v.play()
          playing = true
        } else {
          v.pause()
          playing = false
        }
      })
    }
  },
})
*/