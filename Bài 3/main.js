// Bài 1. Khai báo mảng một chiều có tên arrayInt
// a. Nhập 5 giá trị số nguyên cho mảng từ bàn phím
// b. Hiển thị giá trị các phần tử của mảng
// c. In các phần tử có giá trị chẵn và tính tổng
// d. In các phần tử có chỉ số lẻ và tính tổng
// e. In giá trị các phần tử trong mảng là số nguyên tố
// f. In các phần tử có giá trị là max hoặc min
// g. Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp
// xếp (không và có sử dụng hàm sort)
// h. Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá
// trị như vậy

// ----- CODE -----

// a.
// let mang = prompt("Nhap mang ngan cach voi nhau bang dau ','")
// let arrInt = mang.split(",")
// for (const i in arrInt) {
//     arrInt[i] = Number(arrInt[i])
// }

// b.
// console.log(arrInt);

// // c.
// let sumChan = 0;
// for (const value of arrInt) {
//     if (value % 2 == 0) {
//         sumChan += value
//     }
// }
// console.log("Tong cac so chan la: ", sumChan);

// // d.
// let sumLe = 0;
// for (const i in arrInt) {
//     if (i % 2 != 0) {
//         sumLe += arrInt[i]
//     }
// }
// console.log("Tong cac phan tu le la: ", sumLe);

// e. In giá trị các phần tử trong mảng là số nguyên tố
// function isNguyenTo(so) {
//     for (i = 2; i <= Math.sqrt(so); i++) {
//         if (so % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (const value of arrInt) {
//     if (isNguyenTo(value)) {
//         console.log(value, " la so nguyen to");
//     }
// }

// f.
// let max = min = arrInt[0];
// for (const i in arrInt) {
//     if (arrInt[i] >= max) {
//         max = arrInt[i]
//     } else {
//         min = arrInt[i]
//     }
// }
// console.log(`Max: ${max}; Min: ${min}`);

// g.
// ko su dung sort
// for (let i = 0; i < arrInt.length - 1; i++) {
//     for (let j = i + 1; j < arrInt.length; j++) {
//         if (arrInt[i] < arrInt[j]) {
//             let temp = arrInt[i]
//             arrInt[i] = arrInt[j]
//             arrInt[j] = temp
//         }
//     }
// }
// console.log("Mang sau khi sap xep: ", arrInt);
// co su dung sort
// console.log(arrInt.sort((a, b) => b - a));

// h
// let n = Number(prompt("Nhap vao so nguyen"))
// let count = 0
// for (const value of arrInt) {
//     if (value == n) {
//         count++;
//     }
// }
// console.log(`${n} xuat hien ${count} lan`);


// Bài 2. Khai báo mảng 2 chiều số nguyên arrInt
// a. Nhập giá trị các phần tử của mảng từ bàn phím
// let arrInt = [];
// let x = +prompt("Nhap so phan tu cua mang");
// let y = +prompt("Nhap so phan tu cua cac mang con");
// for (let i = 0; i < x; i++) {
//     arrInt[i] = [];
//     for (let j = 0; j < y; j++) {
//         arrInt[i][j] = +prompt(`Nhap phan tu thu ${j + 1}/${y} cua mang con ${i + 1}/${x}`);
//     }
// }
// console.log(arrInt);
// // b. In giá trị các phần tử của mảng
// for (let i in arrInt) {
//     console.log("row " + i);
//     for (let j in arrInt) {
//         console.log(arrInt[i][j]);
//     }
// }
// // c. In giá trị các phần tử nằm trên đường biên (Coi mảng 2 chiều là ma
// // trận)
// for (let i = 0; i < x; i++) {
//     console.log(arrInt[0][i]);
//     console.log(arrInt[x - 1][i]);
// }
// for (let j = 0; j < y; j++) {
//     console.log(arrInt[j][0]);
//     console.log(arrInt[j][y - 1]);
// }
// d. In giá trị các phần tử nằm trên đường chéo chính và phụ
// function maTran(num) {
//     const n = num.length
//     console.log(`duong cheo chinh`);
//     for (let i = 0; i < n; i++) {
//         console.log(num[i][i]);
//     }
//     console.log(`duong cheo phu`);
//     for (let i = 0; i < n; i++) {
//         console.log(num[i][n - i - 1]);
//     }
// }
// const num = [
//     [4, 2, 3, 1],
//     [5, 8, 7, 6],
//     [11, 10, 9, 12],
//     [15, 14, 13, 16]
// ]
// maTran(num)


// // e. Sắp xếp mảng tăng dần theo dòng (không và có sử dụng hàm sort)
// function tangDan(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].sort((a, b) => a - b)
//     }
//     return arr
// }

// console.log(tangDan(num));

// 3. Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
// let array = ["Jazz", "Blues"];
// // a. Thêm phần tử “Rock-n-Roll” vào cuối mảng
// array.push("Rock-n-Roll");
// // b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng
// // có tổng số phần tử là lẻ
// if (array.length % 2 !== 0) {
//     array[Math.floor(array.length / 2)] = "Classics";
// }
// // c. Xóa phần tử đầu tiên của mảng và hiển thị mảng
// array.shift();
// // d. Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
// array.unshift("Rap");
// array.unshift("Reggae");
// console.log(array);
// // 5. Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b
// // Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và b

// let arrIteger = [];
// let a = +prompt("Nhap vao so a:");
// let b = +prompt("Nhap vao so b:");
// for (i = a; i <= b; i++) {
//     arrIteger.push(i);
// }
// console.log(`So nguyen  dau tien la ${a}`);
// console.log(`So nguyen  cuoi cung la ${b}`);
// console.log(arrIteger);

// Bài 4: Khai báo mảng một chiều
// a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt
// và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”

// b. Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min
// (không và có sử dụng hàm Math.max và Math.min)

// ----- CODE -----
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

// Bài 5. Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b
// Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và b

// let arrIteger = [];
// let a = +prompt("Nhap vao so a:");
// let b = +prompt("Nhap vao so b:");
// for (i = a; i <= b; i++) {
//     arrIteger.push(i);
// }
// console.log(`So nguyen  dau tien la ${a}`);
// console.log(`So nguyen  cuoi cung la ${b}`);
// console.log(arrIteger);