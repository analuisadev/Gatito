import { Text, TouchableOpacity } from "react-native";

import functionDefaultStyles from './styles';

interface ButtonProps {
    small?: boolean;
    inverted?: boolean;
    value: string;
    action: () => void;
    styles?: any;
}

export default function Button({ small = false, inverted = false, value, action, styles }: ButtonProps) {
    const defaultStyles = functionDefaultStyles(small, inverted)

    return <TouchableOpacity onPress={action} style={[defaultStyles.buttonStyle, styles]}>
        <Text style={defaultStyles.value}>{value}</Text>
    </TouchableOpacity>
}