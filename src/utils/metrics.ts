import {Dimensions, PixelRatio} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const widthBaseScale = windowWidth / 428;
const heightBaseScale = windowHeight / 926;

function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export {
  windowWidth,
  windowHeight,
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
};
