import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [anoNacimiento, setAnoNacimiento] = useState('');
  const [edad, setEdad] = useState('');

  const calcularEdad = () => {
    const fechaActual = new Date();
    const anoActual = fechaActual.getFullYear();
    const edadCalculada = anoActual - parseInt(anoNacimiento);
    setEdad(`Tu edad es: ${edadCalculada} años`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Ingresa tu año de nacimiento:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        value={anoNacimiento}
        onChangeText={(text) => setAnoNacimiento(text)}
      />
      <Button title="Calcular edad" onPress={calcularEdad} />
      <Text>{edad}</Text>
    </View>
  );
};
export default App;