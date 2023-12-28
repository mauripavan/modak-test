export enum LoadingSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface ILoadingProps {
  size?: LoadingSize;
  color?: string;
}
