import { ViewStyle } from 'react-native';

import theme from '../theme';

const { colors, device: { width }, borders } = theme;

const GradientColors = [
  colors.purple.gradient,
  colors.green.gradient
];

const GradientShadowColors = [
  colors.purple.shadow,
  colors.green.shadow
];

const GradientStyle: ViewStyle = {
  flex: 0.25,
  marginHorizontal: width * 0.15,
  borderRadius: borders.radius.card,
  elevation: 3,
  shadowColor: colors.transparent
};

const NavbarContainer: ViewStyle = {
  flex: 0.5,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: borders.radius.circle,
  elevation: 3,
  shadowRadius: 10,
  shadowOpacity: 0.3
};

const PercentageContainer: ViewStyle = {
  flex: 0.3,
  alignSelf: 'center',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: colors.white,
  borderRadius: borders.radius.button,
  height: 36,
  top: 5
}

export default {
  GradientStyle,
  GradientColors,
  GradientShadowColors,
  NavbarContainer,
  PercentageContainer
}