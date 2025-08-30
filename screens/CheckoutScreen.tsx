import { View, Text, Alert, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { PaymentDetails } from 'services/PaymentService';

export default function CheckoutScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = async () => {
    if (!cardNumber || !cardHolder || !expireDate || !cvv) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await PaymentDetails({
        cardNumber,
        cardHolder,
        expireDate,
        cvv,
        amount: 100.0,
      });
      Alert.alert('Payment Status', response.message);
    } catch (error) {
      Alert.alert('Payment Failed', 'An error occurred while processing payment.');
    }
  };

  return (

    <ImageBackground source={require('../assets/pexels-josh-hild-1270765-14391270.jpg')} resizeMode='cover' style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View className="w-full max-w-sm">
          {/* Title */}
          <Text className="mb-6 text-center text-5xl text-white/90 font-bold underline">Checkout</Text>

          {/* Card Number */}
          <Text className="mb-2 text-white/80">Card Number</Text>
          <TextInput
            className="mb-4 rounded-xl border border-gray-300 bg-white p-3"
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          {/* Cardholder Name */}
          <Text className="mb-2 text-white/80">Cardholder Name</Text>
          <TextInput
            className="mb-4 rounded-xl border border-gray-300 bg-white p-3"
            placeholder="John Doe"
            value={cardHolder}
            onChangeText={setCardHolder}
          />

          {/* Expiry & CVV Row */}
          <View className="flex-row gap-4">
            <View className="">
              <Text className="mb-2  text-white/80">Expiry Date</Text>
              <TextInput
                className="mb-4 rounded-xl border border-gray-300 bg-white p-3"
                placeholder="MM/YY"
                value={expireDate}
                onChangeText={setExpireDate}
              />
            </View>
            <View className="">
              <Text className="mb-2 text-white/80">CVV</Text>
              <TextInput
                className="mb-4 rounded-xl border w-12 border-gray-300 bg-white p-3"
                placeholder="•••"
                keyboardType="numeric"
                secureTextEntry
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          </View>

          {/* Pay Button */}
          <TouchableOpacity
            onPress={handlePayment}
            className="mt-6 w-full rounded-xl bg-indigo-600 py-4"
          >
            <Text className="text-center  text-lg font-semibold text-white">Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
