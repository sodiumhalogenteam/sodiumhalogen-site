const addVideoAsk = () => {
  const scriptTag = document.createElement('script')
  scriptTag.id = 'videoask-script'
  scriptTag.innerHTML = `window.VIDEOASK_EMBED_CONFIG = {
    kind: "widget",
    url: "https://www.videoask.it/forjd64ic",
    options: {
      widgetType: "VideoThumbnailExtraLarge",
      text: "Talk to me",
      backgroundColor: "#4E2AB9",
      position: "bottom-right"
    }
   }`

  const scriptSrc = document.createElement('script')
  scriptSrc.id = 'videoask-script-src'
  scriptSrc.src = 'https://www.videoask.it/embed/embed.js'

  document.body.appendChild(scriptTag)
  document.body.appendChild(scriptSrc)
}

export default addVideoAsk
