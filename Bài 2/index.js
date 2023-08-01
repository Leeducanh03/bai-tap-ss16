let arr = [];
let input;

// a.
while (true) {
    input = prompt("Nhập giá trị cho mảng: ");
    if (input === null || input === "" || isNaN(input)) {
        break;
    }
    arr.push(Number(input));
}
console.log(arr);
// b. 
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Tổng các giá trị của mảng: " + sum);

let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Phần tử có giá trị lớn nhất là: " + max);
console.log("Phần tử có giá trị nhỏ nhất là: " + min);

let xyz = max - min;
console.log("Giá trị của phần tử có giá trị max - min là: " + xyz);