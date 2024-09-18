import CoinData from '../data/data.json';

export type CoinDataType = {
    code: string
    name: string
    amount: number
    value: number
    iconUrl: string
    changePercentage: number
}

// Creates coin code from name and returns a NEW array
function CreateCoinCode(): CoinDataType[] {
    return CoinData.coins.map(c => ({
        ...c,
        code: c.name.slice(0, 3).toUpperCase()
    }));
}

// Parse the given value into bases and insert comma between them
function ParseValue(updated: number): string {
    const str = updated.toString();
    const truncated = Math.trunc(updated).toString();

    const decimalPointCharacterIdx = str.indexOf('.');
    const fractal = decimalPointCharacterIdx !== -1 ? str.slice(decimalPointCharacterIdx + 1).slice(0, 2) : '';

    let integral = '';
    for (let i = 0; i < truncated.length; i++) {
        const digitsLeft = truncated.length - i - 1;
        integral += truncated[i];
        if (digitsLeft % 3 === 0) integral += ',';
    };

    // remove the comma from the end of the string if no fractal exists
    if (!fractal) {
        // check if comma actually exists, in case 
        if (integral[integral.length - 1] === ',') {
            integral = integral.slice(0, integral.length - 1);
        }
    }

    return '$' + integral + fractal;
}

// Apply the changePercentage to the value and return its string representation
function GetUpdatedCoinValAsString(value: number, change: number): string {
    return ParseValue(value + (value * (change / 100)));
}

type GradientTextType = {
    total: string
    profit: string
    percentage: string
}

function GetGradientTexts(): GradientTextType {
    return {
        total: ParseValue(CoinData.totalValue),
        profit: `$${CoinData.todayProfit}`.replaceAll('.', ','),
        percentage: `${CoinData.profitPercentage}%`.replaceAll('.', ',')
    }
}

export default {
    CreateCoinCode,
    GetUpdatedCoinValAsString,
    GetGradientTexts
};
