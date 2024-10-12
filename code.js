function convertTemperature() {
    const conversionType = document.getElementById('conversionType').value;
    const temperature = parseFloat(document.getElementById('tempInput').value);
    let result = '';
    
    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        if (conversionType === 'toFahrenheit') {
            result = `${temperature}°C = ${(temperature * 9/5) + 32}°F`;
        } else if (conversionType === 'toCelsius') {
            result = `${temperature}°F = ${(temperature - 32) * 5/9}°C`;
        }
    }
    
    document.getElementById('result').innerHTML = result;
}