import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Text>This is a modal...</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
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
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ff',
    flex: 1,
    margin: 80,
    borderColor: '#000',
    borderWidth: 5
  },
  close: {
    padding: 80
  }
});
