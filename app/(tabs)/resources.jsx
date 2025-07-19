import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import LanguageDropdownSelector from "../../components/languageDropdownSelector";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

const COTR_BOOK = require('../../assets/images/COTR_Cover.png');

function resources() {

    const [selectedLanguage, setSelectedLanguage] = useState(null);


    function handleLanguageChange(value) {
        setSelectedLanguage(value);
    }


    const handleDownload = async () => {
        if (!selectedLanguage) {
            alert("Please select a language to download the book in.");
            return;
        }
        const filename = `COTR-${selectedLanguage}.docx`;
        const downloadUrl = getDownloadUrlForLanguage(selectedLanguage);
        const localUri = FileSystem.documentDirectory + filename;
        try {
            const { uri } = await FileSystem.downloadAsync(downloadUrl, localUri);
            console.log("Downloaded to:", uri);
            await saveFileToStorage(uri, filename, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        } catch (error) {
            console.log("Download failed:", error);
            alert("Failed to download file.");
        }
    };


    const saveFileToStorage = async (uri, filename, mimeType) => {
        if (Platform.OS === "android") {
            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
            if (!permissions.granted || !permissions.directoryUri) {
                console.log("Permission not granted. Using share fallback.");
                return shareAsync(uri);
            }
            try {
                const base64 = await FileSystem.readAsStringAsync(uri, {
                    encoding: FileSystem.EncodingType.Base64,
                });
                const destUri = await FileSystem.StorageAccessFramework.createFileAsync(
                    permissions.directoryUri,
                    filename,
                    mimeType
                );
                await FileSystem.writeAsStringAsync(destUri, base64, {
                    encoding: FileSystem.EncodingType.Base64,
                });
                alert("File saved successfully!");
            } catch (e) {
                console.log("Error saving file:", e);
                alert("Failed to save file.");
            }
        } else {
            // iOS or fallback
            shareAsync(uri);
        }
    };
    

    const getDownloadUrlForLanguage = (language) => {
        let baseUrl = "https://gospelfor.africa/wp-content/uploads"
        switch (language) {
            case "eng":
                return baseUrl + "/2025/01/Church-on-the-Rock-English.docx"
            case "fre":
                return  baseUrl + "/2025/01/Church-on-the-Rock-French.docx";
            case "swa":
                return  baseUrl + "/2025/01/Church-on-the-Rock-Swahili-1.docx";
            case "por":
                return  baseUrl + "/2025/01/Church-on-the-Rock-Portuguese-2.docx";
            case "ara":
                return  baseUrl + "/2025/02/Church-on-the-Rock-Arabic.docx";
            case "che":
                return  baseUrl + "/2025/03/Church-on-the-Rock-Chichewa.docx";
            case "zul":
                return  baseUrl + "/2024/10/Church-on-the-Rock-Zulu.docx";
            default:
                console.log("No language selected. Defaulting to English.");
                return baseUrl + "/2025/01/Church-on-the-Rock-English.docx";
        }
  }


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Resources</Text>
            <Image 
                source={COTR_BOOK}
                style={styles.image}
            />
            <Text style={styles.text}>Select a language to download in</Text>
            <LanguageDropdownSelector callback={(value) => handleLanguageChange(value)}/>
            <TouchableOpacity style={styles.button} onPress={handleDownload}>
                <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 400,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
    }, button: {
        marginTop: 20,
        width: 200,
        height: 50,
        backgroundColor: '#007BFF',
        color: 'white',
        borderRadius: 5,
    },
    downloadText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 50,
        marginBottom: 10,
    }
})


export default resources;