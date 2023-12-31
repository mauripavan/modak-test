import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useTheme} from 'styled-components';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import {useRecoilState} from 'recoil';
import {Pressable} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import Separator from '../Separator';
import {TextBold, TextMedium, TextSemiBold} from '../Typography';
import {images} from '../../../assets/images';
import {IMainCardProps} from './types';
import {MainWrapper, Thumbnail} from './styles';
import {icons} from '../../../assets/icons';
import {
  dateToShow,
  getArray,
  updateArrayWithDoubleTap,
} from '../../utils/functions';
import {favouritesState} from '../../store/app-state';

const MainCard = (props: IMainCardProps) => {
  const {imageUrl, item, onPress, onFavouritePress} = props;
  const {colors} = useTheme();
  const {NoImage, Heart} = images;
  const {FavIcon} = icons;
  const [favourites, setFavourites] = useState(false);
  const [, setGlobalFav] = useRecoilState(favouritesState);
  const isFocus = useIsFocused();

  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

  const updateLikedState = () => {
    getArray('favourites').then(response => {
      const isFav = response?.includes(item.id);
      if (isFav) {
        setFavourites(true);
      } else {
        setFavourites(false);
      }
    });
  };

  useEffect(() => {
    updateLikedState();
  }, [isFocus]);

  const handleFavouritePress = () => {
    setFavourites(!favourites);
    onFavouritePress();
  };

  const onDoubleTab = useCallback(() => {
    setFavourites(!favourites);
    updateArrayWithDoubleTap('favourites', item.id);
    setGlobalFav(prev => {
      if (!prev.includes(item.id)) {
        return [...prev, item.id];
      } else {
        return [...prev];
      }
    });
    scale.value = withSpring(1, undefined, () => {
      scale.value = withDelay(500, withSpring(0));
    });
  }, []);

  return (
    <MainWrapper>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onPress}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          onActivated={onDoubleTab}
          numberOfTaps={2}>
          <Animated.View>
            <Thumbnail source={!item.image_id ? NoImage : {uri: imageUrl}}>
              <Animated.Image
                source={Heart}
                style={[
                  {
                    width: '100%',
                    height: '100%',
                    shadowOffset: {width: 0, height: 20},
                    shadowOpacity: 0.3,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode='center'
              />
            </Thumbnail>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
      <Separator size={10} />
      <Pressable onPress={onPress}>
        <FavIcon
          width={25}
          height={25}
          fill={favourites ? colors.red[20] : 'transparent'}
          stroke={favourites ? colors.red[20] : colors.black}
          strokeWidth={2}
          onPress={handleFavouritePress}
        />
        <Separator size={5} />
        <TextBold fontSize={18} style={{textTransform: 'capitalize'}}>
          {item.title}
        </TextBold>
        <Separator size={5} />
        <TextSemiBold fontSize={16}>{item.artist_title}</TextSemiBold>
        <Separator size={5} />
        <TextMedium color={colors.dark[0]} fontSize={16}>
          {dateToShow({startDate: item.date_start, endDate: item.date_end})}
        </TextMedium>
      </Pressable>
    </MainWrapper>
  );
};
export default MainCard;
