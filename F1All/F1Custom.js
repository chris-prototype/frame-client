import config from './config_all.js'

const Custom = {
  init () {
    console.logD('DEBUG: L2 : F1-Custom', '#34A853')
    this.setFavicon()
    this.setBackground()
    this.setTitle()
    return this
  },
  setFavicon () {
    const existing = document.querySelector("link[rel='shortcut icon']")
    if (existing) existing.remove()
    const link = document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = config.favicon + '?favicon_dynamic=true'
    document.head.appendChild(link)
  },
  // moving to CSS
  setBackground () {
    // document.body.style.backgroundImage = `url(${config.background})`
  },
  setTitle () {
    document.title = config.title
  }
}

export default Custom.init()
