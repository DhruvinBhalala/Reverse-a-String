function reversal() {
    var inputElement = document.getElementById("string");
    var inputValue = inputElement.value;
    var reversedValue = inputValue.split('').reverse().join('');
    inputElement.value = reversedValue;
}