const result = document.getElementById('result');
const input = document.getElementById('input');

// Update some value on Screen
export function useScreen(val) {
    if (input.value === '0') {
        input.value = val;
    } else {
        input.value += val ?? 0;
    }
}

// Put Operator on Screen
export function useOperator(index = 0, val) {
    input.value = input.value.slice(0, index) + val;
}

// Clear Screen
export function clearScreen() {
    input.value = '0';
    result.innerHTML = '0';
}

// Remove Element from the Screen
export function removeElement() {
    if (input.value.length === 1) input.value = '0';
    else input.value = input.value.slice(0, -1);
}

// Update content of Result Screen
export function showResult(val) {
    result.innerHTML = val;
}