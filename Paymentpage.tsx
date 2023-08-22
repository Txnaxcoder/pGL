import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './App'; 
import { StackNavigationProp } from '@react-navigation/stack';

type PaymentPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Paymentpage'>;
};

const Paymentpage: React.FC<PaymentPageProps> = ({ navigation }) => {
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePaymentSubmit = () => {
        // Handle payment processing here
        console.log('Payment data submitted');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Page</Text>
            <TextInput
                placeholder="Cardholder Name"
                value={cardholderName}
                onChangeText={setCardholderName}
                style={styles.input}
            />
            <TextInput
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={setCardNumber}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Expiry Date (MM/YY)"
                value={expiryDate}
                onChangeText={setExpiryDate}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                style={styles.input}
                keyboardType="numeric"
                secureTextEntry
            />
            <Button title="Submit Payment" onPress={handlePaymentSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});

export default Paymentpage;
