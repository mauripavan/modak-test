import {IArtWorkProps} from '../../screens/home/types';

export interface IMainCardProps {
  item: IArtWorkProps;
  imageUrl: string;
  onPress?: () => void;
  onFavouritePress: () => void;
}
