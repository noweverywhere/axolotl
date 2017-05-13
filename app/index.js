import 'pixi.js'
import store from './store'
import { APP_LOADED } from './actions/app'
import './lib/animatedSprite'

const options = {
  width: 400,
  height: 400,
  additionalOptions: {
    backgroundColor: 0xff99bb
  }
}
let app = new global.PIXI.Application(
  options.width,
  options.height,
  options.additionalOptions
)

document.body.appendChild(app.view)

store.dispatch({type: APP_LOADED})
