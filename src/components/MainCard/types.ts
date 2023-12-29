import {IArtWorkProps} from '../../screens/home/types';

export interface IMainCardProps {
  item: IArtWorkProps;
  index: number;
  imageUrl: string;
  onPress?: () => void;
}
