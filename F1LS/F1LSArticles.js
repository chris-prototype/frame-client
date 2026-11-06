import { LS } from './F1LS'
const KEY = 'cache'

/* START
*/

export function getCache () {
  const test = LS.get(KEY) 
  return test
}

export function saveCache (articles) {
  LS.set(KEY, articles)
}
