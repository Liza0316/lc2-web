// завдання 1 
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(obj[key]);
}

// завданян2 
let n = 10;
let i = 2;

while (i <= n) {
    let j = 2;
    let isPrime = true;
    
    while (j < i) {
        if (i % j === 0) {
            isPrime = false;
        }
        j++;
    }
    
    if (isPrime) {
        console.log(i);
    }
    
    i++;
}

// завдання 3
let number;

do {
    number = prompt("Введіть число більше за 100", "");
    
    if (number === "" || number === null) {
        break;
    }
} while (Number(number) <= 100);

console.log("Введене число:", number);


