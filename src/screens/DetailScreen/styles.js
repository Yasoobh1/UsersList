import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        width: '90%', paddingLeft: '10%'
    },

    imageView: {
        alignItems: 'center'
    },
    badge: {
        position: 'absolute',
        top: '70%',
        right: -10,
        width: 40,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB9C44'
    },
    badgetext: {
        color: '#fff', fontWeight: 'bold'
    },
    image: {
        height: 300, width: '60%'
    },

    detailView: {
        paddingTop: 10
    },
    seperator: {
        borderTopColor: 'black', borderTopWidth: 1
    },

    locationView: {
        paddingTop: 10, paddingBottom: 10
    }

})

export default styles;