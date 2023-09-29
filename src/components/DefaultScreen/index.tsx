import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";

import globalStyles, { colors } from "../../globalStyles";

import styles from "./styles";

export default function DefaultScreen({ children }: any) {
    return <>
        <SafeAreaView style={styles.screenAdjustment}>
            <StatusBar backgroundColor={colors.purple} />
            <KeyboardAvoidingView style={globalStyles.fill} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                {
                    children
                }
            </KeyboardAvoidingView>
        </SafeAreaView>

        <SafeAreaView style={styles.adjustScreenLow}/>
    </>
};