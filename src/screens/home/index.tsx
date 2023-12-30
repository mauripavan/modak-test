import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
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
import {getArray, updateArray} from '../../utils/functions';

export type HomeScreenParamList = {
  HomeScreen: {itemId: number} | undefined;
};

const HomeScreen = () => {
  const {colors} = useTheme();
  const [artWorks, setArtWorks] = useState<Array<IArtWorkProps>>([]);
  const [baseIIIF, setBaseIIF] = useState('');
  const [loading, setLoading] = useState(false);
  const [, setGlobalFav] = useRecoilState(favouritesState);
  const [nextUrl, setNextUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [initialRender, setInitialRender] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setLoading(true);
    getArtWorks(currentPage)
      .then(response => {
        setArtWorks(prev => [...prev, ...response.data]);
        setBaseIIF(response.config.iiif_url);
        setNextUrl(response.pagination.next_url);
      })
      .finally(() => {
        setLoading(false);
        setIsFetching(false);
        setInitialRender(false);
      });
  }, [currentPage]);

  useEffect(() => {
    getArray('favourites').then(response => {
      if (response !== null) setGlobalFav(response);
    });
  }, []);

  const handleEndReached = () => {
    if (isFetching) return;
    setIsFetching(true);
    setCurrentPage(prev => prev + 1);
  };

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
      updateArray('favourites', itemId);
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
        key={`aw-${index}-${item.id}`}
        item={item}
        imageUrl={imageUrl}
        onPress={() => handleItemPress(item.id)}
        onFavouritePress={() => handleFavouritePress(item.id)}
      />
    );
  };

  if (loading && initialRender) {
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
        keyExtractor={(item, index) => `aw-${index}-${item.id}`}
        ItemSeparatorComponent={() => <Separator size={20} />}
        showsVerticalScrollIndicator={false}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          return (
            loading &&
            !initialRender &&
            nextUrl && (
              <ActivityIndicator
                size={'small'}
                color={colors.green[0]}
                style={{paddingTop: pixelSizeVertical(10)}}
              />
            )
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
