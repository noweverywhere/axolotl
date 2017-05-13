export const SPRITE_LOADING = 'SPRITE_LOADING'
export const SPRITE_LOADED = 'SPRITE_LOADED'

export const spriteLoading = (name) => {
  return {
    type: SPRITE_LOADING,
    name
  }
}

export const spriteLoaded = (name) => ({
  type: SPRITE_LOADED,
  name
})
