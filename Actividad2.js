import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Actividad2 = () => {
    const [precio, setPrecio] = useState('');
    const [colorEtiqueta, setColorEtiqueta] = useState('Blanca');
    const [precioFinal, setPrecioFinal] = useState('');

    const calcularDescuento = () => {
        const precioNumerico = parseFloat(precio);
        if (!isNaN(precioNumerico)) {
            let descuento = 0;
            switch (colorEtiqueta) {
                case 'Roja':
                    descuento = 0.40;
                    break;
                case 'Naranja':
                    descuento = 0.30;
                    break;
                case 'Blanca':
                    descuento = 0.15;
                    break;
                case 'Negra':
                    descuento = 0;
                    break;
                default:
                    descuento = 0;
            }
            const precioConDescuento = precioNumerico * (1 - descuento);
            setPrecioFinal(`Precio final: $${precioConDescuento.toFixed(2)}`);
        } else {
            setPrecioFinal('Por favor, ingresa un precio válido.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calcula el Descuento</Text>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3884/3884365.png' }}
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio del producto"
                keyboardType="numeric"
                value={precio}
                onChangeText={(text) => setPrecio(text)}
            />
            <Text style={styles.label}>Selecciona el color de la etiqueta:</Text>
            <Picker
                selectedValue={colorEtiqueta}
                onValueChange={(itemValue) => setColorEtiqueta(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Roja" value="Roja" />
                <Picker.Item label="Naranja" value="Naranja" />
                <Picker.Item label="Blanca" value="Blanca" />
                <Picker.Item label="Negra" value="Negra" />
            </Picker>
            <Button title="Calcular Descuento" onPress={calcularDescuento} />
            {precioFinal ? <Text style={styles.result}>{precioFinal}</Text> : null}
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
    label: {
        marginBottom: 5,
    },
    picker: {
        height: 50,
        marginBottom: 10,
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

export default Actividad2;