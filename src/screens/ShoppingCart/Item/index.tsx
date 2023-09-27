import React, { useState } from 'react'

import { Text, View } from "react-native";

import styles from './styles';

import EntireFile from "../../../components/EntireFile";
import Button from '../../../components/Button';

interface ItemProps {
    name: string;
    price: number;
    description: string;
    amount: number;
};

export default function Item({ name, price, description, amount: initialAmount }: ItemProps) {
    const [quantity, setQuantity] = useState<number>(initialAmount);
    const [total, setTotal] = useState<number>(price * initialAmount);

    const updateAmountAndTotal = (newAmount: any) => {
        setQuantity(newAmount);

        calculateTotal(newAmount)
    };

    const calculateTotal = (newAmount: any) => setTotal(newAmount * price);

    return (
        <>
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{
                    Intl.NumberFormat('pt-br', {
                        style: 'currency', currency: 'BRL'
                    }).format(price)
                }</Text>
            </View>

            <View style={styles.cart}>
                <View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Quantidade:</Text>
                        <EntireFile value={quantity} action={updateAmountAndTotal} styles={styles.amount} />
                    </View>

                    <View style={styles.value}>
                        <Text style={styles.description}>Total:</Text>
                        <Text style={styles.price}>{
                            Intl.NumberFormat('pt-br', {
                                style: 'currency', currency: 'BRL'
                            }).format(total)
                        }</Text>
                    </View>
                </View>
                <Button value="Remover do Carrinho" action={() => { alert('Obrigado pela compra! Estaremos realizando o seu serviço o mais breve possível :)'); }} />
            </View>
            <View style={styles.divider} />
        </>
    )
}