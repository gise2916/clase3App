import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Actividad4 = () => {
    const [edad, setEdad] = useState('');
    const [rangoEdad, setRangoEdad] = useState('');

    const clasificarEdad = () => {
        const edadNumerica = parseInt(edad);
        if (isNaN(edadNumerica) || edadNumerica < 0 || edadNumerica > 120) {
            setRangoEdad('Error: Edad inválida.');
        } else if (edadNumerica >= 0 && edadNumerica <= 11) {
            setRangoEdad('Niñez');
        } else if (edadNumerica >= 12 && edadNumerica <= 17) {
            setRangoEdad('Adolescencia');
        } else if (edadNumerica >= 18 && edadNumerica <= 59) {
            setRangoEdad('Adultez');
        } else if (edadNumerica >= 60) {
            setRangoEdad('Vejez');
        }
        if (edadNumerica === 18) {
            setRangoEdad(prev => `${prev}\n¡Tienes exactamente 18!`);
        }
        if (edadNumerica === 60) {
            setRangoEdad(prev => `${prev}\n¡Tienes exactamente 60!`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clasificador de Edades</Text>
            <Image
                source={{ uri: 'https://img.freepik.com/vector-gratis/coleccion-hombres-blancos-edades-diferentes_23-2147863309.jpg' }}
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu edad"
                keyboardType="numeric"
                value={edad}
                onChangeText={(text) => setEdad(text)}
            />
            <Button title="Clasificar Edad" onPress={clasificarEdad} />
            {rangoEdad ? <Text style={styles.result}>Rango de edad: {rangoEdad}</Text> : null}
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
        marginBottom: 10,
        resizeMode: 'contain',
    },
});

export default Actividad4;