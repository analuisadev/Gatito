import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from "react-native";

import styles from './styles';

import EntireFile from "../../../components/EntireFile";
import Button from '../../../components/Button';

interface ItemProps {
    name: string;
    price: number;
    description: string;
};

export default function Item({ name, price, description }: ItemProps) {
    const [quantity, setQuantity] = useState<number>(1);
    const [total, setTotal] = useState<number>(price);
    
    const [expand, setExpand] = useState<boolean>(false);

    const updateAmountAndTotal = (newAmount: number) => {
        setQuantity(newAmount);

        calculateTotal(newAmount)
    };

    const calculateTotal = (newAmount: number) => setTotal(newAmount * price);

    const invertExpand = () => {
        setExpand(!expand);

        updateAmountAndTotal(1);
    }

    return (
        <>
            <TouchableOpacity style={styles.info} onPress={invertExpand}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{
                    Intl.NumberFormat('pt-br', {
                        style: 'currency', currency: 'BRL'
                    }).format(price)
                }</Text>
            </TouchableOpacity>

            {expand && <View style={styles.cart}>
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
                <Button value="Adicionar ao Carrinho" action={() => { alert('Obrigado pela compra! Estaremos realizando o seu serviço o mais breve possível :)'); }} />
            </View>
            }
            <View style={styles.divider} />
        </>
    )
}