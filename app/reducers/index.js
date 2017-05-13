import { combineReducers } from 'redux'
import AppReducer from './app-reducer'
import SpritesReducer from './sprites-reducer'

export default combineReducers({
  app: AppReducer,
  sprites: SpritesReducer
})
