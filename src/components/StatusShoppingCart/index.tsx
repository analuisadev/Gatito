import { Text, View } from "react-native";

import styles from "./styles";
import Button from "../Button";

interface StatusShoppingCartProps {
    total: number;
}

export default function StatusShoppingCart({ total }: StatusShoppingCartProps) {
    return <View style={styles.content}>
        <View style={styles.total}>
            <Text style={styles.description}>Total do Carrinho: </Text>
            <Text style={styles.value}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
            </Text>
        </View>
        <View style={styles.buttonStyle}>
            <Button value="Concluir Pedido" inverted />
        </View>
    </View>
}