import { FlatList } from "react-native";

import Item from "./Item";
import DefaultScreen from "../../components/DefaultScreen";
import StatusShoppingCart from "../../components/StatusShoppingCart";

import styles from "../../styles";

const listServices = [
    {
        id: 1,
        name: "Banho",
        price: 79.9,
        description: "NÃO DE MANHO NO SEU GATO! Mas se precisar, nós damos.",
        amount: 1
    },

    {
        id: 2,
        name: "Vacina V4",
        price: 89.9,
        description: "Uma dose da vacina V4. Seu gato precisa de duas.",
        amount: 2
    },

    {
        id: 3,
        name: "Vacina Antirrábica",
        price: 99.9,
        description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
        amount: 1
    }
];

export default function ShoppingCart() {
    const total = listServices.reduce((sum, { price, amount }) => sum + (price * amount), 0);

    return (
        <DefaultScreen style={styles.fill}>
            <StatusShoppingCart total={total} />
            <FlatList
                data={listServices}
                removeClippedSubviews={false}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </DefaultScreen>
    );
}