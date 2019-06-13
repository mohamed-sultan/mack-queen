import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const guidelineBaseWidth = 365;
export const guidelineBaseHeight = 660;
export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;
export const moderateScale = (size, factor = defaultFactor) => size + (scale(size) - size) * factor;
