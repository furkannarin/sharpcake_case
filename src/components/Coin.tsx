import { View, Image, StyleProp, ImageStyle, ListRenderItemInfo, ViewStyle } from 'react-native';
import { Text } from './index';

import utils, { CoinDataType } from '../utils';

import theme from '../theme';
import assets from '../assets';

const { colors, borders } = theme;

const IconImageStyle: StyleProp<ImageStyle> = {
    width: 35,
    height: 35,
    borderRadius: borders.radius.circle
}

const ContainerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borders.radius.card,
    margin: 10,
    paddingVertical: 5,
    elevation: 1,
    shadowOpacity: 0.1
}

// currently this has flex: 1,
// this means, if array num. is an odd number, the last element will cover all available space. (add a dummy data to see)
// this could be resolved by passing these down:
// array num. and bIsLastIdx.
// then, if (bIsLastIdx && array num. % 2 !== 0) use flex: 0.5;

export default (props: ListRenderItemInfo<CoinDataType>) => {
    const { changePercentage, iconUrl, name, value, code } = props.item;

    // this could be cached if we had a socket connection. out of scope
    const coinValText = utils.GetUpdatedCoinValAsString(value, changePercentage);

    const hasIncreased = changePercentage > 0;
    const icon = hasIncreased ? assets.chevron_up : assets.chevron_down;

    const changeText = (() => {
        let text = `${changePercentage}%`.replaceAll('.', ',');

        if (!hasIncreased) return text.slice(1);
        return text;
    })();

    return (
        <View style={ContainerStyle}>
            <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                    <Image style={IconImageStyle} resizeMode='contain' source={{ uri: iconUrl }} />
                </View>
                <View style={{ flex: 0.7, justifyContent: 'flex-start', marginLeft: 10 }}>
                    <Text string={code} color={colors.black.text} size='regular' type='bold' margin={{ marginBottom: 5 }} />
                    <Text string={name} color={colors.gray.coinDesc} size='description' margin={{ marginBottom: 5 }} />
                </View>
            </View>

            <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 5, marginHorizontal: 15 }}>
                <Text string={coinValText} color={colors.black.text} type='bold' />
                <Image source={icon} style={{ width: 20, height: 20, marginLeft: 50, right: 8 }} />
                <Text string={changeText} type='bold' color={hasIncreased ? colors.green.increase : colors.red.decrease} />
            </View>
        </View>
    )
}
