const initialState = {
  checkedList: [],
  isAllChecked: false
};

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHECKED_LIST':
      return { ...state, checkedList: action.payload };
    // case '':
    //   return { ...state, isAllChecked: true };
    default:
      return state;
  }
};

export { checkboxReducer };
