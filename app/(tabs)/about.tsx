import { View, ScrollView, Text, StyleSheet, Image } from "react-native";


function AboutPage() {

    const GFA_LOGO = require("../../assets/images/GFA_Cover.png");
    const GFA_People = require("../../assets/images/GFA_About_People.jpg");

    return(
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>About</Text>
                <Image 
                    source={GFA_LOGO}
                    style={styles.image}
                />
                
                {/* Who We Are Section */}
                <View style={styles.container}>
                    <Text style={styles.subHeading}>Who We Are</Text>
                    <Text style={styles.text}>We are a Network of Churches (NOT a denomination), functioning in relationship (NOT by organisational structure). Connected in our hearts (NOT by constitution), focused on building the Church of Jesus Christ; building ONLY on the foundation of Jesus Christ, following the teachings of the Apostles.</Text>
                </View>

                {/* Our Vision */}
                <View style={styles.container}>
                    <Text style={styles.subHeading}>Our Vision</Text>
                    <Text style={styles.text}>We as a network of Churches in sincere relationship with one another are building the Church of Jesus Christ on the African continent in accordance with the Apostolic foundation.</Text>
                </View>

                {/* Our Objectives */}
                <View style={styles.container}>
                    <Text style={styles.subHeading}>Our Objectives</Text>
                    <Text style={styles.text}>Network with like minded Churches. Build relationships leading to unity in the Spirit and the Faith. Ensure the Church remains the \"ground and pillar\" of truth. Clearly present the Apostolic vision. Develop Godly character in Church members. Train, develop, equip and send native missionaries. Build Apostolic teams in each nation, region and continent.</Text>
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