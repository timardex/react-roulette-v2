const SOUND_TOGGLE = (state) => {
  return {
    ...state,
    enableSounds: !state.enableSounds,
  };
};

export default SOUND_TOGGLE;