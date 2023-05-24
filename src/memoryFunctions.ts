import { useScreen } from './hooks.js';
const CALC_MEMORY = 'calc-memory';

export function memoryClear() {
    localStorage.setItem(CALC_MEMORY, '0');
}

export function memoryRead() {
    useScreen(localStorage.getItem(CALC_MEMORY));
}

export function memoryAdd(val) {
    const stored = parseFloat(localStorage.getItem(CALC_MEMORY));
    const result = stored + parseFloat(val);
    localStorage.setItem(CALC_MEMORY, result.toString());
}

export function memorySub(val) {
    const stored = parseFloat(localStorage.getItem(CALC_MEMORY));
    const result = stored - parseFloat(val);
    localStorage.setItem(CALC_MEMORY, result.toString());
}

export function memoryStore(val) {
    localStorage.setItem(CALC_MEMORY, val.toString());
}