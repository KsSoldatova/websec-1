function calculate() {
    try {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operator = document.getElementById("operator").value;
        const resultsBox = document.getElementById("results");

        if (isNaN(num1) || isNaN(num2)) {
            resultsBox.textContent = ""; 
            throw new Error("Ошибка! Введите корректные числа.");
        }

        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (Math.abs(num2) < Number.EPSILON) {
                    resultsBox.textContent = "Ошибка! Деление на ноль.";
                    return;
                }
                result = num1 / num2;
                break;
            case "^":
                result = Math.pow(num1, num2);
                break;
            default:
                resultsBox.textContent = "Ошибка! Неизвестная операция.";
                return;
        }

        addResult(resultsBox, `${num1} ${operator} ${num2} = ${result}`);

        if (resultsBox.children.length > 3) {
            resultsBox.removeChild(resultsBox.firstElementChild); 
        }
    } catch (error) {
        alert(error.message);
    }
}

function addResult(resultsBox, resultText) {
    const previousResults = resultsBox.querySelectorAll(".new-result");
    previousResults.forEach(result => {
        result.classList.remove("new-result");
        result.classList.add("old-result");
    });

    const newResult = document.createElement("div");
    newResult.classList.add("new-result");
    newResult.textContent = resultText;

    resultsBox.append(newResult);
}