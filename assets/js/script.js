function CalcLumpsum() {

    let amount = document.getElementById('lAmount').value;
    let percentage = document.getElementById('lPercentage').value;
    let months = document.getElementById('lMonths').value;

    let result = (parseInt(amount) * parseInt(percentage) * parseInt(months)) / 100;

    result = parseInt(amount) * (1 + (parseInt(percentage) / 100) * parseInt(months));

    document.getElementById('lResult').innerHTML = "Maturity Amount: $ " + result;
}