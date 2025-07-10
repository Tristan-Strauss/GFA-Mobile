import { Text, ScrollView, StyleSheet } from "react-native";
import AudioPlayer from "../../components/audioPlayer";

function PrincipalsPage() {

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
            <Text style={styles.heading}>Biblical Principals</Text>

            <AudioPlayer title="Teaching of the Apostles" audioSource={apostlesDoctrine}/>
            <AudioPlayer title="Repentance and Faith" audioSource={repentanceAndFaith}/>
            <AudioPlayer title="Baptism into Christ" audioSource={baptismIntoChrist}/>
            <AudioPlayer title="Baptism into Water" audioSource={baptismIntoWater}/>
            <AudioPlayer title="Baptism into the Holy Spirit" audioSource={baptismIntoHolySpirit}/>
            <AudioPlayer title="Baptism into the Sufferings of Christ" audioSource={baptismIntoSufferings}/>
            <AudioPlayer title="Laying on of Hands" audioSource={layingHands}/>
            <AudioPlayer title="Resurrection of the Dead" audioSource={resurrection}/>
            <AudioPlayer title="Eternal Judgements" audioSource={eternalJudgements}/>
            <AudioPlayer title="Going onto Perfection" audioSource={perfection}/>
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