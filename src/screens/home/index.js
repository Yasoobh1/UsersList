import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text } from 'react-native';
import {
  getUsersList,
} from '../../actions/userActions';

function HomeScreen() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.usersList);

  useEffect(() => {
    dispatch(
      getUsersList()
    )
  }, [])

  return (
    <>
      {users && users.map((item) =>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{item.name.first}</Text>
        </View>
      )}
    </>
  );
}

export default HomeScreen;