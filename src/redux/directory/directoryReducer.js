import SECTIONS_DATA from './SectionData';

const INITIAL_STATE = {
  sections: SECTIONS_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
