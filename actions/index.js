const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
const ADD_ENTRY = 'ADD_ENTRY';

const receiveEntries = entries => ({
  type: RECEIVE_ENTRIES,
  payload: entries
});

const addEntry = entry => ({
  type: ADD_ENTRY,
  payload: entry
});

export const ActionType = {
  RECEIVE_ENTRIES,
  ADD_ENTRY
};

export const ActionCreator = {
  receiveEntries,
  addEntry
};
