import {SPRITE_LOADED, SPRITE_LOADING} from '../actions/sprites'
import {resourceTypes} from '../lib/loader'

const initialState = {}

const actions = {
  [SPRITE_LOADING]: (state, action) => {
    return {
      ...state,
      [action.name]: {
        status: 'loading'
      }
    }
  },
  [SPRITE_LOADED]: (state, action) => {
    const {resource} = action
    const isImage = resourceTypes.IMAGE === resource.type
    return {
      ...state,
      [action.name]: {
        status: isImage ? 'loaded' : 'loading'
      }
    }
  }
}

export default function SpritesReducer (state = initialState, action) {
  return actions[action.type] ? actions[action.type](state, action) : state
}
