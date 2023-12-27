import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {FlatList, SafeAreaView} from 'react-native';

import {getArtWorks} from '../../utils/api';
import Separator from '../../components/Separator';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/metrics';
import MainCard from '../../components/MainCard';
import {IArtWorkProps} from './types';

const HomeScreen = () => {
  const {colors} = useTheme();
  const [artWorks, setArtWorks] = useState<Array<IArtWorkProps>>([]);
  const [baseIIIF, setBaseIIF] = useState('');

  useEffect(() => {
    getArtWorks().then(response => {
      setArtWorks(response.data);
      setBaseIIF(response.config.iiif_url);
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
    return <MainCard item={item} index={index} imageUrl={imageUrl} />;
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
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
