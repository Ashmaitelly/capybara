import React from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native';

const MyModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: any;
}) => {
  return (
    <Modal
      visible={modalVisible}
      transparent
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{ width: 200, height: 200 }}
            resizeMode="stretch"
            source={require('../assets/capybara.jpg')}
          ></Image>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#0f0',
    alignContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#000',
  },
});

export default MyModal;
