import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet } from 'react-native';

const Actividad5 = () => {
    const [numeros, setNumeros] = useState([
        '', '', '', '', '', '', '', '', '', ''
    ]);
    const [resultados, setResultados] = useState({});

    const calcularResultados = () => {
        const numerosArray = numeros.map(numero => parseFloat(numero)).filter(num => !isNaN(num));
        if (numerosArray.length === 10) {
            const mayor = Math.max(...numerosArray);
            const menor = Math.min(...numerosArray);
            const suma = numerosArray.reduce((a, b) => a + b, 0);
            const promedio = suma / numerosArray.length;
            setResultados({
                mayor: `Número mayor: ${mayor}`,
                menor: `Número menor: ${menor}`,
                promedio: `Promedio: ${promedio.toFixed(2)}`
            });
        } else {
            setResultados({ error: 'Por favor, ingresa 10 números válidos.' });
        }
    };

    const handleChange = (index, value) => {
        const nuevosNumeros = [...numeros];
        nuevosNumeros[index] = value;
        setNumeros(nuevosNumeros);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Análisis de Números</Text>
            <Image
                source={{ uri: 'https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-data-analysis-cartoon-illustration-image_1430283.jpg' }}
                style={styles.image}
            />
            <ScrollView>
                {numeros.map((numero, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text>Número {index + 1}:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={numero}
                            onChangeText={text => handleChange(index, text)}
                        />
                    </View>
                ))}
                <Button title="Calcular resultados" onPress={calcularResultados} />
                {resultados.mayor && (
                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultText}>{resultados.mayor}</Text>
                        <Text style={styles.resultText}>{resultados.menor}</Text>
                        <Text style={styles.resultText}>{resultados.promedio}</Text>
                        {resultados.error && <Text style={styles.errorText}>{resultados.error}</Text>}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
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
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    resultsContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    resultText: {
        fontSize: 18,
        marginBottom: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        fontSize: 16,
    },
});

export default Actividad5;