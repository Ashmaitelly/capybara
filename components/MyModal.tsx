import React, { useEffect, useState } from 'react';
import { Modal, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const MyModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
}) => {
  //image uri state
  const [img, setImg] = useState<string>('');
  //get random image
  useEffect(() => {
    if (!modalVisible) {
      axios
        .get('https://api.animality.xyz/img/capybara')
        .then((res) => {
          setImg(res.data.link);
        })
        .catch((err) => console.log(err));
    }
  }, [modalVisible]);

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainter}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{
              uri: img,
            }}
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
  imageContainter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 450,
    height: 350,
  },
});

export default MyModal;
