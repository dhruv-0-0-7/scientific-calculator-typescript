// Validate Input for Numbers
// Checks whether the Number can be added to Expression or not
export function validateInputForNumbers(input: string) {
    const numbersInputValidationRegex = /^(.(?!\)$))+$/g;
    return numbersInputValidationRegex.test(input);
}

// Validate Input for Opeartors
// Checks whether the Operator can be used on current Expression or not
export function validateInputForOperators(input: string) {
    const operatorsValidationRegex = /((\((\d+(\.\d+)?)\)|(?<!\()(\d+(\.\d+)?)|(\(\-)(\d+(\.\d+)?)\))|((\(\-)?(\||\⎡|\⎣)(\(\-)?[^\+\*\^\-]+\)?(\||\⎤|\⎦)\)?)|((?<!(\blog\b|\bln\b|\bsin\b|\bcos\b|\btan\b|\bcsc\b|\bsec\b|\bcot\b|\basin\b|\bacos\b|\batan\b|\bacsc\b|\basec\b|\bacot\b|\bsinh\b|\bcosh\b|\btanh\b|\bcsch\b|\bsech\b|\bcoth\b|√|∛)\()(\(\-)?(\blog\b|\bln\b|\bsin\b|\bcos\b|\btan\b|\bcsc\b|\bsec\b|\bcot\b|\basin\b|\bacos\b|\batan\b|\bacsc\b|\basec\b|\bacot\b|\bsinh\b|\bcosh\b|\btanh\b|\bcsch\b|\bsech\b|\bcoth\b|√|∛)\((?!.+\).+(\+|\-|\*|\^|\/|\blog\b|\bln\b|\bsin\b|\bcos\b|\btan\b|\bcsc\b|\bsec\b|\bcot\b|\basin\b|\bacos\b|\batan\b|\bacsc\b|\basec\b|\bacot\b|\bsinh\b|\bcosh\b|\btanh\b|\bcsch\b|\bsech\b|\bcoth\b|√|∛)).+\)))\!?$/g;
    return operatorsValidationRegex.test(input);
}

/* 
Get Last valid Unit of Current Expression
for Expression => 1+log(10)+log(sin(1))
Last Valid unit will be => log(sin(1))
*/
export function getLastValidUnit(input: string) {
    const operatorsValidationRegex = /((\((\d+(\.\d+)?)\)|(?<!\()(\d+(\.\d+)?)|(\(\-)(\d+(\.\d+)?)\))|((\(\-)?(\||\⎡|\⎣)(\(\-)?[^\+\*\^\-]+\)?(\||\⎤|\⎦)\)?)|((?<!(\blog\b|\bln\b|\bsin\b|\bcos\b|\btan\b|\bcsc\b|\bsec\b|\bcot\b|\basin\b|\bacos\b|\batan\b|\bacsc\b|\basec\b|\bacot\b|\bsinh\b|\bcosh\b|\btanh\b|\bcsch\b|\bsech\b|\bcoth\b|√|∛)\()(\(\-)?(\blog\b|\bln\b|\bsin\b|\bcos\b|\btan\b|\bcsc\b|\bsec\b|\bcot\b|\basin\b|\bacos\b|\batan\b|\bacsc\b|\basec\b|\bacot\b|\bsinh\b|\bcosh\b|\btanh\b|\bcsch\b|\bsech\b|\bcoth\b|√|∛)\((?!.+\).+(\+|\-|\*|\^|\/|\blog\b|\bln\b|\bsin\b|\bcos\b|\btan\b|\bcsc\b|\bsec\b|\bcot\b|\basin\b|\bacos\b|\batan\b|\bacsc\b|\basec\b|\bacot\b|\bsinh\b|\bcosh\b|\btanh\b|\bcsch\b|\bsech\b|\bcoth\b|√|∛)).+\)))\!?$/g;

    const validUnits = operatorsValidationRegex.exec(input) as RegExpExecArray;

    return {
        value: validUnits[0],
        index: operatorsValidationRegex.lastIndex - validUnits[0].length
    };
}