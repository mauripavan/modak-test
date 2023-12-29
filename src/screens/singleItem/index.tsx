import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {getSingleArtWork} from '../../utils/api';
import {IArtWorkProps} from '../home/types';
import Loading from '../../components/Loading';
import {LoadingSize} from '../../components/Loading/types';
import {images} from '../../../assets/images';
import {TextBold, TextSemiBold} from '../../components/Typography';
import Separator from '../../components/Separator';
import {
  ImageWrapper,
  Thumbnail,
  InfoContainer,
  InfoSubContainer,
  BackButton,
} from './styles';
import {icons} from '../../../assets/icons';
import RowInfoCard from '../../components/RowInfoCard';

const defaultArtWork: IArtWorkProps = {
  id: 0,
  title: '',
  artist_title: '',
  date_start: 0,
  date_end: 0,
  image_id: '',
  description: '',
  date_display: '',
  dimensions: '',
  medium_display: '',
  place_of_origin: '',
  credit_line: '',
};

const SingleItemScreen = () => {
  const route = useRoute();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {NoImage} = images;
  const {BackIcon} = icons;
  const {itemId, baseIIIF} = route.params as {itemId: number; baseIIIF: string};
  const [artWork, setArtWork] = useState<IArtWorkProps>(defaultArtWork);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    setLoading(true);
    getSingleArtWork({id: itemId}).then(response => {
      setArtWork(response.data);
      setImageUrl(
        `${baseIIIF}/${response.data.image_id}/full/843,/0/default.jpg`
      );
      setLoading(false);
    });
  }, []);

  const removePTags = (text: string | null) => {
    if (text === null) return;
    text = text.replace(/^<p>/, '');
    text = text.replace(/<\/p>$/, '');
    return text;
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  if (loading) {
    return <Loading size={LoadingSize.LARGE} color={colors.green[0]} />;
  }

  return (
    <>
      <BackButton onPress={handleBackPress}>
        <BackIcon width={20} height={20} fill={colors.white} />
      </BackButton>
      <ScrollView>
        <ImageWrapper>
          {artWork.image_id ? (
            <Thumbnail source={{uri: imageUrl}} />
          ) : (
            <Thumbnail source={NoImage} />
          )}
        </ImageWrapper>
        <Separator size={20} />
        <InfoContainer paddingBottom={tabBarHeight}>
          <InfoSubContainer>
            <TextBold color={colors.dark[0]} fontSize={22}>
              {artWork.title}
            </TextBold>
            <Separator size={5} />
            <TextSemiBold
              color={colors.gray[10]}
              fontSize={18}
              style={{textTransform: 'capitalize'}}>
              {artWork.date_display}
            </TextSemiBold>
            <Separator size={5} />
            <TextSemiBold color={colors.gray[10]} fontSize={16}>
              {artWork.artist_title}
            </TextSemiBold>
            <Separator size={10} />
            {artWork.description && (
              <TextSemiBold color={colors.dark[0]} fontSize={14}>
                {removePTags(artWork.description)}
              </TextSemiBold>
            )}
            <Separator size={10} />
            <RowInfoCard title='Place' description={artWork.place_of_origin} />
            <RowInfoCard title='Medium' description={artWork.medium_display} />
            <RowInfoCard title='Dimensions' description={artWork.dimensions} />
            <RowInfoCard
              title='Credit Line'
              description={artWork.credit_line}
            />
          </InfoSubContainer>
        </InfoContainer>
      </ScrollView>
    </>
  );
};

export default SingleItemScreen;
