import {
    valuesListener,
    operationsListener,
    operatorsListener,
    specialOperatorsListener,
    toggleFunction,
    keyPressListener
} from './src/main';

// EventListeners for type-values buttons
document.querySelectorAll('.values').forEach(elem => {
    elem.addEventListener('click', valuesListener);
});

// EventListeners for type-operations buttons
document.querySelectorAll('.operations').forEach(elem => {
    elem.addEventListener('click', operationsListener);
});

// EventListeners for type-operators buttons
document.querySelectorAll('.operators').forEach(elem => {
    elem.addEventListener('click', operatorsListener);
});

// EventListeners for type-special-operators buttons
document.querySelectorAll('.special-operators').forEach(elem => {
    elem.addEventListener('click', specialOperatorsListener);
});

// EventListeners for toggle buttons
document.querySelectorAll('.toggle-buttons').forEach(elem => {
    elem.addEventListener('click', toggleFunction);
});

// EventListeners for Keypress events
document.querySelector('body')?.addEventListener('keydown', keyPressListener);