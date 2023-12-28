import React from 'react';
import {useTheme} from 'styled-components';

import {TextMedium, TextRegular} from '../Typography';
import {IRowInfoCard} from './types';
import {MainContainer} from './styles';

const RowInfoCard = (props: IRowInfoCard) => {
  const {colors} = useTheme();
  const {description, title} = props;
  return (
    <MainContainer>
      <TextMedium fontSize={16} color={colors.dark[0]} style={{flex: 1}}>
        {title}
      </TextMedium>
      <TextRegular fontSize={16} color={colors.gray[10]} style={{flex: 3}}>
        {description ? description : 'No Information'}
      </TextRegular>
    </MainContainer>
  );
};

export default RowInfoCard;
