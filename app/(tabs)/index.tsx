import { Image, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

function index() {

    const { t } = useTranslation();
    const GFA_Image = require("../../assets/images/GFA_Cover.png")

    return (
        <View style={styles.container}>
            <Image source={GFA_Image} style={styles.image} />
            <Text style={styles.heading}>Gospel For Africa</Text>
            <Text style={styles.text}>{t("screens.index.text.text")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: "contain",
    },
    heading: {
    fontSize: 40,
    fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: "center",
    },
})

export default index;