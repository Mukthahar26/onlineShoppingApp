import {Dimensions, ToastAndroid} from 'react-native';
import Toast from 'react-native-simple-toast';

const {width, height} = Dimensions.get('window');

export const convertWidthPercentageToValue = (percent: number) => {
  return (width * percent) / 100;
};

export const convertHeightPercentageToValue = (percent: number) => {
  return (height * percent) / 100;
};

export const isArray = (arr: any) => Array.isArray(arr);

export const isUndefineOrNull = (data: any) => (data ? data : {});

export const getBase64WithUri = async (uri: string) => {
  const imageData = await fetch(uri);
  const blob = await imageData.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data: any = reader.result;
      const arr = base64data.split('base64,');
      resolve(arr[1]);
    };
  });
};

export const toastMessage = (text: string) =>
  Toast.showWithGravity(text, Toast.LONG, Toast.BOTTOM);

export const isFieldEmpty = (text: string | undefined) =>
  text && text.trim() ? text : false;
