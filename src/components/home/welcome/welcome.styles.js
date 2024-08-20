
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeText: (color) => ({
        color: color,
        marginLeft: 20
    }),

    searchContainer: (color) => ({
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: color,
        borderRadius: 20,  
        margin: 10
    }),
    searchIcon: {
        marginHorizontal: 10,
        marginTop: 10
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: 'red',
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center', // Vertical Center.
        // alignItems: 'center',  Horizontal Center.
    },
    searchInput: {
        width: '100',
        height: '100',
        paddingHorizontal: 10
    },
    searchBtn: {
        width: 50,
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});

export default styles;