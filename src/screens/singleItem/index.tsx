import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {TextSemiBold} from '../../components/Typography';

const SingleItemScreen = () => {
  const route = useRoute();
  const {itemId} = route.params as {itemId: number};

  useEffect(() => {
    console.log('itemId', itemId);
  }, [itemId]);

  return (
    <View>
      <TextSemiBold>Single Item</TextSemiBold>
    </View>
  );
};

export default SingleItemScreen;
