import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 70, borderBottomColor: 'black', borderBottomWidth: 1
    },

    cardStyle: {
        flex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 10, width: '100%'
    },

    avatar: {
        height: "100%", width: 60
    },

    infoContainer: {
        paddingLeft: 10,
        width: '100%'
    }

})

export default styles;