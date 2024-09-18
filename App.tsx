import React, { useState } from 'react';
import { SafeAreaView, View, ViewStyle, LayoutChangeEvent, LayoutRectangle, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Coin, Text } from './src/components';

import utils from './src/utils/index';

import assets from './src/assets';
import theme from './src/theme';
import styles from './src/theme/styles';

import TextData from './src/data/text.json';

const Coins = utils.CreateCoinCode();
const GradientTexts = utils.GetGradientTexts();

const GRADIENT_TEXT_MARGIN_LEFT = 15;
const NAVBAR_IMAGE_STYLE = { width: 20, height: 20 };
const NAVBAR_HOME_IMAGE_STYLE = { width: 30, height: 30 };
const GRADIENT_SHADOW_TRANSITION_COLOR_WIDTH = 5;

const { colors, device: { width } } = theme;
const { GradientStyle, NavbarContainer, PercentageContainer, GradientColors, GradientShadowColors } = styles;

export default () => {
  const [gradientLayout, setGradientLayout] = useState<LayoutRectangle>();

  const GradientShadowsContainer: ViewStyle = {
    zIndex: -1,
    position: 'absolute',
    width: gradientLayout ? gradientLayout.width * 0.55 : 1,
    height: gradientLayout ? gradientLayout.height : 1,
    borderRadius: GradientStyle.borderRadius,
    top: 15,
    elevation: 20 // top + 5
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 0.1, marginTop: 20, marginBottom: 15 }}>
        <Text
          string={TextData.header}
          color={colors.black.text}
          type='bold'
          size='header'
          hAlign='center'
          multiline={2}
          margin={{ marginHorizontal: width * 0.2 }}
        />
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={GradientColors}
        style={GradientStyle}
        onLayout={(e: LayoutChangeEvent) => setGradientLayout(e.nativeEvent.layout)}
      >
        { /* LINEAR GRADIENT SHADOW */}
        <View style={[GradientShadowsContainer, { shadowColor: GradientShadowColors[0], alignSelf: 'flex-start', left: GRADIENT_SHADOW_TRANSITION_COLOR_WIDTH }]} />
        <View style={[GradientShadowsContainer, { shadowColor: GradientShadowColors[1], alignSelf: 'flex-end', right: GRADIENT_SHADOW_TRANSITION_COLOR_WIDTH }]} />

        <View style={{ flex: 0.45, justifyContent: 'center' }}>
          <Text string={TextData.gradientHeader1} color={colors.gray.gradient} margin={{ marginLeft: GRADIENT_TEXT_MARGIN_LEFT }} />
          <Text string={GradientTexts.total} color={colors.gray.gradient} size='header' type='bold' margin={{ marginLeft: GRADIENT_TEXT_MARGIN_LEFT }} />
        </View>

      <View style={{ flex: 0.55, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 0.65, justifyContent: 'center' }}>
          <Text string={TextData.gradientHeader2} color={colors.gray.gradient} margin={{ marginLeft: GRADIENT_TEXT_MARGIN_LEFT }} />
          <Text string={GradientTexts.profit} color={colors.gray.gradient} size='header' type='bold' margin={{ marginLeft: GRADIENT_TEXT_MARGIN_LEFT, marginTop: 5 }} />
        </View>
        <View style={PercentageContainer}>
          <Image source={assets.chevron_up} style={{ width: 20, height: 20 }} />
          <Text string={GradientTexts.percentage} type='bold' color={colors.green.increase} />
        </View>
      </View>
      </LinearGradient>

      <View style={{ flex: 0.05, marginTop: 35, justifyContent: 'center' }}>
        <Text string={TextData.coinsHeader} color={colors.black.text} type='bold' margin={{ marginLeft: GRADIENT_TEXT_MARGIN_LEFT }} />
      </View>

      <View style={{ flex: 0.35, justifyContent: 'center' }}>
        <FlatList
          data={Coins}
          renderItem={Coin}
          scrollEnabled={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </View>

      <View style={{ flex: 0.05, justifyContent: 'center', alignItems: 'center' }}>
        <Text string={TextData.more} color={colors.black.text} size='description' type='bold' />
      </View>

      <View style={{ flex: 0.2, marginHorizontal: 40, top: 10 }}>
        <View style={NavbarContainer}>
          <Image source={assets.home} style={NAVBAR_HOME_IMAGE_STYLE} />
          <Image source={assets.chart_pie} style={NAVBAR_IMAGE_STYLE} />
          <Image source={assets.search} style={NAVBAR_IMAGE_STYLE} />
          <Image source={assets.card} style={NAVBAR_IMAGE_STYLE} />
          <Image source={assets.user} style={NAVBAR_IMAGE_STYLE} />
        </View>
      </View>

    </SafeAreaView>
  );
}
