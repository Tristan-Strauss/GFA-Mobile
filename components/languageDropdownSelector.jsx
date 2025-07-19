import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

const LanguageDropdownSelector = ({callback}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'English', value: 'eng' },
        { label: 'French', value: 'fre' },
        { label: "Swahili", value: 'swa' },
        { label: 'Portuguese', value: 'por' },
        { label: "Arabic", value: 'ara' },
        { label: "Chechewa", value: 'che' },
        { label: "Zulu", value: 'zul' },
    ]);


    return(
        <View style={styles.container}>
            <DropDownPicker
                placeholder="Select a language"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={(value) => {callback(value)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdown: {
        width: 300,
        height: 40,
    }
});

export default LanguageDropdownSelector;