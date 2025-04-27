import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet } from 'react-native';

const Actividad3 = () => {
  const [estudiantes, setEstudiantes] = useState([
    { nombre: '', bd: '', estadistica: '', informatica: '' },
    { nombre: '', bd: '', estadistica: '', informatica: '' },
    { nombre: '', bd: '', estadistica: '', informatica: '' },
    { nombre: '', bd: '', estadistica: '', informatica: '' },
    { nombre: '', bd: '', estadistica: '', informatica: '' },
  ]);
  const [resultados, setResultados] = useState({});

  const calcularResultados = () => {
    let sumaInformatica = 0;
    let aprobadosBD = 0;
    let notaMasAltaEstadistica = -Infinity;
    let notaMasBajaInformatica = Infinity;
    let estudianteNotaMasBajaInformatica = '';

    estudiantes.forEach((estudiante) => {
      sumaInformatica += parseFloat(estudiante.informatica) || 0;
      if (parseFloat(estudiante.bd) >= 3) {
        aprobadosBD++;
      }
      if (parseFloat(estudiante.estadistica) > notaMasAltaEstadistica) {
        notaMasAltaEstadistica = parseFloat(estudiante.estadistica) || -Infinity;
      }
      if (parseFloat(estudiante.informatica) < notaMasBajaInformatica) {
        notaMasBajaInformatica = parseFloat(estudiante.informatica) || Infinity;
        estudianteNotaMasBajaInformatica = estudiante.nombre;
      }
    });

    const promedioInformatica = estudiantes.length > 0 ? (sumaInformatica / estudiantes.length).toFixed(2) : 'N/A';

    setResultados({
      promedioInformatica: `Promedio de Informática: ${promedioInformatica}`,
      aprobadosBD: `Cantidad de estudiantes aprobados en Bases de Datos: ${aprobadosBD}`,
      notaMasAltaEstadistica: `Nota más alta en Estadística: ${notaMasAltaEstadistica === -Infinity ? 'N/A' : notaMasAltaEstadistica}`,
      notaMasBajaInformatica: `Nota más baja en Informática: ${notaMasBajaInformatica === Infinity ? 'N/A' : notaMasBajaInformatica} (Estudiante: ${estudianteNotaMasBajaInformatica || 'N/A'})`,
    });
  };

  const handleChange = (index, campo, value) => {
    const nuevosEstudiantes = [...estudiantes];
    nuevosEstudiantes[index][campo] = value;
    setEstudiantes(nuevosEstudiantes);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Análisis de Notas</Text>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/1d/5c/23/1d5c23cbf38782f037d36608dfd2b519.jpg' }}
        style={styles.image}
      />
      {estudiantes.map((estudiante, index) => (
        <View key={index} style={styles.studentInput}>
          <Text>Estudiante {index + 1}</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={estudiante.nombre}
            onChangeText={(text) => handleChange(index, 'nombre', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nota BD"
            keyboardType="numeric"
            value={estudiante.bd}
            onChangeText={(text) => handleChange(index, 'bd', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nota Estadística"
            keyboardType="numeric"
            value={estudiante.estadistica}
            onChangeText={(text) => handleChange(index, 'estadistica', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nota Informática"
            keyboardType="numeric"
            value={estudiante.informatica}
            onChangeText={(text) => handleChange(index, 'informatica', text)}
          />
        </View>
      ))}
      <Button title="Calcular resultados" onPress={calcularResultados} />
      {resultados.promedioInformatica && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultTitle}>Resultados:</Text>
          <Text>{resultados.promedioInformatica}</Text>
          <Text>{resultados.aprobadosBD}</Text>
          <Text>{resultados.notaMasAltaEstadistica}</Text>
          <Text>{resultados.notaMasBajaInformatica}</Text>
        </View>
      )}
    </ScrollView>
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
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  studentInput: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  resultsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Actividad3;