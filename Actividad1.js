import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Actividad1 = () => {
  const [anioNacimiento, setAnioNacimiento] = useState('');
  const [edad, setEdad] = useState('');

  const calcularEdad = () => {
    const anioActual = new Date().getFullYear();
    const edadCalculada = anioActual - parseInt(anioNacimiento);
    if (!isNaN(edadCalculada) && edadCalculada >= 0) {
      setEdad(`Tu edad actual es: ${edadCalculada} años`);
    } else {
      setEdad('Por favor, ingresa un año de nacimiento válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcula tu Edad</Text>
      <Image
        source={{ uri: 'https://cdn-icons-png.freepik.com/512/3787/3787829.png' }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Año de Nacimiento (ej: 1990)"
        keyboardType="numeric"
        value={anioNacimiento}
        onChangeText={(text) => setAnioNacimiento(text)}
      />
      <Button title="Calcular Edad" onPress={calcularEdad} />
      {edad ? <Text style={styles.result}>{edad}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },
});

export default Actividad1;