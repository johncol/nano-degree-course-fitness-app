import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

import { PermissionStatus } from './../constants/PermissionStatus';

const NOTIFICATION_STORAGE_KEY = 'udacity-fitness-app';
const EIGHT_PM = 20;
const THIRTY_MINUTES = 30;

export const scheduleNextNotification = () => {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    if (PermissionStatus.isGranted(status)) {
      Notifications.cancelAllScheduledNotificationsAsync();
      scheduleNotificationForTomorrowNight();
      AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true));
    }
  });
};

export const scheduleNotificationIfThereIsNotOneYet = () => {
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      const thereIsNotAnyNotificationScheduled = data === null;
      if (thereIsNotAnyNotificationScheduled) {
        scheduleNextNotification();
      }
    });
};

export const cancelCurrentNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

const createNotification = () => ({
  title: 'Log your stats',
  body: 'Do not forget to log your stats for today!',
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
});

const scheduleNotificationForTomorrowNight = () => {
  const notification = createNotification();
  const tomorrowNight = getTomorrowNightDate();
  Notifications.scheduleLocalNotificationAsync(notification, {
    time: tomorrowNight,
    repeat: 'day'
  });
};

const getTomorrowNightDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(EIGHT_PM);
  date.setMinutes(THIRTY_MINUTES);
  return date;
};
