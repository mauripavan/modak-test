import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getFavouritesArtWorks} from '../../utils/api';
import {favouritesState} from '../../store/app-state';
import {IArtWorkProps} from '../home/types';
import Separator from '../../components/Separator';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/metrics';
import Loading from '../../components/Loading';
import {LoadingSize} from '../../components/Loading/types';
import FavouriteCard from '../../components/FavouriteCard';


const FavouritesScreen = () => {
  const {colors} = useTheme();
  const [favIds] = useRecoilState(favouritesState);
  const [baseIIIF, setBaseIIF] = useState('');
  const [favourite, setFavourites] = useState<Array<IArtWorkProps>>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setLoading(true);
    const favs = favIds.join(',');

    if (!favs) {
      setLoading(false);
      setFavourites([]);
      return;
    }
    getFavouritesArtWorks({ids: favs}).then(response => {
      setFavourites(response.data);
      setBaseIIF(response.config.iiif_url);
      setLoading(false);
    });
  }, [favIds]);

  const renderFavouritetems = ({
    item,
    index,
  }: {
    item: IArtWorkProps;
    index: number;
  }) => {
    const imageUrl = `${baseIIIF}/${item.image_id}/full/400,/0/default.jpg`;
    const handleItemPress = (itemId: number) => {
      navigation.navigate('SingleItemScreen', {itemId, baseIIIF});
    };

    return (
      <FavouriteCard
        imageUrl={imageUrl}
        index={index}
        item={item}
        onPress={() => handleItemPress(item.id)}
      />
    );
  };

  if (loading) {
    return <Loading size={LoadingSize.LARGE} color={colors.green[0]} />;
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FlatList
        data={favourite}
        renderItem={renderFavouritetems}
        contentContainerStyle={{
          paddingHorizontal: pixelSizeHorizontal(16),
          paddingTop: pixelSizeVertical(10),
          paddingBottom: pixelSizeVertical(50),
          backgroundColor: colors.white,
        }}
        ItemSeparatorComponent={() => <Separator size={20} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FavouritesScreen;
