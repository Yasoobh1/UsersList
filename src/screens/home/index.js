import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { getUsersList } from '../../actions/userActions';

import styles from './styles';
import moment from 'moment';

function HomeScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch()
  const users = useSelector(state => state.userReducer.usersList);
  const [count, setCount] = useState(1)
  useEffect(() => {
    dispatch(
      getUsersList(1)
    )
  }, [])

  useEffect(() => {
    dispatch(
      getUsersList(count)
    )
  }, [count])

  return (
    <>
      <ScrollView
        onScrollEndDrag={() => {
          setCount(count + 1)
        }}>
        {users && users.map((item, index) => {
          let date = ""
          if (moment(item.registered.date).diff(moment()) === 0) {
            date = moment(item.registered.date).startOf('day').fromNow();
          } else {
            date = moment(item.registered.date).format('LL')
          }

          return (
            <TouchableOpacity key={index} style={styles.container} onPress={() => navigation.navigate('Detail Screen', {
              name: `${item.name.first} ${item.name.last}`, image: item.picture.large, email: item.email, DOB: item.dob, location: item.location, registered: item.registered
            })}>
              <View style={styles.cardStyle}>
                <Image
                  style={styles.avatar}
                  source={{ url: item.picture.medium }}
                />
                <View style={styles.infoContainer}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ width: "40%" }}>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text style={{ textAlign: 'right', width: '40%' }}>{date}</Text>
                  </View>
                  <Text>{item.email}</Text>
                  <Text>{`Country | ${item.location.country}`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
        )}
      </ScrollView>
    </>
  );
}

export default HomeScreen;