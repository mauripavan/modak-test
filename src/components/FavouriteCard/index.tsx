import React from 'react';

import {colors} from '../../theme/colors';
import {dateToShow} from '../../utils/functions';
import {TextBlack, TextBold, TextMedium} from '../Typography';
import {images} from '../../../assets/images';
import {IFavouriteCardProps} from './types';
import {DataContainer, MainContainer, Thumbnail} from './styles';

const FavouriteCard = (props: IFavouriteCardProps) => {
  const {item, index, imageUrl, onPress} = props;
  const {NoImage} = images;

  return (
    <MainContainer key={`fav-${index}`} onPress={onPress}>
      {item.image_id ? (
        <Thumbnail source={{uri: imageUrl}} />
      ) : (
        <Thumbnail source={NoImage} />
      )}
      <DataContainer>
        <TextBlack fontSize={20} color={colors.dark[0]}>
          {item.title}
        </TextBlack>
        <TextBold fontSize={18} color={colors.gray[10]}>
          {item.artist_title}
        </TextBold>
        <TextMedium fontSize={16} color={colors.gray[10]}>
          {dateToShow({startDate: item.date_start, endDate: item.date_end})}
        </TextMedium>
      </DataContainer>
    </MainContainer>
  );
};

export default FavouriteCard;
