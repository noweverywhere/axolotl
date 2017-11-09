import {SPRITE_LOADED, SPRITE_LOADING} from '../actions/sprites'
import {resourceTypes} from '../lib/loader'

const initialState = {}

function buildPixiAnimatedSprite(resource) {
  debugger
  var frames = [];

    for (var i = 0; i < 30; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    var anim = new PIXI.extras.AnimatedSprite(frames);

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.x = app.renderer.width / 2;
    anim.y = app.renderer.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();
}

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
    if (isImage) {debugger; buildPixiAnimatedSprite(resource)} else {debugger}
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
