import { Text, ScrollView, StyleSheet } from "react-native";
import AudioPlayer from "../../components/audioPlayer";
import { useTranslation } from "react-i18next";

function PrincipalsPage() {

    const { t } = useTranslation();
    const apostlesDoctrine = require("../../assets/audio/Apostles-Doctrine-1.mp3");
    const repentanceAndFaith = require("../../assets/audio/Repentance-Faith.mp3")
    const baptismIntoChrist = require("../../assets/audio/Baptism-Christ.mp3")
    const baptismIntoWater = require("../../assets/audio/Baptism-Water.mp3")
    const baptismIntoHolySpirit = require("../../assets/audio/Baptism-Holy-Spirit.mp3")
    const baptismIntoSufferings = require("../../assets/audio/Baptism-Suffering.mp3")
    const layingHands = require("../../assets/audio/Laying-Hands.mp3")
    const resurrection = require("../../assets/audio/Resurrection.mp3")
    const eternalJudgements = require("../../assets/audio/Eternal-judgements.mp3")
    const perfection = require("../../assets/audio/Perfection.mp3")

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>{t("screens.principals.title")}</Text>

            <AudioPlayer title={t("screens.principals.text.apostlesDoctrine")} audioSource={apostlesDoctrine}/>
            <AudioPlayer title={t("screens.principals.text.repentanceAndFaith")} audioSource={repentanceAndFaith}/>
            <AudioPlayer title={t("screens.principals.text.baptismIntoChrist")} audioSource={baptismIntoChrist}/>
            <AudioPlayer title={t("screens.principals.text.baptismIntoWater")} audioSource={baptismIntoWater}/>
            <AudioPlayer title={t("screens.principals.text.baptismIntoHolySpirit")} audioSource={baptismIntoHolySpirit}/>
            <AudioPlayer title={t("screens.principals.text.baptismIntoSufferings")} audioSource={baptismIntoSufferings}/>
            <AudioPlayer title={t("screens.principals.text.layingHands")} audioSource={layingHands}/>
            <AudioPlayer title={t("screens.principals.text.resurrection")} audioSource={resurrection}/>
            <AudioPlayer title={t("screens.principals.text.eternalJudgements")} audioSource={eternalJudgements}/>
            <AudioPlayer title={t("screens.principals.text.perfection")} audioSource={perfection}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 20,
    },
})

export default PrincipalsPage;