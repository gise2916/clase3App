import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Actividad1 from './Actividad1';
import Actividad2 from './Actividad2';
import Actividad3 from './Actividad3';
import Actividad4 from './Actividad4';
import Actividad5 from './Actividad5';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      (<Actividad1 />)
      (<Actividad2 />)
      (<Actividad3 />)
      (<Actividad4 />)
      (<Actividad5 />)

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  }
});

export default App;