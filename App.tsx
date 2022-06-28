import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import MyModal from './components/MyModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text>Press for a random image of a capybara</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: 250,
    height: 50,
    backgroundColor: '#0f0',
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
