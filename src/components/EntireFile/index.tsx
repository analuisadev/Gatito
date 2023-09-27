import { TextInput } from "react-native";

import defaultStyles from './styles'

export default function EntireFile({ value, styles, action }: any) {
    const update = (newValue, returnAction) => {
        const checkInteger = newValue.match(/^[0-9]*$/);

        if(!checkInteger) return;

        const removeZeroFromTheLeft = newValue.replace(/^(0)(.+)/, '$2');

        returnAction(removeZeroFromTheLeft);
    };

    const numberToText = String(value);

    return <TextInput
        style={[defaultStyles.field, styles]}
        keyboardType="number-pad"
        selectTextOnFocus
        onChangeText={(newValue) => { update(newValue, action) }}
        value={numberToText}
    />
}