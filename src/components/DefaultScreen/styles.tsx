import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export default StyleSheet.create({
    screenAdjustment: {
        flex: 1,
        backgroundColor: colors.purple,
    },
    adjustScreenLow: {
        flex: 0,
        backgroundColor: colors.orange
    }
});