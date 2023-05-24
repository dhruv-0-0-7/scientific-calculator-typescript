// Symbol Table to manage symbols for Buttons Events
export const SYMBOL_TABLE = {
    'pow': '^',
    'add': '+',
    'mul': '*',
    'sub': '-',
    'div': '/',
    'square': '(#)^2',
    'cube': '(#)^3',
    'sqrt': '√(',
    'qrt': '∛(',
    'xy': '(#)^(',
    'yrt': '(#)√(',
    '10x': '10^(',
    '2x': '2^(',
    'log': 'log(',
    'logy': 'log(#)(',
    'ln': 'ln(',
    'ex': 'e^(',
    'abs': '|#|',
    'inverse': '1/(',
    'fact': '!',
    'mod': '(#)mod(',
    'sin': 'sin(',
    'cos': 'cos(',
    'tan': 'tan(',
    'csc': 'csc(',
    'sec': 'sec(',
    'cot': 'cot(',
    'asin': 'asin(',
    'acos': 'acos(',
    'atan': 'atan(',
    'acsc': 'acsc(',
    'asec': 'asec(',
    'acot': 'acot(',
    'sinh': 'sinh(',
    'cosh': 'cosh(',
    'tanh': 'tanh(',
    'csch': 'csch(',
    'sech': 'sech(',
    'coth': 'coth(',
    'ceil': '⎡#⎤',
    'floor': '⎣#⎦',
    'pom': '(-#)'
};

// Keybindings with Symbol Table for Keypress Events
export const KEYS = {
    operations: {
        'Enter': 'eq',
        'Backspace': 'remove',
        'Escape': 'clear'
    },
    operators: {
        '+': 'add',
        '-': 'sub',
        '/': 'div',
        '*': 'mul',
        '^': 'pow'
    }
};