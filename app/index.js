import 'pixi.js'
import store from './store'
import { APP_LOADED } from './actions/app'

let app = new global.PIXI.Application(400, 400, {backgroundColor: 0xff99bb})
document.body.appendChild(app.view)

store.dispatch({type: APP_LOADED})
