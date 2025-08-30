import { View, Text, Alert } from 'react-native'
import React from 'react'

type PaymentDetails = {
  cardNumber: string;
  cardHolder: string;
  expireDate: string;
  cvv: string;
  amount: number;
}

type PaymentResponse = {
  success: boolean;
  message: string;
}

export const PaymentDetails = async (details: PaymentDetails) => {
    console.log('Processing payment with details:', details);

    return new Promise<PaymentResponse>((resolve) => {
        setTimeout(() => {
            if (details.cardNumber.startsWith('4')) {
                resolve({ success: true, message: 'Payment processed successfully!' });
            } else {
                resolve({ success: false, message: 'Invalid card number. Visa cards only.' });
            }
        }, 1000);
    });
}