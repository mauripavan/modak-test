import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';

import Separator from '../Separator';
import {TextBold, TextMedium, TextSemiBold} from '../Typography';
import {images} from '../../../assets/images';
import {IMainCardProps} from './types';
import {FavButton, ImageWrapper, MainWrapper, Thumbnail} from './styles';
import {icons} from '../../../assets/icons';
import {dateToShow, getArray} from '../../utils/functions';

const MainCard = (props: IMainCardProps) => {
  const {imageUrl, item, onPress, onFavouritePress} = props;
  const {colors} = useTheme();
  const {NoImage} = images;
  const {FavIcon} = icons;
  const [favourites, setFavourites] = useState(false);

  useEffect(() => {
    getArray('favourites').then(response => {
      const isFav = response?.includes(item.id);
      if (isFav) {
        setFavourites(true);
      }
    });
  }, []);

  const handleFavouritePress = () => {
    setFavourites(!favourites);
    onFavouritePress();
  };

  return (
    <MainWrapper onPress={onPress}>
      <ImageWrapper>
        {item.image_id ? (
          <Thumbnail source={{uri: imageUrl}} />
        ) : (
          <Thumbnail source={NoImage} />
        )}
        <FavButton onPress={handleFavouritePress}>
          <FavIcon
            width={20}
            height={20}
            fill={favourites ? colors.red[20] : 'transparent'}
            stroke={favourites ? colors.red[20] : colors.white}
            strokeWidth={2}
          />
        </FavButton>
      </ImageWrapper>
      <Separator size={10} />
      <TextBold fontSize={18} style={{textTransform: 'capitalize'}}>
        {item.title}
      </TextBold>
      <Separator size={5} />
      <TextSemiBold fontSize={16}>{item.artist_title}</TextSemiBold>
      <Separator size={5} />
      <TextMedium color={colors.dark[0]} fontSize={16}>
        {dateToShow({startDate: item.date_start, endDate: item.date_end})}
      </TextMedium>
    </MainWrapper>
  );
};
export default MainCard;
