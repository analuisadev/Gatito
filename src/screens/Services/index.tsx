import { FlatList } from "react-native";

import Item from "./Item";

const listServices = [
    {
        id: 1,
        name: "Banho",
        price: 79.9,
        description: "NÃO DE MANHO NO SEU GATO! Mas se precisar, nós damos."
    },

    {
        id: 2,
        name: "Vacina V4",
        price: 89.9,
        description: "Uma dose da vacina V4. Seu gato precisa de duas."
    },

    {
        id: 3,
        name: "Vacina Antirrábica",
        price: 99.9,
        description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    }
];

export default function Services() {
    return (
        <>
            <FlatList
                data={listServices}
                removeClippedSubviews={false}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </>
    );
}