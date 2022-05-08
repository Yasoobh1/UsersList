import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

function DetailScreen(props) {
    const { name, image, email, DOB, location, registered } = props.route.params;
    const { city, state, country, postcode } = location;

    const dob = new Date(DOB.date)
    const joinedDate = new Date(registered.date)

    useEffect(() => {
        props.navigation.setOptions({
            title: name,
        });
    }, [props.navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    <Image resizeMode='contain' style={styles.image} source={{ url: image }} />
                    <View style={styles.badge}>
                        <Text style={styles.badgetext}>24</Text>
                    </View>
                </View>
            </View>
            <View style={styles.seperator} />

            <View style={styles.detailView}>
                <Text>{`Email: ${email}`}</Text>
                <Text>{`Date Joined: ${joinedDate.getDate()} ${joinedDate.toLocaleString('default', { month: 'short' })}  ${joinedDate.getFullYear()}`}</Text>
                <Text>{`DOB: ${dob.getDate()} ${dob.toLocaleString('default', { month: 'short' })}  ${dob.getFullYear()} `}</Text>
            </View>

            <View style={styles.locationView}>
                <Text style={{ fontWeight: '600' }}>Location</Text>
            </View>
            <View style={styles.seperator} />

            <View style={styles.detailView}>
                <Text>{`city: ${city}`}</Text>
                <Text>{`state: ${state}`}</Text>
                <Text>{`country: ${country} `}</Text>
                <Text>{`postCode: ${postcode}`}</Text>
            </View>
        </View>
    );
}

DetailScreen.propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    DOB: PropTypes.shape({
        date: PropTypes.string,
    }),
    registered: PropTypes.shape({
        date: PropTypes.string,
    }),
};

DetailScreen.defaultProps = {
    email: '',
    name: '',
    image: ''
}

DetailScreen['navigationOptions'] = screenProps => ({
    title: 'Home'
})

export default DetailScreen;