import React from 'react';
import {Image, ImageStyle, View} from 'react-native';

import {ImageIcon} from '../../../utilities/iconPaths';
import {isFieldEmpty} from '../../../utilities/utils';
import styles from './styles';

type Props = {
  uri: string;
  style?: ImageStyle;
};

const ImageViewer = ({uri, style}: Props) => {
  return isFieldEmpty(uri) ? (
    <Image source={{uri}} style={[styles.thumbnail, style]} />
  ) : (
    <View style={styles.imageIcon}>
      <ImageIcon />
    </View>
  );
};

export default ImageViewer;
