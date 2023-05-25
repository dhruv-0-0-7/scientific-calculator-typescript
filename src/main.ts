import Eval from './evaluate';
import { useScreen, clearScreen, removeElement, useOperator, showResult } from './hooks';
import { KEYS, SYMBOL_TABLE } from './constants';
import { getLastValidUnit, validateInputForNumbers, validateInputForOperators } from './validation';
import { FakeThis, OperationsKeys, OperatorsKeys, SymbolKeys } from './types';
import { memoryClear, memoryAdd, memoryStore, memoryRead, memorySub } from './memoryFunctions';

// Keypress EventListener
export function keyPressListener(event: KeyboardEvent) {
    const key = event.key;
    function fakeThis(val = key) {
        return {
            getAttribute() { return val; },
            getAttributeNames() { return [val]; }
        };
    }

    if (/\d|\./.test(key) || key === '(' || key === ')')
        valuesListener.call(fakeThis());
    else if (Object.keys(KEYS.operators).includes(key))
        operatorsListener.call(fakeThis(KEYS.operators[key as OperatorsKeys]));
    else if (Object.keys(KEYS.operations).includes(key))
        operationsListener.call(fakeThis(KEYS.operations[key as OperationsKeys]));
}

// type-Values EventListener
export function valuesListener(this: HTMLButtonElement | FakeThis) {
    const val = this.getAttribute('data-value') as string;
    const input = (document.getElementById('input') as HTMLInputElement).value;

    if (val === ')') useScreen(val);
    else if (validateInputForNumbers(input))
        if (val && isNaN(parseInt(val)))
            if (val === 'pi') useScreen(Math.PI.toFixed(2));
            else if (val === 'e') useScreen(Math.E.toFixed(2));
            else useScreen(val);
        else
            useScreen(val);
}

// type-Operations EventListener
export function operationsListener(this: HTMLButtonElement | FakeThis) {
    const symbol = this.getAttribute('data-symbol');
    switch (symbol) {
        case 'clear':
            clearScreen();
            break;
        case 'remove':
            removeElement();
            break;
        case 'eq':
            showResult(Eval((document.getElementById('input') as HTMLInputElement).value));
            break;
        case 'mc':
            memoryClear();
            break;
        case 'mr':
            memoryRead();
            break;
        case 'mp':
            memoryAdd(Eval((document.getElementById('input') as HTMLInputElement).value));
            break;
        case 'mm':
            memorySub(Eval((document.getElementById('input') as HTMLInputElement).value));
            break;
        case 'ms':
            memoryStore(Eval((document.getElementById('input') as HTMLInputElement).value));
            break;
    }
}

// type-Operators EventListener
export function operatorsListener(this: HTMLButtonElement | FakeThis) {
    const symbol = this.getAttribute('data-symbol');
    const input = (document.getElementById('input') as HTMLInputElement).value;

    if (validateInputForOperators(input)) {
        useScreen(SYMBOL_TABLE[symbol as SymbolKeys]);
    }
}

// type-SpecialOperators EventListener
export function specialOperatorsListener(this: HTMLButtonElement | FakeThis) {
    const symbol = this.getAttribute('data-symbol');
    const input = (document.getElementById('input') as HTMLInputElement).value;
    if (symbol) {
        if (!Object.keys(SYMBOL_TABLE).includes(symbol)) return;

        if (this.getAttributeNames().includes('data-last')) {
            if (!validateInputForOperators(input)) return;
            const validUnit = getLastValidUnit(input);
            const operation = SYMBOL_TABLE[symbol as SymbolKeys].replace('#', validUnit.value);
            useOperator(validUnit.index, operation);
        } else {
            const operation = SYMBOL_TABLE[symbol as SymbolKeys];
            useScreen(operation);
        }
    }
}

// Toggle EventListener
export function toggleFunction(this: HTMLButtonElement) {
    const temp = {
        'gen': 'hyp',
        'hyp': 'gen'
    };
    type IdentifierType = keyof typeof temp;

    const identifier = this.getAttribute('id')?.substr(0, 3) as IdentifierType;
    const status = this.getAttribute('data-status');

    function resetOtherToggle(identifier: keyof typeof temp) {
        const elem = document.getElementById(`${identifier}ToggleButton`) as HTMLButtonElement;
        elem.setAttribute('data-status', 'off');
        elem.style.backgroundColor = '#EFEFEF';
        document.querySelectorAll<HTMLButtonElement>(`.${identifier}-toggle-on`).forEach(elem => { elem.style.display = 'none'; });
        if (identifier === 'gen') {
            document.querySelectorAll<HTMLButtonElement>(`.${identifier}-toggle-off`).forEach(elem => { elem.style.display = 'block'; });
        }
    }

    if (Object.keys(temp).includes(identifier)) {
        resetOtherToggle(temp[identifier] as IdentifierType);
        this.setAttribute('data-status', status === 'on' ? 'off' : 'on');
        this.style.backgroundColor = status === 'on' ? '#EFEFEF' : 'cornflowerblue';
        let onSelector = `.${identifier}-toggle-${status === 'on' ? 'off' : 'on'}`;
        let offSelector = `.${identifier}-toggle-${status}`;
        if (identifier === 'hyp' && status === 'on')
            onSelector += `.${temp[identifier]}-toggle-off`;

        document.querySelectorAll<HTMLButtonElement>(onSelector).forEach(elem => { elem.style.display = 'block'; });
        document.querySelectorAll<HTMLButtonElement>(offSelector).forEach(elem => { elem.style.display = 'none'; });
    }
}