import { Platform, Dimensions, PixelRatio } from 'react-native';

export const DEFAULT_FONT = 'Roboto_medium';
export const SECONDARY_FONT = Platform.OS === 'android' ? 'basis' : 'Roboto_medium';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export function normalize(size) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    if (deviceWidth < 360) {
      return size * 0.95;
    }
    if (deviceHeight < 667) {
      return size;
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    return size * 1.25;
  }
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    if (deviceWidth <= 360) {
      return size;
    }
    if (deviceHeight < 667) {
      return size * 1.15;
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    return size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    if (deviceWidth <= 360) {
      return size;
    }
    if (deviceHeight < 667) {
      return size * 1.2;
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    return size * 1.4;
  }
  return size;
}
