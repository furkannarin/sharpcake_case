import { Text, StyleProp, TextStyle, DimensionValue } from 'react-native';

import theme from '../theme';

const { colors, font } = theme;

type Props = {
    string: string
    color?: string
    type?: keyof typeof theme.font.types
    size?: keyof typeof theme.font.size
    hAlign?: TextStyle['textAlign']
    multiline?: number
    spacing?: number
    margin?: {
        marginBottom?: DimensionValue;
        marginEnd?: DimensionValue;
        marginHorizontal?: DimensionValue;
        marginLeft?: DimensionValue;
        marginRight?: DimensionValue;
        marginStart?: DimensionValue;
        marginTop?: DimensionValue;
        marginVertical?: DimensionValue;
    }
}

export default (props: Props) => {
    const {
        string = 'NO_TEXT',
        color = colors.black.text,
        hAlign = 'left',
        type = 'regular',
        size = 'regular',
        multiline = 1,
        spacing = 0.25,
        margin
    } = props;

    const style: StyleProp<TextStyle> = {
        color,
        textAlign: hAlign,
        fontSize: font.size[size],
        fontWeight: font.types[type] as TextStyle['fontWeight'],
        letterSpacing: spacing,
        ...margin
    };

    return (
        <Text numberOfLines={multiline} style={style}>
            {string}
        </Text>
    )
}
