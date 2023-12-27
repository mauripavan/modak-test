import React from 'react';
import {Text} from 'react-native';
import {useTheme} from 'styled-components';

import {StyledView} from './styles';

const HomeScreen = () => {
  const {fonts} = useTheme();
  return (
    <StyledView>
      <Text style={{fontFamily: fonts.semibold}}>
        React Navigation initial config
      </Text>
    </StyledView>
  );
};

export default HomeScreen;
