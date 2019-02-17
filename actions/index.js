const receiveEntries = entries => ({
  type: RECEIVE_ENTRIES,
  payload: entries
});

const addEntry = entry => ({
  type: ADD_ENTRY,
  payload: entry
});

export const ActionCreator = {
  receiveEntries,
  addEntry
};

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';
