import React from 'react';
import {View, Modal, ScrollView} from 'react-native';
import AppButton from '../AppButton';
import styles from './styles';

type props = {
  visible: boolean;
  onClose: any;
  children: any;
  headerView?: any;
  bottomView?: any;
  ContainerStyle?: any;
};

const AppModal = ({
  visible,
  onClose,
  children,
  headerView = <></>,
  bottomView = <></>,
  ContainerStyle,
}: props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <AppButton onPress={onClose} style={styles.container}>
        <View style={[styles.popup, ContainerStyle]}>
          {headerView}
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">
            <AppButton>{children}</AppButton>
          </ScrollView>
          {bottomView}
        </View>
      </AppButton>
    </Modal>
  );
};

export default AppModal;
