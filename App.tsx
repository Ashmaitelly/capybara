import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';
import MyModal from './components/MyModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Display Capybara Image</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: 300,
    height: 100,
    backgroundColor: '#0f0',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  buttonText: { fontSize: 16, fontWeight: 'bold' },
  image: {
    width: 200,
    height: 200,
  },
  background: { flex: 1, width: 400, height: 400 },
});
