import {APP_LOADED} from '../actions/app'

const initialState = {
  assetsLoaded: false
}

const actions = {
  [APP_LOADED]: (state, action) => {
    return {
      ...state,
      assetsLoaded: true
    }
  }
}

export default function AppReducer (state = initialState, action) {
  return actions[action.type] ? actions[action.type](state, action) : state
}
