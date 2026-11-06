(() => {
  if (window.__keyPressListenerAttached) {
    console.error('F1KeyPress: singlton attempted to run more than once')
    return
  } else {
    window.__keyPressListenerAttached = true
  }

  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      const key = e.key.toLowerCase()
      if (key === '1') {
        console.log('Control + 1 pressed - Articles')
        e.preventDefault()
      } else if (key === '2') {
        console.log('Control + 2 pressed - Account')
        e.preventDefault()
      } else if (key === '3') {
        console.log('Control + 3 pressed - Finance')
        e.preventDefault()
      } else if (key === '4') {
        console.log('Control + 4 pressed - Domains')
        e.preventDefault()
      } else if (key === '5') {
        console.log('Control + 5 pressed - Station')
        e.preventDefault()
      }
    }
  })

})()
