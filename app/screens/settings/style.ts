import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: "0%"

    },
    headerTextContainer: {
        width: "80%", 
        // position: "absolute", 
        // top: "10%"
    },
    headerText: {
        fontSize: 36, 
        width: "100%"
    },
    inputsContainer: {
        width: "100%",
        alignItems: "center",
        paddingTop: "20%",
    },
    textInputContainer: {
        width: "80%", 
        justifyContent: "center", 
        alignItems: "center", 
        marginBottom: 20
    },
    textInput: {
        width: "100%", 
        height: 50, 
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#969696",
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    buttonContainer: {
        width: "80%", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 50
    },
    button: {
        width: "100%", 
        height: 50, 
        borderRadius: 25,
        backgroundColor: "#4f6de5",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    buttonText: {
        color: "#fff", 
        fontSize: 20
    }
});
