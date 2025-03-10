function calculate() {
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('results');

    if (operator === '/' && Math.abs(num2) < Number.EPSILON) {
        alert("Ошибка: деление на ноль!");
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '^': result = Math.pow(num1, num2); break;
        default: result = "Неизвестная операция";
    }

    const example = `${num1} ${operator} ${num2} = ${result}`;

    updateResults(example);
}

function updateResults(newExample) {
    const resultElement = document.getElementById('results');
    let results = resultElement.innerHTML.split('<br>');

    results.push(`<span class="new-result">${newExample}</span>`);

    if (results.length > 3) {
        results.shift(); 
    }

    for (let i = 0; i < results.length - 1; i++) {
        results[i] = results[i].replace('new-result', 'old-result');
    }

    resultElement.innerHTML = results.join('<br>');
}