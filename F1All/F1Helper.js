class Helper {
  static getWebSocketURL () {
    return 'wss://frame-server-x8qw.onrender.com'
  }

  static getBaseURL () {
    return 'https://frame-server-x8qw.onrender.com'
  }

  static getURLs (cache = true) { // ./cache.txt vs /cache.txt
    const baseURL = this.getBaseURL()
    return {
      articles: cache ? ('/cache.txt') : (baseURL + '/articles/get'),
      users: (baseURL + '/users/get')
    }
  }

  static async fetchJSON (url, options = {}, onsuccess = Helper.onSuccessDefault, onfailure = Helper.onFailureDefault) {
    const finalOptions = {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      ...options
    }
    try {
      const response = await fetch(url, finalOptions)
      if (!response.ok) throw new Error(`HTTP error with status: ${response.status}`)
      const json = await response.json()
      onsuccess(json)
    } catch (error) {
      onfailure(error)
    }
  }

  static onFailureDefault (error) {
    console.logD('DEBUG: Helper: fetch error: ', 'red')
    console.log(error)
  }

  static onSuccessDefault (json) {
  }
}
export default Helper

/*
Remove the ability to pass in custom error handling to make simpler.  Funnel all errors to one point to simplify futher.
Consider using for ServerPing to make code DRY.

File contains idiom for fetch - check for status 200 - 299 using response.ok
Update to include error handling for JSON
Look into cache and usefulness of it.  Document in comments.
Simplify this file

*/
