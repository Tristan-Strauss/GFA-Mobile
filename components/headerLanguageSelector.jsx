import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useTranslation } from 'react-i18next';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
  { label: 'Swahili', value: 'sw' },
  { label: 'Português', value: 'pt' },
  { label: 'العربية', value: 'ar' },
  { label: 'Chichewa', value: 'ny' },
  { label: 'Zulu', value: 'zu' },
];

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => {
          if (value) {
            i18n.changeLanguage(value);
          }
        }}
        placeholder={{ label: t("common.change_language"), value: null }}
        items={languages}
        value={i18n.language}
        style={{
          inputIOS: { fontSize: 16, padding: 5, color: 'black', writingDirection: "ltr", textAlign: "left" },
          inputAndroid: { fontSize: 16, padding: 5, color: 'black', writingDirection: "ltr", textAlign: "left" },
          iconContainer: { top: 10, right: 12, writingDirection: "ltr", textAlign: "left" },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    width: 150,
  },
});
