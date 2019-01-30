var MAX_VALUE = 100;

for (var currentValue = 0; currentValue <= MAX_VALUE; currentValue += 1) {
    if (currentValue % 15 === 0) {
        console.log('fizzbuzz');
        continue;
    }

    if (currentValue % 5 === 0) {
        console.log('buzz');
        continue;
    }

    if (currentValue % 3 === 0) {
        console.log('fizz');
        continue;
    }

    console.log(currentValue);
}
