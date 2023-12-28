import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

import {LoadingContainer} from './styles';
import {ILoadingProps} from './types';

const Loading = (props: ILoadingProps) => {
  const {color, size} = props;
  const {colors} = useTheme();
  return (
    <LoadingContainer>
      <ActivityIndicator
        size={size ? size : 'small'}
        color={color ? color : colors.black}
      />
    </LoadingContainer>
  );
};

export default Loading;
