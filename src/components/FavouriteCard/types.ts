import {IArtWorkProps} from '../../screens/home/types';

export interface IFavouriteCardProps {
  item: IArtWorkProps;
  index: number;
  imageUrl: string;
  onPress: () => void;
}
