import { AsyncStorage } from 'react-native';
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from './calendar';

export const sumbitEntry = (key, entry) => {
  const newEntry = JSON.stringify({
    [key]: entry
  });
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, newEntry);
};

export const removeEntry = key => {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(storageItem => {
    const data = JSON.parse(storageItem);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
};

export const fetchCalendarResults = () => {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(formatCalendarResults);
};
