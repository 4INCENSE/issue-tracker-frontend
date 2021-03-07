import { SET_CHECKED_LIST } from '@/redux/Main/type/issueListType';

const addCheckedList = (payload) => (dispatch, getState) => {
  const addedCheckedList = addCheckedListToArray(getState, payload);
  dispatch(setCheckedList(addedCheckedList));
};

const addCheckedListToArray = (getState, payload) => {
  const { checkedList } = getState().checkboxReducer;
  checkedList.push(payload);
  const addedCheckedList = checkedList.sort();
  return addedCheckedList;
};

const deleteCheckedList = (payload) => (dispatch, getState) => {
  const deletedCheckedList = deleteCheckedListFromArray(getState, payload);
  dispatch(setCheckedList(deletedCheckedList));
};

const deleteCheckedListFromArray = (getState, payload) => {
  const { checkedList } = getState().checkboxReducer;
  const deletedCheckedList = checkedList.filter((element) => element !== payload);
  return deletedCheckedList;
};

const setCheckedList = (payload) => {
  return {
    type: SET_CHECKED_LIST,
    payload
  };
};

export { addCheckedList, deleteCheckedList };
