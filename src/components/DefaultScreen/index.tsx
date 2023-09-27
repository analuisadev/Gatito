import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";

import styles from "../../styles";

export default function DefaultScreen({ children }: any) {
    return <SafeAreaView style={styles.fill}>
        <StatusBar />
        <KeyboardAvoidingView style={styles.fill} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            {
                children
            }
        </KeyboardAvoidingView>
    </SafeAreaView>
};