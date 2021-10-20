const soundToggle = () => {
  return async function(dispatch) {
    try {
      const action = {
        type: 'SOUND_TOGGLE'
      };

      dispatch(action);
    } catch(error) {
      console.log(error);
    }
  };
};

export default soundToggle;
