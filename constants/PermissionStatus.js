export const PermissionStatus = {
  GRANTED: 'granted',
  DENIED: 'denied',
  UNDETERMINED: 'undetermined',
  isGranted: status => status === PermissionStatus.GRANTED,
  isDenied: status => status === PermissionStatus.DENIED,
  isUndetermined: status => status === PermissionStatus.UNDETERMINED
};
