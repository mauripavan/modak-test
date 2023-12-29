import React from 'react';

import {colors} from '../../theme/colors';
import {TextBlack, TextRegular} from '../Typography';
import {MainContainer} from './styles';

export interface IEmptyComponentProps {
  title: string;
  subtitle: string;
}

const EmptyComponent = (props: IEmptyComponentProps) => {
  const {subtitle, title} = props;
  return (
    <MainContainer>
      <TextBlack fontSize={40} color={colors.dark[0]}>
        {title}
      </TextBlack>
      <TextRegular style={{textAlign: 'center'}}>{subtitle}</TextRegular>
    </MainContainer>
  );
};

export default EmptyComponent;
