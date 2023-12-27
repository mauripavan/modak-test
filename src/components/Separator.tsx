import React from 'react';
import {View} from 'react-native';

import {pixelSizeVertical} from '../utils/metrics';

interface ISeparator {
  size: number;
}
const Separator = (props: ISeparator) => (
  <View style={{height: pixelSizeVertical(props.size)}} />
);

export default Separator;
