import React from 'react';
import {useTheme} from 'styled-components';

import Separator from '../Separator';
import {TextBold, TextMedium, TextSemiBold} from '../Typography';
import {images} from '../../../assets/images';
import {IMainCardProps} from './types';
import {FavButton, ImageWrapper, MainWrapper, Thumbnail} from './styles';
import {icons} from '../../../assets/icons';

const MainCard = (props: IMainCardProps) => {
  const {imageUrl, index, item, onPress} = props;
  const {colors} = useTheme();
  const {NoImage} = images;
  const {FavIcon} = icons;

  const dateToShow = ({
    startDate,
    endDate,
  }: {
    startDate: number;
    endDate: number;
  }) => {
    if (startDate === endDate) return endDate;
    else {
      const date = `${startDate} to ${endDate}`;
      return date;
    }
  };

  return (
    <MainWrapper key={`aw-${index}`} onPress={onPress}>
      <ImageWrapper>
        {item.image_id ? (
          <Thumbnail source={{uri: imageUrl}} />
        ) : (
          <Thumbnail source={NoImage} />
        )}
        <FavButton>
          <FavIcon width={20} height={20} fill={colors.white} />
        </FavButton>
      </ImageWrapper>
      <Separator size={10} />
      <TextBold fontSize={18} style={{textTransform: 'capitalize'}}>
        {item.title}
      </TextBold>
      <Separator size={5} />
      <TextSemiBold fontSize={16}>{item.artist_title}</TextSemiBold>
      <Separator size={5} />
      <TextMedium color={colors.dark[0]}>
        {dateToShow({startDate: item.date_start, endDate: item.date_end})}
      </TextMedium>
    </MainWrapper>
  );
};
export default MainCard;
