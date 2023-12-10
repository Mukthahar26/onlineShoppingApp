import Toast from 'react-native-simple-toast';

export const toastMessage = (text: string) =>
  Toast.showWithGravity(text, Toast.LONG, Toast.BOTTOM);

export const isArray = (arr: any) => Array.isArray(arr);

/**  It will return false if field is empty of empty string.
Because, if it returns empty string then App crash because it can render empty string. */

export const isFieldEmpty = (text: string | undefined) =>
  text && text.trim() ? text : false;
