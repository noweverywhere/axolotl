import watch from 'redux-watch'
import {SPRITE_LOADED, SPRITE_LOADING} from '../actions/sprites'
import store from '../store'
const sprite = {}

const spriteChangeSubsciber = watch(store.getState, 'sprites')
store.subscribe(spriteChangeSubsciber ((newVal, oldVal, objectPath) => {
  debugger
  //console.log('%s changed from %s to %s', objectPath, oldVal.axolotl.status, newVal.axolotl.status)
}))

let loader = global.PIXI.loader
loader.add([
  { name: 'axolotl', url: './dist/axolotl_in_egg/New Piskel.json' }
])
loader.onLoad.add(
  function spriteOnLoad (loader, resource) {
    store.dispatch({
      type: SPRITE_LOADED,
      name: 'axolotl',
      resource
    })
  }
)
loader.onError.add(function onError () { console.log('onError', arguments) })
loader.onComplete.add(function onComplete () { console.log('onComplete', arguments) })
loader.load()
store.dispatch(
  {
    type: SPRITE_LOADING,
    name: 'axolotl'
  }
)

export default sprite
