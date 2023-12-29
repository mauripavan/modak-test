import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {FlatList, SafeAreaView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState} from 'recoil';

import {getArtWorks} from '../../utils/api';
import Separator from '../../components/Separator';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/metrics';
import MainCard from '../../components/MainCard';
import {IArtWorkProps} from './types';
import Loading from '../../components/Loading';
import {LoadingSize} from '../../components/Loading/types';
import {favouritesState} from '../../store/app-state';

export type HomeScreenParamList = {
  HomeScreen: {itemId: number} | undefined;
};

const HomeScreen = () => {
  const {colors} = useTheme();
  const [artWorks, setArtWorks] = useState<Array<IArtWorkProps>>([]);
  const [baseIIIF, setBaseIIF] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [, setGlobalFav] = useRecoilState(favouritesState);

  useEffect(() => {
    setLoading(true);
    getArtWorks().then(response => {
      setArtWorks(response.data);
      setBaseIIF(response.config.iiif_url);
      setLoading(false);
    });
  }, []);

  const renderArtItems = ({
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
    const handleFavouritePress = (itemId: number) => {
      setGlobalFav(prev => {
        if (prev.includes(itemId)) {
          return prev.filter(item => item !== itemId);
        } else {
          return [...prev, itemId];
        }
      });
    };

    return (
      <MainCard
        item={item}
        index={index}
        imageUrl={imageUrl}
        onPress={() => handleItemPress(item.id)}
        onFavouritePress={() => handleFavouritePress(item.id)}
      />
    );
  };

  if (loading) {
    return <Loading size={LoadingSize.LARGE} color={colors.green[0]} />;
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FlatList
        data={artWorks}
        renderItem={renderArtItems}
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

export default HomeScreen;
