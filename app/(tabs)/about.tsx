import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";


function AboutPage() {

    const { t } = useTranslation();
    const GFA_LOGO = require("../../assets/images/GFA_Cover.png");
    const GFA_People = require("../../assets/images/GFA_About_People.jpg");

    return(
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>{t("screens.about.text.mainHeading")}</Text>
                <Image 
                    source={GFA_LOGO}
                    style={styles.image}
                />
                
                {/* Who We Are Section */}
                <View style={styles.container}>
                    <Text style={styles.subHeading}>{t("screens.about.text.subHeading1")}</Text>
                    <Text style={styles.text}>{t("screens.about.text.description1")}</Text>
                </View>

                {/* Our Vision */}
                <View style={styles.container}>
                    <Text style={styles.subHeading}>{t("screens.about.text.subHeading2")}</Text>
                    <Text style={styles.text}>{t("screens.about.text.description2")}</Text>
                </View>

                {/* Our Objectives */}
                <View style={styles.container}>
                    <Text style={styles.subHeading}>{t("screens.about.text.subHeading3")}</Text>
                    <Text style={styles.text}>{t("screens.about.text.description3")}</Text>
                </View>

                <Image 
                    source={GFA_People}
                    style={styles.footerImage}
                />
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
    },    
    image: {
        height: 200,
        width: 200,
        resizeMode: "contain",
    },
    footerImage: {
        height: 325,
        width: 325,
        resizeMode: "contain",
    },
    subHeading: {
        paddingTop: 20,
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        paddingHorizontal: 20,
    },
});

export default AboutPage;