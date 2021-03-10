const initialState = {
  checkedList: [],
  isAllChecked: false
};

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHECKED_LIST':
      return { ...state, checkedList: action.payload };
    case 'SET_IS_ALL_CHECKED':
      return { ...state, isAllChecked: action.payload };
    default:
      return state;
  }
};

export { checkboxReducer };
